var QueryHelper = require('../db/queryHelper.js')
var express = require('express')
var transactionsRouter = express.Router()

var transactionsQueryHelper = new QueryHelper('transactions')

transactionsRouter.get('/', function (req, res) {
  transactionsQueryHelper.all(function (transactions) {
    res.json(transactions)
  })
})

transactionsRouter.get('/:id', function (req, res) {
  transactionsQueryHelper.find(req.params.id, function (transaction) {
    res.json(transaction)
  })
})

transactionsRouter.post('/', function (req, res) {
  var transaction = req.body
  transactionsQueryHelper.save(transaction, function (updatedTransactions) {
    res.json(updatedTransactions)
  })
})

transactionsRouter.delete('/:id', function (req, res) {
  var id = req.params.id
  transactionsQueryHelper.removeById(id, function (response) {
    res.json(response)
  })
})

module.exports = transactionsRouter
