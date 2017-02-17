'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));
const wpack = require('webpack');
// List of allowed environments
const allowedEnvs = ['dev', 'dist', 'test'];

// Set the correct environment
let env;
if (args._.length > 0 && args._.indexOf('start') !== -1) {
  env = 'test';
} else if (args.env) {
  env = args.env;
} else {
  env = 'dev';
}
process.env.REACT_WEBPACK_ENV = env;

/**
 * Build the webpack configuration
 * @param  {String} wantedEnv The wanted environment
 * @return {Object} Webpack config
 */
function buildConfig(wantedEnv) {
  let isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
  let validEnv = isValid ? wantedEnv : 'dev';
  let config = require(path.join(__dirname, 'cfg/' + validEnv));

  config.entry = ['whatwg-fetch', './src/index.js'];
  config. plugins = [
        new wpack.ProvidePlugin({
            'Promise': 'es6-promise', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })]      
  return config;
}

module.exports = buildConfig(env);
