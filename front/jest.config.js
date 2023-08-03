module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.js$': 'babel-jest',
      '^.+\\.vue$': '@vue/vue3-jest', // ou 'vue-jest' si vous utilisez Vue 2.x
    },
  };
  
