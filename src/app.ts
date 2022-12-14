import * as dotenv from 'dotenv'
import express, { Request, Response, NextFunction } from 'express';
import { landingPage } from './lib/views/landingPage';
import { yelpFusionSearch } from './lib/yelp_fusion/main';

dotenv.config()
const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  res.send(landingPage())
})

app.get(['/lunch/:location','/lunch/:location/:category'], (req: Request, res: Response) => {
  yelpFusionSearch(req.params)
    .then(data => res.json({data}))
    .catch(err => {
      // tslint:disable-next-line:no-console
      console.error(err)
      res.status(500).send(err)
    })
});


app.listen(port, () => {
  // tslint:disable-next-line:no-console
  return console.log(`Express is listening at http://localhost:${port}`);
});