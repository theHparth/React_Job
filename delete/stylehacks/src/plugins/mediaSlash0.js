'use strict';
const BasePlugin = require('../plugin');
const { IE_8 } = require('../dictionary/browsers');
const { MEDIA_QUERY } = require('../dictionary/identifiers');
const { ATRULE } = require('../dictionary/postcss');

module.exports = class MediaSlash0 extends BasePlugin {
  constructor(result) {
    super([IE_8], [ATRULE], result);
  }

  detect(rule) {
    const params = rule.params.trim();

    if (params.toLowerCase() === '\\0screen') {
      this.push(rule, {
        identifier: MEDIA_QUERY,
        hack: params,
      });
    }
  }
};
