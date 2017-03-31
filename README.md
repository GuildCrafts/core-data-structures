# zesty-impala

# Core Data Structures

## Challenge Rating

This goal will likely be within your ZPD if you...

- Can write programs and tests using Node.js and npm
- Can use problem decomposition to split difficult problems into smaller parts
- Are familiar with the interfaces of core JavaScript objects: Object, Array, String, etc.
- Are interested in common data structures
- Are interested in critical thinking and problem solving

## Description

Write tests and implementations for common data structures.

Fork the the [core-data-structures repository][core-data-structures] and use the fork as your project artifact.

Use the list in the [data-structures.md][list-ds] file as a reference for each data structure's interface.

## Context

If you spend most of your time programming in high-level languages, you may not realize how often you use data structures or how they are built. Sometimes it's useful to peek under the hood and see how the engine works.

The nice thing is, most data structures are **actually quite simple** when you get down to it. They have straight-forward, relatively small interfaces.

In a larger sense, being more familiar with data structures is helpful for you ability to think about data more abstractly, and to design better software.

## Specifications

- [ ] Artifact produced is a fork of the [core-data-structures][core-data-structures] repo.
- [ ] Can run all tests with `npm test`.
- [ ] All tests are passing.
- [ ] For each data structure in [the list][list-ds], there exists:
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
[list-ds]: https://github.com/GuildCrafts/core-data-structures/blob/master/data-structures.md
