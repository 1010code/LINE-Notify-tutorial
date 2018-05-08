const express = require('express');
const lineNotify = require('express-line-notify');
const config = {
  clientId: 'qPWMrOPQREqdEdajUMz2qo',
  clientSecret: 'OnVjSHAxnGhG2c5WOhpaSXbMZ2J1NgbKMQWqrV4etsy',
};
const app = express();
app.use(
  '/',
  lineNotify(config)
);
app.listen(3000);
