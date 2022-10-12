// const { resolve } = require('path');
// const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
// const miniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  // 模式：开发  生产
  mode: 'production', // production
  // source-map
  //devtool: 'source-map',
  // 优化，禁止压缩 最小化
//   optimization: {
//     minimize: false
//   },
  // 入口文件  多文件入口
  entry: {
    index: path.resolve(__dirname, './src/js/index.js'),
    // detail: path.resolve(__dirname, './src/js/detail.js'),
    // collections: path.resolve(__dirname, './src/js/collections.js'),
  },
  // 输出/打包设置
  output: {
    // 路径
    path: path.resolve(__dirname + '/dist'),
    // 打包后的文件名
    filename: 'js/[name].js'
  },
  // 模块设置
  module: {
    // 模块匹配规则
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        query: {
          'presets': ['latest']
        }
      },
      {
        test: /\.tpl$/,
        loader: 'ejs-loader'
      },
    //   {
    //     test: /\.css$/,
    //     use: [
    //       'style-loader',
    //       'css-loader',
    //       {
    //         loader: 'postcss-loader',
    //         options: {
    //           plugins: function () {
    //             return [autoprefixer('last 5 versions')];
    //           }
    //         }
    //       }
    //     ]
    //   },
      {
        test: /\.scss$/,
        use: [
            {
                loader: miniCssExtractPlugin.loader,
                options: {
                    hmr: process.env.NODE_ENV === 'development'
                }
            },
            // 'style-loader',
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    plugins: function () {
                        return [autoprefixer('last 5 versions')];
                    }
                }
            },
            'sass-loader'
            //   'style-loader',
            //   'css-loader',
            //   {
            //     loader: 'postcss-loader',
            //     options: {
            //       plugins: function () {
            //         return [autoprefixer('last 5 versions')];
            //       }
            //     }
            //   },
            //   'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|woff|eot|svg|ttf)$/i,
        loader: [
            'url-loader?limit=1024&name=img/[name]-[hash:16].[ext]',
            'image-webpack-loader' //压缩图片
        ]
        // loaders: 'url-loader?limit=1024&name=img/[name]-[hash:16].[ext]'
      }
    ]
  },
  // 插件配置
  plugins: [
    new uglify(),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      title: 'JS++新闻头条',
      chunks: ['index'],
      chunksSortMode: 'manual',
      excludeChunks: ['node_modules'],
      hash: true, //js文件引入的时候路径后面加一串随机的数字，防缓存用
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new miniCssExtractPlugin({
        filename: 'css/[name].css'
    })

    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: resolve(__dirname, 'src/index.html'),
    //   title: '新闻头条',
    //   chunks: ['index'],
    //   chunksSortMode: 'manual',
    //   excludeChunks: ['node_modules'],
    //   hash: true,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true
    //   }
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'detail.html',
    //   template: resolve(__dirname, 'src/detail.html'),
    //   title: '新闻详情',
    //   chunks: ['detail'],
    //   chunksSortMode: 'manual',
    //   excludeChunks: ['node_modules'],
    //   hash: true,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true
    //   }
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'collections.html',
    //   template: resolve(__dirname, 'src/collections.html'),
    //   title: '我的新闻',
    //   chunks: ['collections'],
    //   chunksSortMode: 'manual',
    //   excludeChunks: ['node_modules'],
    //   hash: true,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true
    //   }
    // }),
  ],
  // 开发服务器的配置
  devServer: {
    watchOptions: {
      ignored: /node_modules/
    },
    open: true,
    host: 'localhost',
    port: 3200
  }
}

module.exports = config;