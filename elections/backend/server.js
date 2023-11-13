const express = require('express')
const endpoints = require('./endpoints')

const api = express()

api.use(express.static('./frontend'))
api.use(express.json())
api.use(express.urlencoded({ extended: true }))

api.post('/api/candidate', endpoints.candidateSearch)

console.log('Server listening on port 8000')
api.listen(8000)
