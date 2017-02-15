'use strict'

import Node from './node'

export default class EnchantedNode extends Node {
  constructor( element ) {
    super()
    this.previousLink = null
    this.element = element
  }

  previous() {
    return this.previousLink
  }
}
