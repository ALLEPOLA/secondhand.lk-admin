const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../../Services/connection');
const dotenv = require('dotenv');

dotenv.config();


const secretKey = process.env.SECRET_KEY

async function adminLogin(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Email and password are required');
    }

    const query = 'SELECT * FROM admin WHERE email = ?';
    connection.query(query, [email], async (err, results) => {
        if (err) return res.status(500).send('Server error');
        if (results.length === 0) return res.status(404).send('Admin not found');

        const admin = results[0];
        
        

        if (admin.password_status === 'temporary') {
            if(password === admin.password){
                return res.status(202).json({"message":"Temporary password must be changed", "admin_id": admin.admin_id});
            }else{
                return res.status(400).send('Invalid Credentials');
            }
        }else{
            const isMatch = await bcrypt.compare(password, admin.password);
            if (!isMatch) return res.status(400).send('Invalid Credentials');
        }

        const token = jwt.sign({ admin_id: admin.admin_id }, secretKey, { expiresIn: '1h' });
        
        const updateLastLoginQuery = 'UPDATE admin SET last_login = NOW() WHERE admin_id = ?';
        connection.query(updateLastLoginQuery, [admin.admin_id], (err, result) => {
            if (err) return res.status(500).send('Server error');
            res.status(200).json({ "token":token, "admin_id": admin.admin_id });
        });
    });
}

module.exports = adminLogin;
