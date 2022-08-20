const db = require('../store/db')


exports.getApiList = (req, res) => {
    const apiList = Object.keys(db)
    res.status(200).send(apiList)
}

exports.getApiData = (req, res) => {
    const api = req.params.api
    res.status(200).send(db[api])
}

exports.queryDB = (req,res)=>{
    const payload = req.body.options
    const options = payload.options
    const api = payload.api
    if(!options.Value){
        res.status(200).send(db[api])
    }
    else {
        const queryRes = db[api].rows.filter(row => {

            switch (options.Operator) {
                case '<': {
                    if (row[options.Column] < options.Value)
                        return row
                }
                    break;
                case '>': {
                    if (row[options.Column] > options.Value)
                        return row
                }
                    break;
                case '=': {
                    if (row[options.Column] == options.Value)
                        return row
                }
            }
        })
        res.send({columns: db[api].columns, rows: queryRes})
    }
}