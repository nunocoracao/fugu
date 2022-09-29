#! /usr/bin/env node

const { program } = require('commander')

const generate = require('./commands/generate')

program
    .command('generate <color1> <color2> <color3>')
    .description('List all the TODO tasks')
    .action(generate)

program.parse()