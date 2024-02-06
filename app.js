const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('This is Second changes which is made by Bhavesh ');
  });
  const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});