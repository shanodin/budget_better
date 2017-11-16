var requestHelper = require('../../helpers/requestHelper')
var dropdownMaker = require('../../helpers/dropdownMaker.js')

var UI = function () {
  var url = 'http://localhost:3000/api/transactions'
  requestHelper.getRequest(url, function (transactions) {
    this.render(transactions)
  }.bind(this))
}

UI.prototype = {
  render: function () {
    createHeader()
    renderUserList()
  }
}

var createHeader = () => {
  var header = document.createElement('h1')
  var main = document.querySelector('div#main')
  header.innerText = 'Budget Better'
  main.appendChild(header)
}

var renderUserList = () => {
  var url = 'http://localhost:3000/api/transactions'
  var usersSelect = document.querySelector('#username-input')
  requestHelper.getRequest(url, function (users) {
    dropdownMaker.makeDropdown(users, usersSelect)
  })
}

module.exports = UI
