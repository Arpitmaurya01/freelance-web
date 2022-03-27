const path = require('path');
const webpack = require('webpack');
module.exports={
    entry:path.resolve(__dirname,"./src/index.js"),
    output:{
        path:path.resolve(__dirname,"../backend/static"),
        filename:"[name].js"
    },
    module:{
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ['@babel/env', '@babel/react']
                }
            }
          },
            
          
            {
              test: /\.svg$/,
              use: ['@svgr/webpack'],
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              }
            },
          
      
         
         
            {
              test: /\.(sa|sc|c)ss$/,
              use: ["style-loader", "css-loader", "sass-loader"]
            },
          
            {
              test: /\.svg$/i,
              use: [
                {
                  loader: 'svg-url-loader',
                  options: {
                    limit: 10000,
                  },
                },
              ],
            },
            {
              test: /\.less$/i,
              use: [
                // compiles Less to CSS
                "style-loader",
                "css-loader",
                "less-loader",
              ],
            },
      
      
          ],
    },
    // experiments: {
    //     outputModule: true,
    // },
    output: {
        asyncChunks: true,
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development"),
            },
        }),
    ],
    
}