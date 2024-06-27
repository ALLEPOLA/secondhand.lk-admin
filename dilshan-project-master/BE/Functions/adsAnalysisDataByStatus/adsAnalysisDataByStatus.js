const connection = require('../../Services/connection')

async function adsAnalysisDataByStatus(req, res){
    const sql = 'SELECT approved_status, COUNT(*) AS ad_count FROM secondhand.all_ads_view GROUP BY approved_status;';

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


module.exports = adsAnalysisDataByStatus