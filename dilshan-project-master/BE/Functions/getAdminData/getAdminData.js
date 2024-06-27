const connection = require('../../Services/connection')

async function getAdminData(req, res){
    admin_id = req.params.id
    const sql = 'SELECT user_name, email from admin where admin_id = ?';

    connection.query(sql,admin_id, (err, result)=>{
        if(err){
            console.log(err)
            return res.status(500).send('Internal Server Error')
        }

        return res.status(200).send(result)
    })
}

module.exports = getAdminData