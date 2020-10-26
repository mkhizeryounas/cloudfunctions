const functions = require('firebase-functions');

exports.status = functions.https.onRequest((request, response) => {
  console.log('PROCESS', process.env.name);
  functions.logger.info('Hello logs!', { structuredData: true });
  response.json({
    message: 'Hello from Firebase!',
  });
});

exports.scheduledFunction = functions.pubsub
  .schedule('every 5 minutes')
  .onRun((context) => {
    functions.logger.info('Hello logs!', { structuredData: true });
    return null;
  });
