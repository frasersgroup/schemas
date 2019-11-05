# schemas

![](https://github.com/combine-labs/schemas/workflows/Linting/badge.svg)
![](https://github.com/combine-labs/schemas/workflows/Compile/badge.svg)

Schemas for standardizing retail data models. Built using [JSON Schemas](https://json-schema.org)

## Resources:
* [Schema.org Product Schema](https://schema.org/Product)
* [Google Product Structured Data](https://developers.google.com/search/docs/data-types/product)
* [Structured Data Validation and Testing Tools](https://medium.com/@vilcins/structured-data-markup-validation-and-testing-tools-1968bd5dea37)

## Tools

* `util.js` - run `./util.js --help` for instructions on how to use
  * `$ ./util.js generate:field <name>` - generate new field-level json schema
  * `$ ./util.js generate:schema <name>` - generate new top-leel json schema
  * `$ ./util.js compile <name> [-o <outfile>]` - dereference schema. Optionally write to a file

### Compile Schemas

* `yarn compile` - compiles / validates schemas in the `schemas` directory
* `yarn compile:examples` - compiles / validates schemas in the `examples` directory

# #Branch Structure
Due to limited workload in this repo initially, all work should be done in develop. Submit PRs to master. We can switch to feature branches if we begin to see conflicts.
