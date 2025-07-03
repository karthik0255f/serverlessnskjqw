const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

exports.handler = async (event) => {
    const body = JSON.parse(event.body);

    const params = {
        TableName: "Contacts",
        Item: {
            email: body.email,
            name: body.name,
            message: body.message
        }
    };

    try {
        await docClient.send(new PutCommand(params));
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Contact saved successfully" })
        };
    } catch (err) {
        console.error("DynamoDB Error:", err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to save contact" })
        };
    }
};
