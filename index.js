var path =require("path");
var { absolutePath } = require("swagger-ui-dist");
var express = require("express");
var app = express();
 
app.use("/docs", express.static(path.join(__dirname, "./docs")));
app.use(express.static(absolutePath()));
 
app.listen(3000);