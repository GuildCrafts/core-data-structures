'use strict'

export default class Stack {
  constructor( data ) {
    this.top = 0
    this.data = data
    this.element = []
  }

  push( data ) {
    console.log( this.top, data )
    this.element[ this.top++ ] = data
    return this.element
  }

  pop() {
    if( this.top === 0 ){
      return null
    }else{
      this.element.splice( this.element[ this.top ] )
      return this.element
    }
  }

  length() {
    return this.top
  }

  isEmpty() {
    if( this.top !== 0 ){
      return true
    }else{
      return false
    }
  }

  peek() {
    if( this.top === 0 ){
      return null
    }else{
      return this.element[ this.top ]
    }
  }

}
