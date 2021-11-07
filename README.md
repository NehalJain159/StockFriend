# StockFriend

## Problem statement
To notify the user about changes in stock prices automatically and instantaneously.

## Solution
1. Register user, his desired stock price and company after OTP verification and store this data in dynamoDB.
2. The stock prices are fetched using lambda function from Polygon Stock API.
3. Monitor the changes in stock price every minute using cloudwatch.
4. As soon as desired price is reached, send sms to the eligible user using sns.

## Architecture
![architecture](https://github.com/NehalJain159/StockFriend/blob/main/Architecture.png)
