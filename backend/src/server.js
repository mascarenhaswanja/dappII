const app = require('./app');

const InitiateMongoServer = require('./db/connection');

InitiateMongoServer(process.env.MONGODB_URI_DEV);

app.listen(process.env.PORT || 5000);