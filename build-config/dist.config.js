const path =  require('path');
const webpack =  require('webpack');

module.exports = {
    entry: './src/react-wavesurfer',

    output: {
        path: path.join(__dirname, '../dist'),
        library: 'ReactWavesurfer',
        filename: 'react-wavesurfer.js',
        libraryTarget: 'umd'
    },

    module: {
      loaders: [
        {test: /\.js$/, loader: 'babel-loader'}
      ]
    },

    resolve: {
      extensions: ['', '.js', '.jsx'],
      alias: {
        wavesurfer: 'wavesurfer.js'
      }
    },

    externals: [
      {
        'react': {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
        }
      }
    ],

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ]
};