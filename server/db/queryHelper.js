var MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID

var QueryHelper = function (collection) {
  this.url = 'mongodb://localhost:27017/budget_better'
  this.collection = collection
}

QueryHelper.prototype.all = function (onQueryFinished) {
  console.log(this)
  MongoClient.connect(this.url, function (err, db) {
    var collection = db.collection(this.collection)
    collection.find().toArray(function (err, docs) {
      onQueryFinished(docs)
    })
  }.bind(this))
}

QueryHelper.prototype.save = function (itemToSave, onQueryFinished) {
  MongoClient.connect(this.url, function (err, db) {
    var collection = db.collection(this.collection)
    collection.insert(itemToSave)
    collection.find().toArray(function (err, docs) {
      onQueryFinished(docs)
    })
  }.bind(this))
}

QueryHelper.prototype.findByName = function (itemNameToFind, onQueryFinished) {
  MongoClient.connect(this.url, function (err, db) {
    var collection = db.collection(this.collection)
    collection.find({name: itemNameToFind}).toArray(function (err, docs) {
      onQueryFinished(docs)
    })
  }.bind(this))
}

QueryHelper.prototype.findByCategory = function (categoryToFind, onQueryFinished) {
  MongoClient.connect(this.url, function (err, db) {
    var collection = db.collection(this.collection)
    collection.find({category: categoryToFind}).toArray(function (err, docs) {
      onQueryFinished(docs)
    })
  }.bind(this))
}

QueryHelper.prototype.findByUser = function (userToFind, onQueryFinished) {
  MongoClient.connect(this.url, function (err, db) {
    var collection = db.collection(this.collection)
    collection.find({ user: userToFind }).toArray(function (err, docs) {
      onQueryFinished(docs)
    })
  }.bind(this))
}

QueryHelper.prototype.removeById = function (idToRemove, onQueryFinished) {
  MongoClient.connect(this.url, function (err, db) {
    var collection = db.collection(this.collection)
    var objectId = new ObjectID(idToRemove)
    collection.deleteOne({_id: objectId}, this.all(onQueryFinished))
  }.bind(this))
}

module.exports = QueryHelper
