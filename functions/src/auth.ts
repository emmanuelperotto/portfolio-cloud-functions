import { db } from "./admin";

export function createProfile(userRecord: any, _context: any) {
  const { uid, isAnonymous } = userRecord;

  if (isAnonymous) {
    return;
  }

  return db
    .collection("Users")
    .doc(uid)
    .set(userRecord)
    .catch(console.error);
};