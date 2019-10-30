#!/usr/bin/env node

const yargs = require('yargs')

yargs // eslint-disable-line no-unused-expressions
  .commandDir('./.utils')
  .demandCommand()
  .help()
  .argv
