export default class DirectedGraph {
  constructor(){
    this.graph = {}
  }

  addVertex(name){
    this.graph[name] = {name:name,paths:{}}
    this.index++
  }

  addDirection(v1, v2, weight){
    this.graph[v1].paths[v2] = weight
  }

  hasVertex(name){
    return !!this.graph[name]
  }

  hasDirection(v1, v2){
    return !!this.graph[v1].paths[v2]
  }

  getDirectionWeight(v1, v2){
    return this.graph[v1].paths[v2]
  }

  visit(v1, action){
    this.getConnectedVertices(v1).forEach((vertex) => action(this.graph[vertex]))
  }

  findShortestPath(v1,v2){
    let toCheck = [{path:[v1],weight:0}]
    let connected = []

    while(toCheck.length > 0){
      let lastVertex = toCheck[0].path[ toCheck[0].path.length - 1 ]

      if(lastVertex === v2){
        connected.push(toCheck.shift())
      }

      else{
        let neighbors = Object.keys(this.graph[lastVertex].paths)

        neighbors.forEach((neighbor) => {
          if(!toCheck[0].path.includes(neighbor)){
            let newPath = toCheck[0].path.concat(neighbor)
            let newWeight = toCheck[0].weight + this.graph[lastVertex].paths[neighbor]
            toCheck.push({path: newPath, weight: newWeight})
          }
        })

        toCheck.shift()
      }
    }
    console.log(connected)
    return this.lowestWeight(connected).path
  }

  lowestWeight(connectedArr){
    let lightest = connectedArr[0]

    for(let i = 0; i < connectedArr.length; i++){
      if(connectedArr[i].weight < lightest.weight){
        lightest = connectedArr[i]
      }
    }
    return lightest
  }

  removeDirection(v1,v2){
    delete this.graph[v1].paths[v2]
  }

  getConnectedVertices(v1){
    let toCheck = [v1]
    let connected = []
    let verteces = Object.keys(this.graph)

    while(toCheck.length > 0){
      Object.keys(this.graph[toCheck[0]].paths).forEach((neighbor) => {
        if(!connected.includes(neighbor) && !toCheck.includes(neighbor)){
          toCheck.push(neighbor)
        }
      })
      connected.push(toCheck.shift())
    }
    return connected
  }

  getSeparatedVertices(v1){
    let separated = []
    let connected = this.getConnectedVertices(v1)

    Object.keys(this.graph).forEach((vertex) => {
      if(!connected.includes(vertex)){
        separated.push(vertex)
      }
    })
    return separated
  }

  removeVertex(v1){
    delete this.graph[v1]
    Object.keys(this.graph).forEach((vertex) => {
      if(Object.keys(this.graph[vertex].paths).includes(v1)){
        delete this.graph[vertex].paths[v1]
      }
    })
  }

  count(){
    return Object.keys(this.graph).length
  }

}
