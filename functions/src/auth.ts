import { db } from "./admin";
import { Request, Response } from "firebase-functions";

export function createProfile(req: Request, res: Response) {
  const { userData: { uid,email, phoneNumber, emailVerified,
    displayName, photoURL, providerId } } = req.body;

  db.collection("Users")
    .doc(uid)
    .set({
      email, phoneNumber, emailVerified,
      displayName, photoURL, providerId
    })
    .then((data) => {
      res.status(200).send({data})
    })
    .catch((error) => {
      res.status(422).send({ errorMessage: error.message })
    });
};