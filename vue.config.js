const { defineConfig } = require('@vue/cli-service');
const publicPath = process.env.NODE_ENV === 'production' ? '/mc_blog/' : '/';

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: publicPath
})
