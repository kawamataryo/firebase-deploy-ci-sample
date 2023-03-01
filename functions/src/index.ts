import * as functions from "firebase-functions";

const config = functions.config();

export const helloWorld = functions.https.onRequest((_, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send(`Hello from Firebase! ${config.hello.message}`);
});
