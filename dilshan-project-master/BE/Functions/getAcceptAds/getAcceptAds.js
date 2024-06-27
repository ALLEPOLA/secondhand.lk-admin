const connection = require('../../Services/connection');


async function getAcceptdAds(req, res) {
   const sql = 'SELECT * FROM all_ads_view WHERE approved_status= "approved";';

   connection.query(sql, (err, result)=>{
    if(err){
        console.log(err)
        res.status(500).send("Error Getting Data")
    }else if(result.length === 0){

        res.status(404).send("No Ads Found")
    }else{
        res.status(200).send(result)
    }
   })
}

module.exports = getAcceptdAds;
