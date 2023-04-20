module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-use-before-define': [
      2,
      {
        functions: false,
        classes: true,
        typedefs: false,
      },
    ],
    '@typescript-eslint/no-unused-expressions': [
      2,
      { allowShortCircuit: true, allowTernary: true },
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/consistent-indexed-object-style': 0,
  },
};
