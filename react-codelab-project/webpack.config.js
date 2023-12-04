var webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: [
        './src/index.js',
        './src/style.css'
    ],

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: __dirname + '/public/',
    },

    module: {
        //loaders: [
        rules:[
            {
                // babel-loader를 이용해 규칙에 적용
                test:  /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // presets: ['es2015', 'react']
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                        // Babel 플러그인 설정
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }                    
                },

                // test: /\.js$/,
                // use: ['react-hot', 'babel?' + JSON.stringify({
                //     cacheDirectory: true,
                //     presets: ['es2015', 'react']
                // })],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                // use: {
                //     loader: ["style-loader", "css-loader"],
                //     options : { 
                //       modules:true,
                //       localIdentName:'[path][name]__[local]--[hash:base64:5]',
                //     },
                // },
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    resolve: {
        // root: path.resolve('./src')
    }    
};
