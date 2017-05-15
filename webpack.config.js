var webpack = require("webpack");
var path = require("path");
 
var DEV = path.resolve(__dirname, "static");
var OUTPUT = path.resolve(__dirname, "static/js");
 
var config = {

    entry: DEV + "/js/src/index.js",
    output: {
        path: OUTPUT,
        filename: "bundle.js",
        publicPath: '/img/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: DEV,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.less$/,
                //loader: "less-loader" // compiles Less to CSS
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings 
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS 
                    }, {
                        loader: "less-loader" // compiles Less to CSS 
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    }
};
 
module.exports = config;

