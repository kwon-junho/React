// import express from 'express' // ES6
const mongoose = require('mongoose')
const express = require('express')
const { User } = require('./models/User')
const { auth } = require('./middleware/auth')
const config = require('./config/key')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const port = 4000


var rawBodyHandler = function (req, res, buf, encoding) {
  if (buf && buf.length) {
      req.rawBody = buf.toString(encoding || 'utf8');
      console.log('Raw body: ' + req.rawBody);
  }
}
app.use(cookieParser());
app.use(bodyParser.json({ verify: rawBodyHandler }));

// application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({extended: true}));
// application/json
// app.use(bodyParser.json);

mongoose.connect(
  config.mogoURI,{
 // useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAnModify: false,
}).then(() => console.log('MongoDB Connected...'))
.catch(arr => console.log(arr))



app.get('/', (req, res) => {
  console.log('Cookies:',req.cookies);
  res.send('Hello, Express! start ')
})
app.use(cookieParser());
app.get('/api/users/auth', auth, (req, res) => {
  //여기 까지 미들웨어를 통과해 왔다는 얘기는  Authentication 이 True 라는 말.
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  })
})

app.post('/api/users/register', async (req, res) => {
  const user = new User(req.body);
  console.log(req.body);
  await user.save().then(()=>{
    res.status(200).json({
      success: true
    })
  }).catch((err)=>{
    res.json({ success: false, err })
  })

  // user.save((err, userInfo) => {
  //   if(err) return res.json({ success: false, err});
  //   return res.status(200).json({
  //     success: true,
  //   })
  // })
})

app.post('/api/users/login', (req, res) => {
  User.findOne({email: req.body.email})
  .then(userInfo => {
    if(!userInfo){
      return res.json({
        loginSucccess: false,
        message: "해당 유저가 존재하지 않습니다.",
      })
    }
    console.log("ruserInfo:",userInfo);
    userInfo.comparePassowrd(req.body.password, (err, isMatch) => {
      if (!isMatch) return res.json({ loginSuccess: false, message: "비밀번호가 일치하지 않습니다." });
      // 비밀번호까지 일치하다면 해당 유저 Token 생성.
      // userInfo.generateToken((err, user) => {
        
        // })
        const token = userInfo.generateToken()
          console.log("tlogin-oken:",token);
     res.cookie("x_auth", token).status(200).json({ loginSuccess: true, userId: userInfo._id })

    })
  })
  .catch((err) => {
    return res.status(400).send(err);
  })

  // try {
  //     const user = await User.findOne({ email: req.body.email })
  //     if (!user) {
  //         return res.json({
  //             loginSuccess: false,
  //             message: "제공된 이메일에 해당하는 유저가 없습니다."
  //         })
  //     }

  //     const isMatch = await user.comparePassword(req.body.password)
  //     console.log(isMatch)
  //     if (!isMatch) {
  //         return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })
  //     }

  //     const token = await user.generateToken()
  //     res.cookie("user_auth", token).status(200).json({ loginSuccess: true, userId: user._id })
  // } catch (err) {
  //     return res.status(400).send(err)
  // }
})

app.get('/api/users/logout',  auth, async (req, res) => {
  console.log("req.user._id:",req.user);
  // await User.findOneAndUpdate({_id: req.user._id}, {token: ""}, { new: true }).then(()=>{
    await User.findOne({_id: req.user._id}).then(()=>{
    res.cookie("x_auth", "")
    res.status = 204;  
    res.status(200).json({
      success: true
    })
  }).catch((err)=>{
    res.json({ success: false, err })
  })
})

app.get('/api/hello', (req, res) => {
  res.send("안녕하세요!");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
