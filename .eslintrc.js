const OFF = 0;

module.exports = {
  extends: ['@vmw/vmware-react'],
  root: true,
  rules: {
    '@typescript-eslint/no-explicit-any': OFF,
    'import/no-nodejs-modules': OFF,
  },
};
