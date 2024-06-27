const connection = require('../../Services/connection')

async function adCountByLocation(req, res){
    const sql = 'SELECT l.location as location, COUNT(a.ad_id) AS ad_count FROM ads as a JOIN location as l ON a.location_id = l.location_id GROUP BY l.location;';

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

module.exports = adCountByLocation