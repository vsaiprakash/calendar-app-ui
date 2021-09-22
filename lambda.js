const awsServerlessExpress = require('@vendia/serverless-express');
const server = require('./dist/calendar-app-ui/server');
const awsServerlessExpressMiddleware = require('@vendia/serverless-express/middleware');

server.app.use(awsServerlessExpressMiddleware.eventContext());

const serverProxy = awsServerlessExpress.createServer(server.app);

module.exports.ssrserverless = (event, context) => awsServerlessExpress.proxy(serverProxy, event, context);
