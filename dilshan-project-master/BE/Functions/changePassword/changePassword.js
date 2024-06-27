const connection = require('../../Services/connection');
const bcrypt = require('bcrypt');

async function changePassword(req, res) {
  const admin_id = req.body.adminId;
  const old_password = req.body.oldPassword;
  const new_password = req.body.newPassword;

  
  console.log(req.body)
  const getPassword = 'SELECT password FROM admin WHERE admin_id = ?';

  connection.query(getPassword, [admin_id], async (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Internal Server Error');
    } else if (result.length === 0) {
      return res.status(404).send('Admin not found');
    }

    const passwordHash = result[0].password;

    const isMatch = await bcrypt.compare(old_password, passwordHash);
    if (!isMatch) {
        console.log("wrong passwords")
      return res.status(409).send('Incorrect Password');
    }

    const newPasswordHash = await bcrypt.hash(new_password, 10);
    const updatesql = 'UPDATE admin SET password = ? WHERE admin_id = ?';

    connection.query(updatesql, [newPasswordHash, admin_id], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Error updating password');
      }

      return res.status(200).send('Password Updated');
    });
  });
}

module.exports = changePassword;
