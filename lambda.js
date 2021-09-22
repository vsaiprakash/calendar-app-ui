const awsServerlessExpress = require('aws-serverless-express');//@vendia/serverless-express
const server = require('./dist/calendar-app-ui/server');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');//@vendia/serverless-express

server.app.use(awsServerlessExpressMiddleware.eventContext());

const serverProxy = awsServerlessExpress.createServer(server.app);

module.exports.ssrserverless = (event, context) => awsServerlessExpress.proxy(serverProxy, event, context);
