import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
import Axios from 'axios';

admin.initializeApp();

export const fetchDollarRate = functions.pubsub.schedule('every 20 minutes').onRun(async (_context) => {
  const db = admin.firestore();
  const { data } = await Axios.get('https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL')
  const { BRL } = data.rates

  await db.collection('exchange_rates').doc('dollar').set({BRL});
});
