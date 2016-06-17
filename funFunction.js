'use strict';

var tableName = "brands";
var globalSecondaryIndex = "activeIndex";
var params = {};

let doc = require('dynamodb-doc');
let dynamo = new doc.DynamoDB();

exports.handler = (event, context, callback) => {
//console.log('Received event:', JSON.stringify(event, null, 2));

if(event.params.querystring.hasOwnProperty("active")){

params = {
TableName: "brands",
IndexName: "activeIndex",
KeyConditionExpression: "active = :active",
ExpressionAttributeValues: {
":active": 1
},
};
console.log(Boolean(event.params.querystring.active));
dynamo.query(params, callback);

}
/*
params = {
  TableName: tableName,
};
dynamo.scan(params, callback);
*/
}