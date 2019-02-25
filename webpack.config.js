var path = require('path');

module.exports = {

    entry: {  
          app:'./src/main/js/app.js'  
    },   
        devtool: 'sourcemaps',  
        cache: true,  
        mode: 'development',   
    output: {  
        path: path.resolve(__dirname),  
        filename: './src/main/resources/static/built/[name].bundle.js'  
    },  
    module: {  
        rules: [  
            {  
                test: path.join(__dirname, '.'),  
                exclude: /(node_modules)/,  
                use: [{  
                    loader: 'babel-loader',  
                    options: {  
                        "presets": ["@babel/preset-env", "@babel/preset-react"]
                    }  
                }]  
            }  
        ]  
    }  
};  