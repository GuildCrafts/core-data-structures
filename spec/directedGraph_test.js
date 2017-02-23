import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DirectedGraph from '../src/directedGraph'

chai.use(chaiChange)

describe('DirectedGraph', () => {
  'use strict'

  let verts = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p']
  let paths = [['a','b',3],['a','f',3],['a','e',2],['b','c',1],
              ['b','h',2],['c','d',2],['c','g',1],['c','l',3],
              ['d','p',1],['e','f',2],['e','i',1],['f','d',1],
              ['f','i',2],['f','m',1],['f','k',3],['g','j',1],
              ['g','p',2],['h','g',1],['h','k',3],['h','l',2],
              ['i','m',3],['j','i',2],['k','n',1],['k','o',3],
              ['a','b',2],['m','p',3],['n','o',1],['o','p',2]
  ]

  it('exists', () => {
    expect(DirectedGraph).to.be.a('function')
  })

  context('addVertex() & hasVertex', () => {
    it('adds a vertex and checks if the index increased', () => {
      const myDirectedGraph = new DirectedGraph()
      myDirectedGraph.addVertex('a')
      expect(myDirectedGraph.index).to.eql(1)
    })

    it('adds a vertex and checks that that it is there', () => {
      const myDirectedGraph = new DirectedGraph()
      myDirectedGraph.addVertex('a')
      expect(myDirectedGraph.hasVertex('a')).to.eql(true)
    })

    it('adds a vertex of the given name to the graph', () => {
      const myDirectedGraph = new DirectedGraph()
      myDirectedGraph.addVertex('a')
      expect(myDirectedGraph.hasVertex('b')).to.eql(false)
    })
  })

  context('addDirection() & hasDirection()', () => {
    it('adds a direction and checks if the direction is there', () => {
      const myDirectedGraph = new DirectedGraph()
      myDirectedGraph.addVertex('a')
      myDirectedGraph.addVertex('b')
      myDirectedGraph.addDirection('a','b',2)
      expect(myDirectedGraph.hasDirection('a','b')).to.eql(true)
    })
  })

  context('getDirectionWeight()', () => {
    it('adds a direction then checks the weight', () => {
      const myDirectedGraph = new DirectedGraph()
      myDirectedGraph.addVertex('a')
      myDirectedGraph.addVertex('b')
      myDirectedGraph.addDirection('a','b',2)
      expect(myDirectedGraph.getDirectionWeight('a','b')).to.eql(2)
    })
  })

  context('visit()', () => {
    it('visits all connected vertexes and applies a function', () => {
      const myDirectedGraph = new DirectedGraph()
      myDirectedGraph.addVertex('a')
      myDirectedGraph.addVertex('b')
      myDirectedGraph.addVertex('c')
      myDirectedGraph.addVertex('d')
      myDirectedGraph.addDirection('a','b',2)
      myDirectedGraph.addDirection('b','c',2)
      myDirectedGraph.visit('a',(vertex) => (vertex.name = vertex.name.toUpperCase()))
      expect(myDirectedGraph.hasVertex('a')).to.eql(true)
    })
  })

  context('findShortestPath()', () => {
    it('visits all connected vertexes and returns the shortest path', () => {
      const myDirectedGraph = new DirectedGraph()
      myDirectedGraph.addVertex('a')
      myDirectedGraph.addVertex('b')
      myDirectedGraph.addVertex('c')
      myDirectedGraph.addVertex('d')
      myDirectedGraph.addDirection('a','b',2)
      myDirectedGraph.addDirection('b','c',2)
      myDirectedGraph.addDirection('c','d',2)
      myDirectedGraph.addDirection('a','c',3)
      expect(myDirectedGraph.findShortestPath('a','d')).to.eql([ 'a', 'c', 'd' ])
    })
  })

  context('findShortestPath()', () => {
    it('visits all connected vertexes and returns the shortest path', () => {
      const myDirectedGraph = new DirectedGraph()
      verts.forEach((vertex) => myDirectedGraph.addVertex(vertex))
      paths.forEach((path) => myDirectedGraph.addDirection(path[0],path[1],path[2]))
      expect(myDirectedGraph.findShortestPath('a','pgit')).to.eql([ 'a', 'f', 'd', 'p' ])
    })
  })

  context('removeDirection()', () => {
    it('removes the direction between two given points', () => {
      const myDirectedGraph = new DirectedGraph()
      verts.forEach((vertex) => myDirectedGraph.addVertex(vertex))
      paths.forEach((path) => myDirectedGraph.addDirection(path[0],path[1],path[2]))
      myDirectedGraph.removeDirection('a','b')
      expect(myDirectedGraph.hasDirection('a','b')).to.eql(false)
    })
  })
})
