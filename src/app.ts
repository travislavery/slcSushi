import * as dotenv from 'dotenv'
import express from 'express';
import { landingPage } from './lib/views/landingPage';
import { yelpFusionSearch } from './lib/yelp_fusion/main';

dotenv.config()
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.send(landingPage())
})

app.get(['/lunch/:location','/lunch/:location/:category'], async (req, res) => {
  const lunchOptions = await yelpFusionSearch(req.params)
  res.json({lunchOptions});
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});