#!/usr/bin/env node
/**
 * Copyright (c) 2020-present, Snoop Consulting.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const args = process.argv.slice(2);
const projectName = args.join(' ');
const srcDir = `${rootDir}/${projectName}`;

const actionsDir = `${srcDir}/src/actions`;
if (!fs.existsSync(actionsDir)) {
  fs.mkdirSync(actionsDir);
}

const assetsDir = `${srcDir}/src/assets`;
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir);
}
