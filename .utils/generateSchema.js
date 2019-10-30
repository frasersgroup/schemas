/* eslint-disable no-console */
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const _ = require('lodash')

exports.command = 'generate:schema <name>'

exports.describe = 'Generate a new top-level schema'

exports.builder = {
  id: {
    alias: 'i',
    describe: 'Schema id',
    type: 'string',
  },
  description: {
    alias: 'd',
    describe: 'Schema description',
    type: 'string',
  },
  name: {
    type: 'string',
    description: 'Name of the generated schema',
  },
}

exports.handler = (argv) => {
  const defaultSchema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: `${argv.name.toLowerCase()}#`,
    title: `${_.startCase(argv.name.toLowerCase())}`,
    description: argv.description || '',
    type: 'object',
    required: [],
    properties: {},
  }

  const fieldsDir = path.resolve(__dirname, '../schemas')
  const filePath = path.resolve(fieldsDir, `${argv.name.toLowerCase()}.json`)

  fs.writeFileSync(filePath, JSON.stringify(defaultSchema, null, 2))

  console.log(chalk.green(`${filePath} written successfully.`))
}
