const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'production',
    //specify entry points
    entry: './src/index.ts', //which module webpack should use to begin building out its internal dependency graph
    resolve: {
        extensions: [".vue",".ts",".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/] 
                    }
                }
            },{
                test: /\.scss$/,
                use: [
                    //cssを出力するための`loader`
                    'style-loader',
                    //cssをJavaScriptに変換するための`loader`
                    'css-loader',
                    //sassをコンパイルする`loader`
                    'sass-loader',
                ]
            },{
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};