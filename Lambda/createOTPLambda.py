import json
import boto3
import base64
import traceback

def lambda_handler(event, context):
    # TODO implement
    try:
        #send otp to user
        client = boto3.client('sns')
        request = json.loads(event['body'])
        number = request['phoneNumber']
        
        response = client.create_sms_sandbox_phone_number(
            PhoneNumber=number,
            LanguageCode='en-US'
        )
        
        # send success message
        return {
            'statusCode': 200,
            'headers':{
                'Access-Control-Allow-Origin':'*'
            },
            'body':"OTP sent successfully!"
        }
        
    except:
        # send error message
        return {
            'statusCode': 404,
            'headers':{
                'Access-Control-Allow-Origin':'*'
            },
            'body': json.dumps(traceback.format_exc())
        }
        