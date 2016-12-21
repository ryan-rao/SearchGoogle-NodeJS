var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('URL:' + req.baseUrl);
  res.sendfile(__dirname + '/index.html');
});

app.get('/search', function (req, res) {
  var searchtxt = req.query.search;
  console.log('Search data:' + searchtxt);
  var searchURL = 'https://www.baidu.com/s?wd=' + searchtxt;
  res.redirect(searchURL);
});

app.listen(8084);


