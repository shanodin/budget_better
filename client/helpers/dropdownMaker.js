var dropdownMaker = {}

dropdownMaker.makeDropdown = function (items, select) {
  while (select.firstChild) {
    select.removeChild(select.firstChild)
  }
  var firstOption = document.createElement('option')
  firstOption.innerText = 'Choose a user'
  firstOption.disabled = true
  firstOption.selected = true
  select.appendChild(firstOption)
  var users = []
  items.forEach(function (item) {
    if (!users.includes(item.user)) {
      var option = document.createElement('option')
      option.innerText = item.user
      select.appendChild(option)
      users.push(item.user)
    }
  })
}

module.exports = dropdownMaker
