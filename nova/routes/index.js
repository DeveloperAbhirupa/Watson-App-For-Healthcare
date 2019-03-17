const express = require('express')
const router=express.Router()

router.et('/', (req, res)=>{
  res.render('index')
})

module.exports =  router
