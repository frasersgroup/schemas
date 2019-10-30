/* eslint-disable no-console */
const chalk = require('chalk')
const fs = require('fs-extra')
const path = require('path')
const $RefParser = require('json-schema-ref-parser')

exports.command = 'compile <name>'

exports.describe = 'Dereference / compile a schema'

exports.builder = {
  name: {
    type: 'string',
  },
  outfile: {
    alias: 'o',
    describe: 'Filename output for the compiled schema',
  },
}

exports.handler = async (argv) => {
  const schemasPath = path.resolve(__dirname, '../schemas')

  let schemas = await fs.readdir(schemasPath)
  schemas = schemas
    .filter((schema) => schema.match(/\.json$/))
    .map((schema) => schema.replace(/\.json/, ''))

  if (!schemas.includes(argv.name.toLowerCase())) {
    throw new Error(`Schema model ${argv.name} does not exist`)
  }

  const schemaFilePath = path.resolve(schemasPath, `${argv.name}.json`)

  const resultSchema = await $RefParser.dereference(schemaFilePath)

  Object.keys(resultSchema.properties).forEach((property) => {
    delete resultSchema.properties[property].$schema
  })

  if (argv.outfile) {
    fs.writeFileSync(argv.outfile, JSON.stringify(resultSchema, null, 2))
    console.log(`${chalk.green(argv.outfile)} written successfully`)

    return true
  }

  return true
}
