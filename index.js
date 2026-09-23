#!/usr/bin/env node

import { commandBuilder } from "./commands.js";

console.log("welcome to todo-cli");

const todoArgvs = process.argv.slice(2);

console.log(todoArgvs);
// commandBuilder(todoArgvs);
