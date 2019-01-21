const express = require('express');
const app = express();
const path = require('path')


app.use( express.static( `${__dirname}/build` ) );

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); next();
});

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '/build/index.html'));
})

const port = 3000;

app.listen(port, () => {
 console.log('Listening on port', port);
});
