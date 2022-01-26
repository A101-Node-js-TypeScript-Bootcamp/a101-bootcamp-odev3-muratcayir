const AWS = require("aws-sdk")

const connectAws= async ()=> {
  await AWS.config.update({
  region: "us-east-1",
  accessKeyId: "AKIAU27ZVAGKTUJ4K7IZ",
  secretAccessKey: "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",
  endpoint: "https://dynamodb.us-east-1.amazonaws.com"
})}


module.exports={connectAws}