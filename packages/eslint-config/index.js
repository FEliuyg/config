const { isPackageExists } = require('local-pkg');

const TS = isPackageExists('typescript');
const tsLint = TS ? ['@xiaoyaoliu/eslint-config-ts'] : [];

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'].concat(tsLint),
};
