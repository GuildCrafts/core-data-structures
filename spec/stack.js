import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)
describe('Stack', () => {
    'use strict'

    it('exists', () => {
        expect(Stack).to.be.a('function')
    })

    context('push()', () => {
        it('pushes an element to the top of the stack.', () => {
            const myStack = new Stack()
            expect(() => myStack.pushie('foo'))
                .to.alter(() => myStack.lengthy(), {
                    from: 0,
                    to: 1
                })

            context('poppie()', () => {
                it('returns and removes the top element in the stack or null if the stack is empty.', () => {
                    expect(() => myStack.poppie('foo'))
                        .to.alter(() => myStack.lengthy(), {
                            from: 1,
                            to: 0
                        })
                })
            })

            context('peeky()', () => {
                it('returns the top element in the stack', () => {
                    expect(() => myStack.peeky('foo'))
                })
                it('returns null if stack is empty', () => {
                    expect(() => myStack.peeky()
                        .to.be.a('null'))
                })
            })
            context('isitEmpty()', () => {
                it('returns true if the stack is empty', () => {
                    expect(true).to.be.true
                    it('False if not empty', () => {
                        expect(myStack.isitEmpty).to.not.be.true
                    })
                })
            })

            context('lengthy', () => {
                it('Returns the number of elements in the stack', () => {
                    expect(myStack.lengthy).to.have.length
                })
            })
        })
    })
})
