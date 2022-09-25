const birds = require('./birds')
const express = require('express')
const path = require('path')
const axios = require('axios')


const app = express();
const port = 3000;

app.use('/birds',birds)
app.use('/static', express.static(path.join(__dirname, '../client/public')));

app.get('/', (req, res) => {
  res.send("Hello There");
});

app.listen(port, () => {
  try {
    console.log(`🌎 Server listens on http://localhost:${port} 🌍`);
  } catch (error) {
    console.log(error);
  }
});
