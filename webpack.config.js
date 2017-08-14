var webpack = require('webpack');
var path = require("path");
module.export = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    './src'
  ],
  output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories:['node_modules', 'src'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test:/\.jsx?$/,
        exclude; /node_module/,
        loader:['react-hot', 'babel?presets[]=react,presets[]=es2015']
      }
    ]
  },
  plugins: [
    new webpack.HotModulesReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

}