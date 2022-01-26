const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

let docClient = new AWS.DynamoDB.DocumentClient();
var table = "products";

const listAllProduct = async () => {
  const items = {
    TableName: table,
  };
  const data = await docClient.scan(items).promise();
  return data
};


module.exports = {listAllProduct};
