#!/usr/bin/env node

const { calcMassDefect, calcBindingEnergy } = require("./setup")
const argv = require("yargs")

argv
  .command({
    command: "element <element>",
    desc: "Element to calculate binding energy for",
    handler: (argv) => calcBindingEnergy(argv.element).pull(),
  })
  .help()
  .demandCommand().argv