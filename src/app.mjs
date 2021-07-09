import express from 'express';
import dummyPromise from './helpers.mjs'
const app = express();
app.get('/', (req, res) => {
  res.send('<h2>Hello world</h2>');
});

await dummyPromise();

app.listen(3000);
