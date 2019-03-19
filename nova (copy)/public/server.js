// server.js

// const http= require('http');
// const hostname='127.0.0.1';
// const port=3000;
const mongoose= require('mongoose');
const express= require('express');
const morgan= require('morgan');
const path=require ('path');
var expressHandlebars  = require('express-handlebars');
var bodyParser= require('body-parser');
var cookieParser= require('cookie-parser');
var session= require('express-session');
var passport= require('passport');
var flash= require('flash');


// const server= http.createServer(function(req,res){
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
//   });
//
// server.listen(port, hostname, function(){
//   console.log("Server running successfully");
// })

mongoose.Promise = global.Promise
 mongoose.connect('mongodb://Abhirupa:abhirupa123@ds261527.mlab.com:61527/user_nova');
 mongoose.connection.once('open',() =>{
   console.log("Nova has successfully connected to the database");
 })

 const app = express()
app.use(morgan('dev'))

// 2
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', expressHandlebars({ defaultLayout: 'layout' }))
app.set('view engine', 'handlebars')

// 3
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
  cookie: { maxAge: 60000 },
  secret: 'codeworkrsecret',
  saveUninitialized: false,
  resave: false
}));

app.use(passport.initialize())
app.use(passport.session())

// 4
app.use(flash())
app.use((req, res, next) => {
  res.locals.success_mesages = req.flash('success')
  res.locals.error_messages = req.flash('error')
  next()
})

// 5
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

// 6
// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.render('notFound')
});

// 7
app.listen(5000, () => console.log('Server started listening on port 5000!'))
