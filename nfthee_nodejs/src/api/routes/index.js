const { credentials } = require('../../config').constantCredentials;
const apiV1Prefix = credentials.API_ROUTE_PREFIX;

// configure all routes
module.exports = (app) => {
  app.use(apiV1Prefix, require('./blogRoute')),
    app.use(apiV1Prefix, require('./partnerRoute')),
    app.use(apiV1Prefix, require('./verificationRoute')),
    app.use(apiV1Prefix, require('./categoryRoute')),
    app.use(apiV1Prefix, require('./suggestionRoute')),
    app.use(apiV1Prefix, require('./nftteamsRoute')),
    app.use(apiV1Prefix, require('./createCollectionRoute')),
    app.use(apiV1Prefix, require('./signupRouter'));
    app.use(apiV1Prefix, require('./blockchainRoute'));
    app.use(apiV1Prefix, require('./searchRoute'));
    app.use(apiV1Prefix, require('./historyRoute'));
    app.use(apiV1Prefix, require('./subscriptionRoute'));
    app.use(apiV1Prefix, require('./orderRoute'));
    app.use(apiV1Prefix, require('./bidRoutes'));
    app.use(apiV1Prefix, require('./reportRoutes'));
    app.use(apiV1Prefix, require('./reportedUserRoutes'));

};
