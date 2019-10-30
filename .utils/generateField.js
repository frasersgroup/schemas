/* eslint-disable no-console */
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const _ = require('lodash')

exports.command = 'generate:field <name>'

exports.describe = 'Generate a new schema field'

exports.builder = {
  id: {
    alias: 'i',
    describe: 'Field id',
    type: 'string',
  },
  description: {
    alias: 'd',
    describe: 'Field description',
    type: 'string',
  },
  name: {
    type: 'string',
    description: 'Name of the generated field',
  },
  type: {
    alias: 't',
    describe: 'Field type',
    type: 'string',
  },
}

exports.handler = (argv) => {
  const defaultSchema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: `${_.camelCase(argv.name)}#`,
    description: argv.description || '',
    type: argv.type || '',
  }

  const fieldsDir = path.resolve(__dirname, '../schemas/fields')
  const filePath = path.resolve(fieldsDir, `${_.camelCase(argv.name)}.json`)

  fs.writeFileSync(filePath, JSON.stringify(defaultSchema, null, 2))

  console.log(chalk.green(`${filePath} written successfully.`))
}
