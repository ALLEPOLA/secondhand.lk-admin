const otpGenerator = require('otp-generator');
const connection = require('./../Services/connection');

const generateOTP = (email) => {
    const otp = otpGenerator.generate(6, {
        digits: true,
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false
    });

    const otpExpiry = new Date(Date.now() + 10 * 60000); 

    connection.beginTransaction(err => {
        if (err) {
            console.log('Error starting transaction:', err);
            throw new Error('Failed to start transaction');
        }

     
        const deleteExpiredOtpSql = 'DELETE FROM otp WHERE email = ? AND expired_at < NOW()';
        connection.query(deleteExpiredOtpSql, [email], (err, result) => {
            if (err) {
                console.log('Error deleting expired OTPs:', err);
                return connection.rollback(() => {
                    throw new Error('Failed to delete expired OTPs');
                });
            }

        
            const insertOtpSql = 'INSERT INTO otp (email, otp_code, expired_at) VALUES (?, ?, ?)';
            connection.query(insertOtpSql, [email, otp, otpExpiry], (err, result) => {
                if (err) {
                    console.log('Error saving OTP:', err);
                    return connection.rollback(() => {
                        throw new Error('Failed to save OTP');
                    });
                }

              
                connection.commit(err => {
                    if (err) {
                        console.log('Error committing transaction:', err);
                        return connection.rollback(() => {
                            throw new Error('Failed to commit transaction');
                        });
                    }

                    console.log('OTP generated and saved successfully');
                });
            });
        });
    });

    return otp;
};

module.exports = generateOTP;
