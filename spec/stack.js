import chai, { expect } from 'chai';
import chaiChange from 'chai-change';
import Stack from '../src/stack';

chai.use(chaiChange);

describe('Stack', () => {
  'use strict';

  // initiates myStack before each it() function call
  let myStack;
  beforeEach(() => {
    myStack = new Stack();
  })

  //checks stack to be a function
  it('Stack is defined as a function', () => {
    expect(Stack).to.be.a('function');
  })

  // getLength, which is the length function of the stack, is tested implicitly
  // in the push() as well as in pop() tests below
  // context of the push function
  context('push(data)', () => {
    it('pushes an element to the top of the stack.', () => {
      expect(() => myStack.push('foo'))
        .to.alter(() => myStack.getlength(), { from: 0, to: 1 });
    })
  })

  // context for the pop function
  context('pop()', () => {
    it(`pops and removes an element to the top of the stack
      and checks if length of stack`, () => {
      myStack.push('foo');
      expect(() => myStack.pop())
        .to.alter(() => myStack.getlength(), { from: 1, to: 0 });
    })
    it(`pops an element and checks to see right element was popped.`, () => {
      myStack.push('foo2');
      myStack.push('foo');
      expect(myStack.pop()).to.equal('foo');
    })
    it(`pops an element on an empty stack and checks to see if null is returned.`, () => {
      myStack.push('test');
      myStack.push('test1');
      myStack.pop();
      myStack.pop();
      expect(myStack.pop()).to.be.null;
    })
  })

  // context for the peek function
  context('peek()', () => {
    it('peeks an element at the top of the stack.', () => {
      myStack.push('foo');
      expect(myStack.peek()).to.equal('foo');
    })
    it('peeks an element at the top of the stack which is null.', () => {
      myStack.push('foo');
      myStack.pop();
      expect(myStack.peek()).to.be.null;
    })
  })

  // context for the isEmpty function
  context('isEmpty()', () => {
    it('checks to see if the stack is empty.', () => {
      expect(myStack.isEmpty()).to.be.true;
    })
    it('checks to see if the stack is NOT empty.', () => {
      myStack.push('foo');
      expect(myStack.isEmpty()).to.be.false;
    })
  })
})
