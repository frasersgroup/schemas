/* eslint-disable no-console */
const chalk = require('chalk')
const fs = require('fs-extra')
const path = require('path')
const $RefParser = require('json-schema-ref-parser')

exports.command = 'compile'

exports.describe = 'Dereference / compile schemas'

exports.builder = {
  name: {
    type: 'string',
  },
  outfile: {
    alias: 'o',
    describe: 'Output schema to console',
    type: 'boolean',
  },
  schema: {
    describe: 'Compile individual schema',
    type: 'string',
  },
  silent: {
    alias: 's',
    describe: 'Turn of console logging',
    type: 'boolean',
  },
}

const schemasPath = path.resolve(__dirname, '../schemas')
const distPath = path.resolve(__dirname, '../dist')

const compileSchema = async (name) => {
  const filename = `${name}.json`
  const schemaFilePath = path.resolve(schemasPath, filename)
  const distFilePath = path.resolve(distPath, filename)

  const resultSchema = await $RefParser.dereference(schemaFilePath)

  Object.keys(resultSchema.properties).forEach((property) => {
    delete resultSchema.properties[property].$schema
  })

  fs.writeFileSync(distFilePath, JSON.stringify(resultSchema, null, 2))
  console.log(`${chalk.green(distFilePath)} written successfully`)

  return resultSchema
}

exports.handler = async (argv) => {
  let schemas = await fs.readdir(schemasPath)
  schemas = schemas
    .filter((schema) => schema.match(/\.json$/))
    .map((schema) => schema.replace(/\.json/, ''))

  const compilePromises = schemas.map(compileSchema)

  await Promise.all(compilePromises)

  return true
}
