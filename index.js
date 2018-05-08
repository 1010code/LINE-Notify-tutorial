const express = require('express');
const lineNotify = require('express-line-notify');
const config = {
  clientId: 'qNdZpKv9GVGmdPDGgMlXJZ',
  clientSecret: 'iCR5qokHNOq8oHMsOgnp7N9Z1uzxdrFJ6OBW04hXouK',
};
const app = express();
app.use('/',
  function (req, res, next) {
    req['context'] = req.query.data;    //store whatever in query string
    next();
  },
  lineNotify(config),
  function (req, res) {
    const token = req['line-notify-access-token'];
    const data = req['context']    //data will be { userid: "123", email: "456" }
    console.log(token);
    console.log(data);
    res.send(token);
  });
app.listen(3000);
