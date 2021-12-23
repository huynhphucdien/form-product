// Call in installed dependencies
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routes/posts.js'
// set up express app
const app = express();
// set up port number
const port = process.env.port || 5000;
// set up home route
// app.get('/', (req, res) => {
//  return res.send('Hello World!')
//   });

  app.use('/posts', posts);

app.listen(port, (request, respond) => {
  console.log(`Our server is live on ${port}. Yeah!`);
});