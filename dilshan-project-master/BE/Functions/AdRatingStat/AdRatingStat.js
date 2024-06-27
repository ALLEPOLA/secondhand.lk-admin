const connection = require('../../Services/connection')

async function AdRatingStat(req, res){
    const sql = 'SELECT rating, COUNT(DISTINCT ad_id) AS num_ads FROM userratings GROUP BY rating ORDER BY rating;';

    connection.query(sql, (err, result)=>{
        if(err){
            res.status(500).send("Internal server Error")
        }else if(result.length === 0){
            res.status(404).send("rating data not found")
        }else{
            res.status(200).send(result)
        }
    })
}

module.exports = AdRatingStat