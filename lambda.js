const awsServerlessExpress = require('aws-serverless-express');//@vendia/serverless-express
const server = require('.dist/calendar-app-ui/server/main');//aws-serverless-express
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');//@vendia/serverless-express

server.app.use(awsServerlessExpressMiddleware.eventContext());

const serverProxy = awsServerlessExpress.createServer(server.app);

module.exports.ssrserverless = (event, context) => awsServerlessExpress.proxy(serverProxy, event, context);


// const serverlessExpress = require('@vendia/serverless-express');
// const app = require('./app');
// exports.ssrserverless = serverlessExpress({ app });

// exports.ssrserverless = async()=>{
//     return "Good!!";
// }