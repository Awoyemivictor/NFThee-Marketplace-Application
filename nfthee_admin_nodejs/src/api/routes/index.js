const { credentials } = require('../../config').constantCredentials
const apiV1Prefix = credentials.API_ROUTE_PREFIX;


// configure all routes
module.exports = (app) => {
    app.use(apiV1Prefix, require('./blogRoute'))
    app.use(apiV1Prefix, require('./categoryRoute'))
    app.use(apiV1Prefix, require('./emailApilRoute'))
    app.use(apiV1Prefix, require('./manageSettingsRoute'))
    app.use(apiV1Prefix, require('./partnerRoute'))
    app.use(apiV1Prefix, require('./blockchainRoute'))
    app.use(apiV1Prefix,require('./airdropRoute'))
    app.use(apiV1Prefix,require('./searchRoutes'))

}