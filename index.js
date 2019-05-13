var express = require('express');
var session = require("express-session");
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
var MemoryStore =session.MemoryStore;
app.use(session({
    name : 'app.sid',
    secret: "1234567890QWERTY",
    resave: true,
    store: new MemoryStore(),
    saveUninitialized: true,
	cookie:{path:'/'}
}));
//var cookieSession = require('cookie-session')
//var express = require('express')
var cors = require("cors");

//var app = express()

app.use(cors());

//app.set('trust proxy', 1) // trust first proxy

//app.use(cookieSession({
//  name: 'session',
//  keys: ['key1', 'key2']
//}))

app.post('/login', function (req, res, next) {
  // Update views
  req.session.views = (req.session.views || 0) + 1

  // Write response
  console.log(req.session.views + ' views')
  console.log(req.session)
  req.session.save((err)=>{console.log(err)});
  res.send(req.session.views + ' views')
})

app.listen(3004)
