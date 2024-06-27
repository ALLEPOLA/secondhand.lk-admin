const connection = require('../../Services/connection');
const sendMail = require('./../../Utils/sendMail');
const generateOTP = require('./../../utils/generateOTP');
const path = require('path');

module.exports = async function ResetPasswordVerification(req, res) {
    const selectsql = 'SELECT * FROM admin WHERE email = ?;';

    try{
        connection.query(selectsql, [req.body.email], async (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json("Internal Server Error");
            }

            if (result.length === 0) {
                return res.status(404).json("User not found");
            }

            const username = result[0].user_name
            try{
                const otp = generateOTP(req.body.email);

              
                const subject = "Reset Password Verification";
                const htmlTemplatePath = path.resolve(__dirname, '../../Templates/forgotPasswordOtp.html');
                const replacements = {
                    name : username,
                    otp: otp
                };

                await sendMail(req.body.email, subject, htmlTemplatePath, replacements);

                return res.status(200).json("Email sent successfully");

            } catch (error) {
                console.log(error);
                return res.status(500).json("Failed to send verification email or save OTP");
            }
        });
    } catch(err){
        console.error("Error during password reset verification:", err);
        return res.status(500).json("Internal Server Error");
    }
}
