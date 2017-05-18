

module.exports = function webpackConfig(config, webpack) {
  config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'app',
    minChunks: Infinity,
  }));

  if (process.argv[2] === 'server') {
    config.externals = [{
      lie: 'window.Promise',
      react: 'window.React',
      'react-dom': 'window.ReactDOM || window.React',
      'react-router': 'window.ReactRouter',
      fastclick: 'window.FastClick',
      lodash: 'window._',
    },
    ];
  } else {
    delete config.externals;
    config.module.loaders.forEach((n) => {
      if (/\.css/.test(n.test)) {
        delete n.include;
      }
    });
  }
};
