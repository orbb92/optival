const express = require('express')
const router = express.Router()
const apiController = require('../controllers/api')

router.get('/getApiList',apiController.getApiList)
router.get('/:api',apiController.getApiData)
router.post('/query',apiController.queryDB)




module.exports=router