# Core Data Structures
## Team Name: unruly-chital
## Team Member(s): Jacklyne Bouier
## Goal : Forked from (https://github.com/GuildCrafts/web-development-js/issues/128)

## Project Descriptions

Write tests and implementations for common data structures.
Use the list below as a reference for each data structure's interface

## Specifications

- [ ] Artifact produced is a fork of the [core-data-structures][core-data-structures] repo.
- [ ] Can run all tests with `npm test`.
- [ ] All tests are passing.
- [ ] For each data structure identified below, there exists:
  - [ ] a test file with unit tests for each method and property.
  - [ ] an implementation file with a correct implementation of the data structure.

### Required

- [ ] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

### Stretch

Pick a _different_ programming language from JavaScript (e.g. Ruby, Swift, Python, C, Java...) and write tests & implementations for each.

- [ ] Can run all non-JavaScript tests with a single command.
- [ ] For each data structure identified above, there exists:
  - [ ] a test file with unit tests for each method and property _in a language other than JavaScript_.
  - [ ] an implementation file with a correct implementation of the data structure _in a language other than JavaScript_.

## Quality Rubric

**Well formatted code**
- Code uses a linter, which can be invoked with a command (e.g. `npm run lint`). [50 points]
- Running the linter on all source code files generates no linting errors. [50 points]

**Clear and useful README**
- Repository includes a README file with installation and setup instructions. [25 points]
- Repository includes a README file with usage instructions and at least one example use case. [25 points]

**Proper dependency management**
- There is a command to install dependencies (e.g. `npm install`) and it is specified in the installation and setup instructions of the README. [50 points]

**Good project management**
- Commit messages are concise and descriptive. [25 points]
- All features are added via pull requests. [25 points]
- Every pull request has a description summarizing the changes made. [25 points]
- Every pull request has been reviewed by at least one other person. [25 points]

[mit-license]: https://opensource.org/licenses/MIT
[core-data-structures]: https://github.com/GuildCrafts/core-data-structures


## Basic Data Structures Descriptions
### Stack

The classic LIFO (Last-In-First-Out) one-dimensional list.

From [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) [edited]:

> An abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed. The order in which elements come off a stack gives rise to its alternative name, LIFO (for last in, first out). Additionally, a peek operation may give access to the top without modifying the stack.

```javascript
const stack = new Stack()
stack.push("foo") // push an element (the string "foo") to the top of the stack.
stack.pop()       // returns and removes the top element in the stack or null if the stack is empty.
stack.peek()      // returns the top element in the stack or null if the stack is empty.
stack.isEmpty()   // returns true if the stack is empty or false if not.
stack.length()    // returns the number of elements in the stack.
```

### Queue

The classic FIFO (First-In-First-Out) one-dimensional list.

From [Wikipedia](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) [edited]:

> A particular kind of abstract data type or collection in which the entities in the collection are kept in order and the principal (or only) operations on the collection are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue.

```javascript
const queue = new Queue()
queue.enqueue("foo") // adds an element (the string "foo") to the back of the queue.
queue.dequeue()      // returns and removes the front element in the queue or null if the queue is empty.
queue.front()        // returns the front element in queue or null if the queue is empty.
queue.back()         // returns the back element in the queue or null if the queue is empty.
queue.isEmpty()      // returns true if the queue is empty or false if not.
queue.length()       // returns the number of elements in the queue
```

### Priority Queue

Like a queue, but with _priorities_.

From [Wikipedia](https://en.wikipedia.org/wiki/Priority_queue) [edited]:

> An abstract data type which is like a regular queue or stack data structure, but where additionally each element has a "priority" associated with it. An element with high priority is served before an element with low priority. If two elements have the same priority, they are served according to their order in the queue.

```javascript
const pQueue = new PriorityQueue()
pQueue.enqueue("pizza", 100) // adds an element with priority (number) to the back of the queue.
pQueue.front()               // returns the front element (highest priority) in the queue or null if the queue is empty.
pQueue.back()                // returns the back element (lowest priority) in the queue or null if the queue is empty.
pQueue.dequeue()             // returns and removes the front element (highest priority) in the queue or null if the queue is empty.
pQueue.isEmpty()             // returns true if the queue is empty or false if not.
pQueue.length()              // returns the number of elements in the queue.
```

### Set

Collection of things, without repetition.

From [Wikipedia](https://en.wikipedia.org/wiki/Set_(abstract_data_type)) [edited]:

> An abstract data type that can store certain values, without any particular order, and no repeated values. It is a computer implementation of the mathematical concept of a finite set. Unlike most other collection types, rather than retrieving a specific element from a set, one typically tests a value for membership in a set.

```javascript
const set      = new Set(['A', 'B', 'C'])
const otherSet = new Set(['B', 'C', 'E'])
set.add('D')             // adds an element to the set.
set.isEmpty()            // returns true if the set is empty or false if not.
set.contains('B')        // returns true the set contains the element or false if not.
set.remove('C')          // removes an element (if it exists) from the set.
set.forEach(elem => console.log(elem))  // takes a callback function and passes it each element in sequence.
set.size()               // returns the number of elements in the set.
set.union(otherSet)      // unions the set with another set and returns the resulting set.
set.intersect(otherSet)  // intersects the set with another set and returns the resulting set.
set.difference(otherSet) // returns a set that contains the elements found in the set but not in otherSet.
set.isSubset(otherSet)   // returns true if the set is a subset of otherSet or false if not.
set.clone()              // returns a cloned set.
```

### Linked List

A list of nodes that link to each other, like a daisy-chain.

From [Wikipedia](https://en.wikipedia.org/wiki/Linked_list) [edited]:

> A linear collection of data elements, called nodes, each pointing to the next node by means of a pointer. It is a data structure consisting of a group of nodes which together represent a sequence.

Specifically, the following is a _singly-linked_ list (as opposed to the _doubly-linked_ list below).

```javascript
const linkedList = new LinkedList()
linkedList.getHeadNode()           // Returns the first node in the list
linkedList.getTailNode()           // Returns the last node in the list
linkedList.contains("bananas")     // Determines whether or not the list contains the provided data
linkedList.find("bananas")         // Returns the first node containing the provided data, or -1 if not found
linkedList.insert("bananas")       // Inserts a node (with the provided data) to the tail of the list
linkedList.insertFirst("bananas")  // Inserts a node (with the provided data) to the head of the list
linkedList.insertBefore("bananas", "apples") // Inserts a node (with data "apples") before the first node containing "bananas"
linkedList.insertAfter("apples", "bananas")  // Inserts a node (with data "bananas") after the first node containing "apples"
linkedList.remove()                // Removes the tail node from the list
linkedList.removeFirst()           // Removes the head node from the list
linkedList.isEmpty()               // Determines if the list is empty or not
linkedList.size()                  // Returns the size of the list (number of nodes)
linkedList.clear()                 // Clears the list of all nodes/data

const node = linkedList.find("apple")
node.data() // Returns the data ("apple") of the node
node.next() // Returns the next node, or null if no next node
```

### Doubly-Linked List

The interface for the Doubly-Linked List is the same as the Linked List above, _except_ that the nodes also have a `.prev()` method, pointing to the previous node in the sequence, or null if it is the head of the list.

From [Wikipedia](https://en.wikipedia.org/wiki/Doubly_linked_list) [edited]:

> A linked data structure that consists of a set of sequentially linked records called nodes. Each node contains two fields, called _links_, that are references to the previous and to the next node in the sequence of nodes.
