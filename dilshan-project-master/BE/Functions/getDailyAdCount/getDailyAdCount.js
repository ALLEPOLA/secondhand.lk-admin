const connection = require('../../Services/connection')

async function getDailyAdCount(req, res){
    const sql = 'SELECT DATE(created_at) AS date_created, COUNT(*) AS ad_count FROM ads GROUP BY DATE(created_at) ORDER BY DATE(created_at);';

    connection.query(sql, (err, result)=>{
        if(err){
            res.status(500).send("Internal server Error")
        }else if(result.length === 0){
            res.status(404).send("Ad data not found")
        }else{
            res.status(200).send(result)
        }
    })
}


module.exports = getDailyAdCount