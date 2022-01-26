const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

let docClient = new AWS.DynamoDB.DocumentClient();
var table = "products";

const listAllProduct = async () => {//all products are listed
  const items = {
    TableName: table,
  };
  const data = await docClient.scan(items).promise();
  return data
};

const createProduct = async (params) => {//new product is added
 
  const item = {
    TableName: table,
    Item: {
      productId: uuidv4(),
      stock: params.stock,
      productName: params.productName,
      isDiscount: params.isDiscount,
      category: {
        categoryId: uuidv4(),
        categoryName: params.category.categoryName,
      },
    },
  };
  return await docClient.put(item).promise();
};

const singleProduct = async (params) => {//Lists the product whose id is entered
  var items = {
    TableName: table,
    Key: {
      productId: params.productId,
    },
  };
    return await docClient.get(items).promise();
    
};
const discountProduct = async () => {//If there is a discounted product, it will bring
  const items = {
    TableName: table,
  };
  const data = await docClient.scan(items).promise();
  const discountFilter=data.Items.filter(value=>value.isDiscount)
  return discountFilter
};

const updateProductStock = async (productId,modifyStock) => {//Product stock is updated
  var item = {
    TableName: table,
    Key: {
      productId:productId,
    },
    UpdateExpression: "set stock = :stock",
    ExpressionAttributeValues: {
      ":stock":modifyStock
    },
    ReturnValues: "UPDATED_NEW"
  };
 const data= await docClient.update(item).promise();
 return data
};

const deleteProduct = async (productId) => { //If there is a discounted product, it will not be deleted.
  var item= {
    TableName: table,
    Key: {
      productId:productId,
    },
    ConditionExpression:"isDiscount = :val",
    ExpressionAttributeValues: {
      ":val":false
    },
  };  
  const data= await docClient.delete(item).promise();
  return data
};

module.exports = {listAllProduct,createProduct,singleProduct,updateProductStock,deleteProduct,discountProduct};
