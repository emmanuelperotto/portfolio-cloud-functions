import { db } from "./admin";

export function createProfile(userRecord: any, _context: any) {
  const { email, phoneNumber, uid, isAnonymous } = userRecord;

  if (isAnonymous) {
    return;
  }

  return db
    .collection("Users")
    .doc(uid)
    .set({ email, phoneNumber })
    .catch(console.error);
};