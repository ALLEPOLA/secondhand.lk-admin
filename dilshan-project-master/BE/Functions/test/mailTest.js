const sendMail = require('../../Utils/sendMail');
const path = require('path');

const to = 'maduwanthaaselagra@gmail.com';
const subject = 'Your OTP for Email Verification';
const htmlTemplatePath = path.resolve(__dirname, '../../Templates/forgotPasswordOtp.html');
const replacements = {
  name: 'John Doe',
  otp: '123456'  
};

module.exports = async function testMail(req, res){
    try {
        await sendMail(to, subject, htmlTemplatePath, replacements);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to send email');
    }
}
