var express = require('express');
var router = express.Router();

/* GET home page. */

 // router.get('/', function(req, res, next)
 // {
 //   res.render('index', { title: 'Express' });
 // });

const path = require('path')

router.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../client/website/build/index.html'));
})

module.exports = router;
