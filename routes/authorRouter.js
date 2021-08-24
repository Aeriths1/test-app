const express = require('express')
// add our router
const authorRouter = express.Router()
// require the author controller
const authorController = require('../controllers/authorController.js')
// handle the GET request to get all authors
authorRouter.get('/', authorController.getAllAuthors)
authorRouter.get('/:id', authorController.getAuthorByID)
// export the router
module.exports = authorRouter