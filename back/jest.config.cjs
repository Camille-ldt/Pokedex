module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest', // Utilise babel-jest pour transformer les fichiers .js
  },
  testEnvironment: 'node',
  globals: {
    'babel-jest': {
      useESModules: true, // Utiliser les modules ES
    },
  },
};