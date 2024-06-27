const connection = require('../../Services/connection');

async function adminDataChange(req, res) {
    const { adminId, user_name, email } = req.body;
    console.log(req.body)

    if (!adminId || !user_name || !email) {
        return res.status(400).send('Admin ID, name, and email are required');
    }

    const query = 'UPDATE admin SET user_name = ?, email = ? WHERE admin_id = ?';

    connection.query(query, [user_name, email, adminId], (err, result) => {
        if (err) return res.status(500).send('Server error');
        res.status(200).send('Admin data updated successfully');
    });
}

module.exports = adminDataChange;
