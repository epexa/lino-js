global.expect = require('chai').expect;
global.fetch = require('cross-fetch');

const lino = require('../../lib/lino-js.cjs');
global.LINO = lino.LINO;
global.UTILS = lino.UTILS;

require('../test.spec')('node');