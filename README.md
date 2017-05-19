# Core Data Structures

Tests and implementations for common data structures. See the full list in the [data-structures.md](data-structures.md) file.

Project Goal: [Core Data Structures - Basic](http://jsdev.learnersguild.org/goals/156-Core_Data_Structures-Basic.html)

Base repository: [Core Data Structures--Basic](https://github.com/diop/core-data-structures)

Team Name: ten-seal

Project Members:

[Jonathan Pool](https://github.com/jrpool)

[Fodé Diop](https://github.com/diop)

## Installation and Setup

0. These instructions presuppose that npm (https://nodejs.org/en/) is installed.

1. Clone this repository into a local directory.

2. In the local directory, install required dependencies (see package.json) by executing:

    npm i

3. In the local directory, perform the provided tests by executing:

    npm test

4. Install ESLint (http://eslint.org) by executing:

    npm install -gS eslint

    cd

    eslint --init

5. Edit .eslintrc.json in your home directory to customize.

## Comments

Each structure implementation in this repository relies on one of two features: (1) the next property of Node objects or the next and previous properties of DoubleNode objects, or (2) the properties and methods of JavaScript Array or Set objects.

Some data structures are implemented twice in this repository. Where this is the case, they are named with “1” and “2” suffixes. A structure implementation with “1” relies on Node or DoubleNode properties; one with “2” relies on Array or Set properties and methods.

The Node object has two implementations differing in internal validation, each with its own tests.

The Set implementation is named “PowerSet” so as to avoid any confusion with JavaScript Set objects.
