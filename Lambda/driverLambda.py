import requests
import json,traceback
import boto3
from boto3.dynamodb.conditions import Key, Attr
from datetime import datetime
from decimal import Decimal

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('stock_friend_users')

# stock market api key -> eVXrvRjP7A6Jb31TXpsW2NOSSe7Hpthz
def lambda_handler(event, context):
    client = boto3.client('sns')
    company_ticker_dict = { 'Amazon' : 'AMZN', 'Apple' : 'AAPL', 'Facebook' : 'FB', 'Google' : 'GOOGL'}
    company_stock_dict = {}
    
    #storing per stock value of all the companies
    for company in company_ticker_dict :
        ticker = company_ticker_dict[company]
        response = requests.get("https://api.polygon.io/vX/reference/tickers/" + ticker + "?apiKey=eVXrvRjP7A6Jb31TXpsW2NOSSe7Hpthz")
        data = response.json()
        market_cap = data["results"]["market_cap"]
        outstanding_shares = data["results"]["outstanding_shares"]
        
        company_stock_dict[company] = market_cap/outstanding_shares
    
    return dynamodb_check(company_stock_dict)
 
# check if notification has been sent to user in past 24 hrs else send sms notification 
def sms_filtered_users(filtered_users):
    client = boto3.client('sns')
    contact_numbers = []
    phone_number = ''
    
    for user in filtered_users: 
        present_timestamp = datetime.now().timestamp()
                
        if (present_timestamp - float(user['last_share_price_notified'])>86400):
            string = user['stock_type-phone_number']
            phone_number_si = string.index('#') + 1
            phone_number = string[phone_number_si:]
            company = user['company']
            response = client.publish(
                PhoneNumber=phone_number,
                Message='Congrats!! Stock prize of '+ company +' has reached your desired price.',
            )
                    
            update_response = table.update_item( 
                Key={
                      'company' : user['company'],
                      'stock_type-phone_number' : user['stock_type-phone_number']
                    },
                UpdateExpression="set last_share_price_notified=:r",
                ExpressionAttributeValues={
                    ':r': Decimal(present_timestamp)
                },)
            contact_numbers.append(phone_number)
        
    return contact_numbers
    
def dynamodb_check(company_stock_dict):
    filtered_users = []
    
    try:
        for company in company_stock_dict :
            # users who are interested to know when stock price lowers to their desired value
            data = table.query(
                KeyConditionExpression = Key('company').eq(company) & Key('stock_type-phone_number').begins_with("lesser"),
                FilterExpression = Attr('desired_share_price').lte(Decimal(str(company_stock_dict[company]))) 
            )
            if data['Items'] : 
                filtered_users.extend(data['Items'])
            
            # users who are interested to know when stock price increases to their desired value
            data = table.query(
                KeyConditionExpression = Key('company').eq(company) & Key('stock_type-phone_number').begins_with("greater"),
                FilterExpression = Attr('desired_share_price').gte(Decimal(str(company_stock_dict[company]))) 
            )
            if data['Items'] : 
                filtered_users.extend(data['Items'])
        
        return sms_filtered_users(filtered_users)
        
    except:
       return {
            'statusCode': 404,
            'headers':{
                'Access-Control-Allow-Origin':'*'
            },
            'body': json.dumps(traceback.format_exc())
        }
        