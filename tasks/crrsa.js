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
const cp = require('child_process');

console.log();
console.log('-------------------------------------------------------');
console.log('Creating structure Redux');
console.log('-------------------------------------------------------');
console.log();

const rootDir = path.join(__dirname, '..');
const args = process.argv.slice(2);
const projectName = args.join(' ');
const srcDir = `${rootDir}/${projectName}/src`;

console.log('Directory /actions');
const actionsDir = `${srcDir}/actions`;
if (!fs.existsSync(actionsDir)) {
  fs.mkdirSync(actionsDir);
}

console.log('Directory /assets');
const assetsDir = `${srcDir}/assets`;
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir);
}

console.log('Directory /assets/fonts');
const fontsDir = `${assetsDir}/fonts`;
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir);
}

console.log('Directory /assets/images');
const imagesDir = `${assetsDir}/images`;
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
}

console.log('Directory /assets/styles');
const stylesDir = `${assetsDir}/styles`;
if (!fs.existsSync(stylesDir)) {
  fs.mkdirSync(stylesDir);
}

console.log('Directory /assets/uploads');
const uploadsDir = `${assetsDir}/uploads`;
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

console.log('Directory /components');
const componentsDir = `${srcDir}/components`;
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir);
}

console.log('Directory /config');
const configDir = `${srcDir}/config`;
if (!fs.existsSync(configDir)) {
  fs.mkdirSync(configDir);
}

console.log('Directory /config/constants');
const constantsDir = `${configDir}/constants`;
if (!fs.existsSync(constantsDir)) {
  fs.mkdirSync(constantsDir);
}

console.log('Directory /config/routes');
const routesDir = `${configDir}/routes`;
if (!fs.existsSync(routesDir)) {
  fs.mkdirSync(routesDir);
}

console.log('Directory /config/store');
const storeDir = `${configDir}/store`;
if (!fs.existsSync(storeDir)) {
  fs.mkdirSync(storeDir);
}

console.log('Directory /containers');
const containersDir = `${srcDir}/containers`;
if (!fs.existsSync(containersDir)) {
  fs.mkdirSync(containersDir);
}

console.log('Directory /reducers');
const reducersDir = `${srcDir}/reducers`;
if (!fs.existsSync(reducersDir)) {
  fs.mkdirSync(reducersDir);
}

console.log('Directory /services');
const servicesDir = `${srcDir}/services`;
if (!fs.existsSync(servicesDir)) {
  fs.mkdirSync(servicesDir);
}

console.log('Directory /utils');
const utilsDir = `${srcDir}/utils`;
if (!fs.existsSync(utilsDir)) {
  fs.mkdirSync(utilsDir);
}

console.log('Directory /utils/doc');
const docDir = `${utilsDir}/doc`;
if (!fs.existsSync(docDir)) {
  fs.mkdirSync(docDir);
}

console.log('Directory /utils/lib');
const libDir = `${utilsDir}/lib`;
if (!fs.existsSync(libDir)) {
  fs.mkdirSync(libDir);
}

console.log('Directory /utils/tests');
const testsDir = `${utilsDir}/tests`;
if (!fs.existsSync(testsDir)) {
  fs.mkdirSync(testsDir);
}

console.log('Directory /config/constants/actionTypes.js');
cp.execSync(`touch ${constantsDir}/actionTypes.js`);

console.log('Directory /utils/doc/rules.md/rules.md');
cp.execSync(`touch ${docDir}/rules.md`);

console.log('Directory /utils/doc/structure.md');
cp.execSync(`touch ${docDir}/structure.md`);

console.log('Directory /utils/doc/tips.md');
cp.execSync(`touch ${docDir}/tips.md`);
