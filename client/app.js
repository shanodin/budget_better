var requestHelper = require('./helpers/requestHelper.js')
var dropdownMaker = require('./helpers/dropdownMaker.js')

var renderUserList = () => {
  var url = 'http://localhost:3000/api/transactions'
  var usersSelect = document.querySelector('#username-input')
  requestHelper.getRequest(url, function (users) {
    dropdownMaker.makeDropdown(users, usersSelect)
  })
}

window.addEventListener('load', renderUserList)
