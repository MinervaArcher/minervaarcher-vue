module.exports = {
  chainWebpack: (config) => {
    // Fonts Loader
    config.module
      .rule('fonts')
      .test(/\.ttf$/)
      .use('url-loader')
      .loader('url-loader')
      .tap(() => ({
        limit: 10000,
        name: 'fonts/[name].[hash:7].[ext]',
      }))
      .end();
  },
};
