const express = require("express");
const bodyParser= require("body-parser");
const React = require('react');
const ReactDOM = require("react-dom")
const ReactDOMServer = require('react-dom/server');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function (req,res){

  res.render(__dirname+"/public/index.html");
});

app.listen(3000, function(){
  console.log("server is running at 3000");
});
