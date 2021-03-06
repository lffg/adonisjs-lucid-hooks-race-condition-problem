/*
|--------------------------------------------------------------------------
| Ace Commands
|--------------------------------------------------------------------------
|
| This file is the entry point for running ace commands. For typescript
| projects, the ace commands will fallback to the compiled code and
| hence this file has to be executable by node directly.
|
*/

require('reflect-metadata');
require('source-map-support').install({ handleUncaughtExceptions: false });

const { Ignitor } = require('@adonisjs/core/build/src/Ignitor');

new Ignitor(__dirname).ace().handle(process.argv.slice(2)).catch(console.error);
