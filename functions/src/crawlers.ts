import Axios from 'axios'
import { db } from './admin';

export async function fetchDollarRate(_context : any) {
  const { data } = await Axios.get('https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL')
  const { BRL } = data.rates

  return db.collection('exchange_rates').doc('dollar').set({BRL});
};