var express = require('express');
var app = express();
// app.get("/", function(req, res){
//   res.send("Hello Express");
// });
absolutePath = __dirname + "/views/index.html";
app.use( express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));
app.get("/", function(req, res){
  res.sendFile(absolutePath);
});



































 module.exports = app;
