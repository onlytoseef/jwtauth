import express from 'express';

const app = express();
const PORT = 8000;

app.listen(PORT, (req, res) => {
  console.log('server is ok');
});
app.get('/', (req, res) => {
  res.send('This is homepath of server');
});
app.get('/api/test', (req, res) => {
  res.json('This is API Request ');
});
