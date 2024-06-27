const connection = require('../../Services/connection');
const bcrypt = require('bcrypt');

async function resetPassword(req, res) {
    try {
        const email = req.body.email;
        const password = req.body.newPassword;
        const hashedPassword = await bcrypt.hash(password, 10);  // Using async/await with bcrypt.hash

        const sql = `UPDATE admin SET password = ? WHERE email = ?;`;

        connection.query(sql, [hashedPassword, email], (err, result) => {
            if (err) {
                console.error('Error updating password:', err);
                return res.status(500).send('Internal Server Error');
            } else {
                return res.status(200).send('Password Updated');
            }
        });
    } catch (error) {
        console.error('Error hashing password:', error);
        return res.status(500).send('Internal Server Error');
    }
}

module.exports = resetPassword;
