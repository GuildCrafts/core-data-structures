'use strict'

function linkedList() {
  this.dataStore = []
  this.size = 0
}

linkedList.prototype.insert = function(element){
  this.dataStore[0] = [{value:null, pointTo:null}]
}
