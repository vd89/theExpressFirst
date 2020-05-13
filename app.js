const express = require('express');
const app = express();

const port = process.env.PORT || 8082;

app.use(express.static('views'));

app.listen(port, () => {
  console.log(`Server is working at ${port}`);
});
