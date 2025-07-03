# Serverless Contact API (AWS)

This project builds a serverless REST API using:
- **API Gateway**
- **AWS Lambda**
- **DynamoDB**

## Features
- POST endpoint `/contact`
- Stores contact form data into DynamoDB
- Fully serverless architecture

## Lambda Function

See `index.js` for the AWS Lambda code that receives POST requests and writes to DynamoDB.

## Sample Request (cURL)

```bash
curl -X POST https://6kxy6g1nr8.execute-api.ap-south-1.amazonaws.com/contact \
  -H "Content-Type: application/json" \
  -d '{ "name": "Karthik", "email": "karthik@gmail.com", "message": "Hello" }'
