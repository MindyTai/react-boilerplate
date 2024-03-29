const tasks = arr => arr.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'yarn run lint',
      'yarn run format',
      'git add .'
    ]),
  },
};
