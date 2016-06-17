'use strict';

var tableName = "brands";
var globalSecondaryIndex = "activeIndex";
var params = {};

let doc = require('dynamodb-doc');
let dynamo = new doc.DynamoDB();

exports.handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('Received context:', JSON.stringify(context, null, 2));

    if(event.params.querystring.hasOwnProperty("active")){
        params = {
            TableName: "brands",
            IndexName: "activeIndex",
            KeyConditionExpression: "active = :active",
            ExpressionAttributeValues: {
                ":active": 1
            },
        };

        dynamo.query(params, function(err, data){
            if(err){
                callback(err);
            }
            else{
                /*
                 data.Items.foreach(function(brand){
                 brand.etag = brand.id;
                 brand.self = "";

                 });
                 */
                console.log(data.Items);
                callback(null, data);
            }
        });

    }
    /*
     params = {
     TableName: tableName,
     };
     dynamo.scan(params, callback);
     */
};