const { User } = require('../models/User')

const auth = async (req, res, next) => {
    //인증 처리를 하는곳 
    //클라이언트 쿠키에서 토큰을 가져온다.
    console.log("token:",req.cookies);
    
    const token = req.cookies.x_auth;
    console.log("token:",token);
    // 토큰을 복호화 한후  유저를 찾는다.

    // const user = await User.findById(decoded._id);
    // const token = user.generateToken();
    // ctx.cookies.set('access_token', token, {
    //   maxAge: 1000 * 60 * 60 * 24 * 7,
    //   httpOnly: true,
    // });
    try {
        const user = await User.findByToken(token);
        console.log(">result>>>:",user);
        if (!user) return res.json({ isAuth: false, error: true })
            req.token = token;
            req.user = user;
            console.log("req:",req.user);
            next();
    // User.findByToken(token, (err, user) => {
    //     console.log("err:",err);
    //     console.log("auth:",user);
    //     if (err) throw err;
    //     if (!user) return res.json({ isAuth: false, error: true })

    //     req.token = token;
    //     req.user = user;
    //     next();
    // })
    } catch (e) {
        return res.json({ isAuth: false, error: true })
    }    
}

module.exports = { auth };