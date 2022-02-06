const dotenv = require('dotenv');
dotenv.config();

exports.verifyApiKey = (auth, res) => {
    // console.log(auth);
    if (auth === `Bearer ${process.env.API_KEY}`) {
        return true;
    }
    res.status(400).send({
        message: `"You are not authorized to do that!"`
    });
    return false;
};