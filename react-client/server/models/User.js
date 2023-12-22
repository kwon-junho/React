const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const saltRounds = 10;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 50,
    },
    email: {
        type: String,
        trim: true,
        unique: 1,
    },
    password: {
        type: String,
        minLength: 1,
    },
    role: {
        type: Number,
        default: 0,
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number,
    },
})

// 암호화
userSchema.pre('save', function (next){
    var user = this;
    
    if(user.isModified('password')){
        bcrypt.genSalt(saltRounds, function(err,salt){
            if (err) return next(err);

            bcrypt.hash(user.password, salt, function (err, hash){
                if (err) return next(err);
                user.password = hash;
                next();
            });
        });
    }else{
        next();
    }
});

userSchema.methods.comparePassowrd = function(plainPassword, callback) {
    console.log("plainPassword:",plainPassword);
    console.log("this.password,:",this.password);

    bcrypt.compare(plainPassword, this.password, function(error, isMatch) {
        if(error) {
          callback(error);
        }
    
        callback(null, isMatch);
      });    
    // const result = await bcrypt.compare(plainPassword, this.password)

    // return result;
    // 입력한 비밀번호와 암호화된 비밀번호를 비교하기위해 입력된 비밀번호도 암호화하여 비교
    // bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
    //     if(err) return callbackfn(err),
    //     callbackfn(null, isMatch)
    // })
}

// userSchema.methods.generateToken = function(callback) {
//     var user = this;
//     // jsonwebtoken을 이용해서 토큰을 생성
//     var token = jwt.sign(user._id.toHexString(), 'secretToken')

//     // user._id + 'secretToken' = token
//     // ->
//     // 'secretToken' -> user._id

//     user.token = token;

//     // return user.save().then(() => token)
//     user.save(function(err, user) {
//         if(err) return callback(err);
//         callback(null, user);
//     })
// }
userSchema.methods.generateToken = function () {
    var user = this;
    const token = jwt.sign(user._id.toHexString(),'secretToken');
    return token;
}

userSchema.statics.findByToken = async function(token) {
    var user = this;
    // user._id + ''  = token
    //토큰을 decode 한다. 
    const decoded = jwt.verify(token, 'secretToken');
        //유저 아이디를 이용해서 유저를 찾은 다음에 
        //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인
        const result = await user.findOne({ _id: decoded, token: token })
        console.log(">>info",result);

        // user.findOne({ "_id": decoded, "token": token }, function (err, user) {
        //     if (err) return callback(err);
        //     callback(null, user)
        // })
        // callback(null,user.findOne({ "_id": decoded, "token": token }));
    return result;
}


const User = mongoose.model('User', userSchema)

module.exports = { User }