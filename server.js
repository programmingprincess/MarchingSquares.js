// server.js
//var rollup = require('rollup-endpoint');
var app  = require('express')();

app.get('/assets/app-bundle.js', rollup.serve({
  entry: __dirname + '/client/main.js'
}));

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
