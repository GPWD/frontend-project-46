#!/usr/bin/env node
import { Command } from 'commander';
import diff from '../src/index.js';

const program = new Command();
program
  .name('genDiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1>')
  .arguments('<filepath2>')
  .action((filepath1, filepath2) => {
    const myFormat = program.opts().format;
    console.log(diff(filepath1, filepath2, myFormat));
  })
  .parse();
