require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const line = require('@line/bot-sdk');

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
  };

// create LINE SDK client
const client = new line.Client(config);

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) =>{
    res.send('OK');
});

app.get('/change-richmenu-back', (req, res) =>{
	//const pcm_code = document.getElementById('pcm_code').value;
	//var user_id = userId.value;
    client.unlinkRichMenuFromUser('U0129f498dd7f1ff7ecb1e1c1b061e277');
    res.send('OK');
})

app.post('/api/v1/link-richmenu', (req, res) => {
    console.log(req.body);
        //save data to database
    const { pcm_code, userId } = req.body;
    client.linkRichMenuToUser(userId, "richmenu-35927696520980aecb2868d1b1fe93a7");
    res.json({
        data: req.body
    });
})
 app.use(express.static(path.join(__dirname, 'public')));

 // app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.listen(3000, () =>{
    console.log('Ready on port: 3000');
})
