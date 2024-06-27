const connection = require('../../Services/connection');
const bcrypt = require('bcrypt');

async function adminPasswordUpdate(req, res) {
    const { admin_id, new_password } = req.body;

    if (!admin_id || !new_password) {
        return res.status(400).send('Admin ID and new password are required');
    }

    const hashedPassword = bcrypt.hashSync(new_password, 10);
    const query = 'UPDATE admin SET password = ?, password_status = "changed" WHERE admin_id = ?';

    connection.query(query, [hashedPassword, admin_id], (err, result) => {
        if (err) return res.status(500).send('Server error');
        res.status(200).send('Password changed successfully');
    });
}

module.exports = adminPasswordUpdate;
