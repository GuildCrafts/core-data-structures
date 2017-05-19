import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DirectedGraph from '../src/directedGraph'

describe('DirectedGraph', () => {
  it('exists', () => {

    expect(DirectedGraph).to.be.a('function')
  })
  context('addVertex', () => {
    it('should add a vertex to the graph', () => {

      expect(addVertex).to.be.a('function')
    })
  })
  context('hasVertex', () => {
    it('tests whether or not the vertex is included in graph', () => {

      expect(hasVertex('v1')).to.equal(true)
    })
  })
  context('addDirection', () => {
    it('adds direction between two points on graph', () => {

      expect(hasDirection('v1, v2')).to.equal(true)
    })
  })
  context('hasDirection', () => {
    it('tests if there is a direction between two graph points', () => {

      expect(hasDirection('v1, v2')).to.equal(true)
    })
  })
  context('visit', () => {
    it('visits connected graph vertices and applies function', () => {

      expect(visit('v1', vertex => console.log(vertex))).to.log('v1', 'v2')
    })
  })
  context('findPaths', () => {
    it('returns array of paths between two vertices', () => {

      expect(findPaths('v1', 'v2')).to.return([])
    })
  })
  context('removeDirection', () => {
    it('removes direction between two points', () => {

      expect(hasDirection('v1', 'v2')).to.equal(false)
    })
  })
  context('getSeparatedVertices', () => {
    it('should return array of unconnected vertices', () => {

      expect(getSeparatedVertices()).to.return(['v1', 'v2'])
    })
  })
  context('removeVertex', () => {
    it('removes an existing vertex and associated directions', () => {

      expect(hasVertex('v1')).to.equal(false)
    })
  })
  context('count', () => {
    it('returns number of vertices in graph', () => {

      expect(count()).to.equal(2)
    })
  })
});
