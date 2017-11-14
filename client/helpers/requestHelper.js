var requestHelper = {}

requestHelper.getRequest = function (url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.addEventListener('load', function () {
    var jsonString = xhr.responseText
    var data = JSON.parse(jsonString)
    callback(data)
  })
  xhr.send()
}

requestHelper.postRequest = function (url, payload, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('POST', url)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.addEventListener('load', function () {
    var data = JSON.parse(xhr.responseText)
    callback(data)
  })
  var jsonString = JSON.stringify(payload)
  xhr.send(jsonString)
}

requestHelper.updateRequest = function (url, data, callback) {
  var jsonString = JSON.stringify(data)
  var xhr = new XMLHttpRequest()
  xhr.open('PUT', url)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.addEventListener('load', function () {
    var returnedData = JSON.parse(xhr.responseText)
    callback(returnedData)
  })
  xhr.send(jsonString)
}

requestHelper.deleteRequest = function (url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('DELETE', url)
  xhr.addEventListener('load', function () {
    var jsonString = xhr.responseText
    var data = JSON.parse(jsonString)
    callback(data)
  })
  xhr.send()
}

module.exports = requestHelper
