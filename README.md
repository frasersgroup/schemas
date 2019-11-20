# schemas

![](https://github.com/combine-labs/schemas/workflows/Linting/badge.svg)
![](https://github.com/combine-labs/schemas/workflows/Compile/badge.svg)

Schemas for standardizing retail data models. Built using [JSON Schemas](https://json-schema.org)

Implementation Details:
* [Categories](Categories.md)

## Resources:
* [Schema.org Product Schema](https://schema.org/Product)
* [Google Product Structured Data](https://developers.google.com/search/docs/data-types/product)
* [Structured Data Validation and Testing Tools](https://medium.com/@vilcins/structured-data-markup-validation-and-testing-tools-1968bd5dea37)

## Tools

* `yarn util` - run `yarn util --help` for instructions on how to use
  * `$ yarn util generate:field <name>` - generate new field-level json schema
  * `$ yarn util generate:schema <name>` - generate new top-leel json schema
  * `$ yarn util compile` - dereference / compile schemas to `/dist`

### Compile Schemas

* `yarn validate` - validates schemas in the `schemas` directory
* `yarn validate:examples` - validates schemas in the `examples` directory

# #Branch Structure
Due to limited workload in this repo initially, all work should be done in develop. Submit PRs to master. We can switch to feature branches if we begin to see conflicts.
