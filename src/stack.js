export default class Stack {
  constructor() {
    this.commissary = [],
    this.size = 0,
    this.topIndex = null
  }

  beefUp( item ) {
    this.commissary[this.size] = item
    this.topIndex = this.size
    this.size++
  }

  beefUpMany( ...items ) {
    items.forEach( item => {
      this.beefUp( item )
    })
  }

  amputatePiece() {
    if (this.size > 0) {
      this.size--
      this.size > 0 ? this.topIndex = this.size - 1 : this.topIndex = null
      return this.commissary.splice(-1, 1)
    } else {
      return 'underflow error'
    }
  }

  amputatePieceMany( number ) {
    let amputatedPieces = []
    for( let index = 0; index < number; index++ ) {
      amputatedPieces.push(this.amputatePiece())
    }
    return amputatedPieces
  }

  glance() {
    return this.size > 0 ? this.commissary[this.topIndex] : null
  }

  isUninhabited() {
    return this.size > 0 ? false : true
  }

  length() {
    return this.size
  }
}
