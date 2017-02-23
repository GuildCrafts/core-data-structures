export default class DirectedGraph {
  constructor(){
    this.index = 0
    this.graph = {}
  }

  addVertex(name){
    this.graph[name] = {'name':name,paths:{}}
    this.index++
  }

  addDirection(v1, v2, weight){
    this.graph[v1]['paths'][v2] = weight
  }

  hasVertex(name){
    return this.graph[name] ? true : false
  }

  hasDirection(v1, v2){
    return this.graph[v1]['paths'][v2] ? true : false
  }

  getDirectionWeight(v1, v2){
    return this.graph[v1]['paths'][v2]
  }

  visit(v1, action){
    let toCheck = [this.graph[v1]]
    let checked = []
    while(toCheck.length > 0){
      Object.keys(toCheck[0]['paths']).forEach((neighbor) => {
        if(!checked.includes(neighbor)){
          toCheck.push(this.graph[neighbor])
        }
      })
      checked.push(toCheck.shift())
    }
    checked.forEach((vertex) => action(vertex))
  }

  findShortestPath(v1,v2){
    let toCheck = [{path:[v1],weight:0}]
    let connected = []

    while(toCheck.length > 0){
      if(toCheck[0]['path'][toCheck[0]['path'].length - 1] === v2){
        connected.push(toCheck.shift())
      }
      else{
        let neighbors = Object.keys(this.graph[toCheck[0]['path'][toCheck[0]['path'].length - 1]]['paths'])
        neighbors.forEach((neighbor) => {
          if(!toCheck[0]['path'].includes(neighbor)){
            toCheck.push({path:toCheck[0]['path'].concat(neighbor),
            weight:toCheck[0]['weight'] + this.getDirectionWeight( toCheck[0]['path'][ toCheck[0]['path'].length - 1 ],neighbor )})
          }
        })
        toCheck.shift()
      }

    }
    console.log(connected)

    return this.lowestWeight(connected)['path']

  }

  lowestWeight(connectedArr){
    let weight = 0
    let lightest = connectedArr[0]
    for(let i = 0; i < connectedArr.length; i++){
      if(connectedArr[i]['weight'] < weight){
        weight = connectedArr[i]['weight']
        lightest = connectedArr[i]
      }
    }
    return lightest
  }

  removeDirection(v1,v2){
    delete this.graph[v1]['paths'][v2]
  }

}
