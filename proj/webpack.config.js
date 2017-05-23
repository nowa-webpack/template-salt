module.exports = function webpackConfig(config, webpack) {
  config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'app',
    minChunks: Infinity,
  }));

  config.externals = [{
    lie: 'window.Promise',
    react: 'window.React',
    'react-dom': 'window.ReactDOM || window.React',
    'react-router': 'window.ReactRouter',
    fastclick: 'window.FastClick',
    lodash: 'window._',
  },
  ];
};
