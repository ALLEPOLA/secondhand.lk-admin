const connection = require('../../Services/connection')

async function updateAdStatus(req, res){
    const ad_id = req.params.ad_id
    const status = req.body.status
    const sql = 'UPDATE `secondhand`.`ads` SET `approved_status` = ? WHERE (`ad_id` = ?);';

    connection.query(sql, [status, ad_id], (err, result)=>{
        if(err){
            return res.status(500).send("Error update Ad status")
        }else{
            return res.status(200).send("Updated")
        }
    })
}

module.exports = updateAdStatus