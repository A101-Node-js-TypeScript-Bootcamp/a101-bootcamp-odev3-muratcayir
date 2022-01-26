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

const singleProduct = async (params) => {
  var items = {
    TableName: table,
    Key: {
      productId: params.productId,
    },
  };
    return await docClient.get(items).promise();
    
};



module.exports = {listAllProduct,singleProduct};
