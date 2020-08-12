import { db } from "./admin";

export function createProfile(userRecord: any, _context: any) {
  const {
    email, emailVerified, phoneNumber, uid,
    isAnonymous, displayName, photoURL, providerId
  } = userRecord;

  if (isAnonymous) {
    return;
  }

  return db
    .collection("Users")
    .doc(uid)
    .set({
      email, phoneNumber, emailVerified,
      displayName, photoURL, providerId
    })
    .catch(console.error);
};