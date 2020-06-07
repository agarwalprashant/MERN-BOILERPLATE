import express from 'express';
import template from './../template';
import devBundle from './devBundle';
import path from 'path';

const app = express();
devBundle.compile(app);

const CURRENT_WORKING_DIR = process.cwd();

import { MongoClient } from 'mongodb';
const url =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup'; //replace this url with your own mongod instance url
MongoClient.connect(url, (err, db) => {
  console.log('Connected successfully to mongodb server');
  db.close();
});

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

app.get('/', (req, res) => {
  res.status(200).send(template());
});

let port = process.env.PORT || 3000;
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('Server started on port %s.', port);
});
