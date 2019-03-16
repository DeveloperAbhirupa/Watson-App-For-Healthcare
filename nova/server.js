// server.js

const http= require('http');
const hostname='127.0.0.1';
const port=3000;
const mongoose= require('mongoose');
const server= http.createServer(function(req,res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  });

server.listen(port, hostname, function(){
  console.log("Server running successfully");
})
// const mongo = require('mongodb').MongoClient
// function doConnect() {
//  	var url = 'mongodb://Abhirupa:abhirupa123@ds261527.mlab.com:61527/user_nova'
// 	mongo.connect(url, (err, db) => {
// 		if(err) {
// 			throw err
// 		} else {
// 			console.log('Successfully connected to MongoDB')
// 		}
// 	})
// }
 mongoose.connect('mongodb://Abhirupa:abhirupa123@ds261527.mlab.com:61527/user_nova');
 mongoose.connection.once('open',() =>{
   console.log("Nova has successfully connected to the database");
 })
