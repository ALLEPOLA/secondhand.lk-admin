const connection = require('../../Services/connection')

async function getAllUserComplaints(req, res) {
    const sql = `SELECT advertisement_id, COUNT(*) AS total_complaints, MAX(complaint_date) AS latest_complaint_date, MAX(complaint_type) AS complaint_type, MAX(complaint_description) AS complaint_description, MIN(complaint_date) AS earliest_complaint_date FROM complaints WHERE status = 'Pending' GROUP BY advertisement_id;`

    connection.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json('Internal Server Error');
        } else {
            return res.status(200).json(result); // Send all complaints
        }
    });
}

module.exports = getAllUserComplaints;
