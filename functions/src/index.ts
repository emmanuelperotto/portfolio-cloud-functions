import * as functions from 'firebase-functions';
import { fetchDollarRate } from "./crawlers";
import { createProfile } from './auth';


export default {
  fetchDollarRate: functions.pubsub.schedule('every 20 minutes').onRun(fetchDollarRate),
  createProfile: functions.auth.user().onCreate(createProfile)
}
