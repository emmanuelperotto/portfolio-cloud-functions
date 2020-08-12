import { db } from "./admin";
import { https } from "firebase-functions";

export function createProfile(data: any, context: https.CallableContext) {
  // Checking that the user is authenticated.
  if (!context.auth) {
    // Throwing an HttpsError so that the client gets the error details.
    throw new https.HttpsError('failed-precondition', 'The function must be called ' +
        'while authenticated.');
  }

  const uid = context.auth.uid;

  const {
    name, picture, email,
    phone_number: phoneNumber,
    email_verified: emailVerified
  } = context.auth.token;
  const providerId  = data.providerId || null;

  db.collection("Users")
    .doc(uid)
    .set({
      email, phoneNumber, emailVerified,
      name, picture, providerId
    })
    .then((result) => {
      return {...result}
    })
    .catch((error) => {
      throw new https.HttpsError('unknown', error.message);
    });
};