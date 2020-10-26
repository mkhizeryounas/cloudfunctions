const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

exports.status = functions.https.onRequest(async (request, response) => {
  let data = await admin.firestore().collection('utils').doc('flags').set({
    underMaintenance: true,
  });

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
