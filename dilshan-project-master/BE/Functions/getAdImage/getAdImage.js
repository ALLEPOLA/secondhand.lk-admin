const connection = require('../../Services/connection');

async function getAdImage(req, res) {
    const ad_id = req.params.ad_id; 
    const sql = 'SELECT imagePath FROM images WHERE ad_id = ? LIMIT 1';

    connection.query(sql, ad_id, (err, result) => {
        if (err) {
            return res.status(500).send('Internal Server Error');
        } else if (result.length === 0) {
            return res.status(404).send('No Images related to this ad');
        } else {
            const image_url = result[0].imagePath;
            return res.status(200).json({ "image_url": image_url });
        }
    });
}

module.exports = getAdImage;
