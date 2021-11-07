import json
import boto3
import traceback
import datetime
from decimal import Decimal

def lambda_handler(event, context):
    try:
        # confirm user's otp
        client = boto3.client('sns')
        request = json.loads(event['body'])
        
        response = client.verify_sms_sandbox_phone_number(
            PhoneNumber=request["phoneNumber"],
            OneTimePassword=request["oneTimePassword"]
        )
        
        # add user to dynamodb
        db = boto3.resource('dynamodb')
        table = db.Table('stock_friend_users')
        stock_type = 'lesser'
        if request['desiredSharePrice'] < request['sharePurchasedAtPrice'] :
            stock_type = 'greater'
        
        res = table.put_item(
            Item={
                'company':request['company'],
                'stock_type-phone_number':stock_type + '#' + request['phoneNumber'],
                'name':request['name'],
                'desired_share_price':request['desiredSharePrice'], 
                'last_share_price_notified': Decimal(datetime.datetime(1990, 1, 1).timestamp())
            }    
        )
        
        # send success message
        return {
            'statusCode': 200,
            'headers':{
                'Access-Control-Allow-Origin':'*'
            },
            'body': json.dumps('User added successfully')
        }
        
    except:
        
        return {
            'statusCode':500,
            'headers':{
                'Access-Control-Allow-Origin':'*'
            },
            'body': json.dumps(traceback.format_exc())
        }