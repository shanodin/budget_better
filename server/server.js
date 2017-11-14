var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var transactionRouter = require('./controllers/transactionsController.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/../client/build'))
app.use('/api/transactions', transactionRouter)

app.listen(3000, function() {
  console.log(`app running on ${this.port}`)
})
