// vue.config.js

module.exports = {
  devServer: {
    proxy: {
      '/classification/': {
        target: 'http://localhost:8000', // Remplacez par l'URL de votre backend Django
        changeOrigin: true,
      },
    },
  },
  transpileDependencies: true,
};
