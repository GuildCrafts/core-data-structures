'use strict'


export default class Queue {
  constructor(initialValues=[]) {
    this.elements = initialValues
    this.top = initialValues.length
  }
}
