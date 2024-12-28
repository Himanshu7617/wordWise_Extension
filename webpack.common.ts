import path from 'path'
import webpack from 'webpack' 
import CopyWebpackPlugin from 'copy-webpack-plugin'


const config: webpack.Configuration = {
    entry : {
        popup: './src/popup.ts',
        content: './src/content.ts',
        background: './src/background.ts'
    },

    resolve : {
        extensions: [".ts"],
    },

    module : {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader : "postcss-loader", 
                        options : {
                            postcssOptions : {
                                plugins: ["postcss-import" , "tailwindcss"],
                            },
                        },
                    },
                ],
            },
        ],
    },
    
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    plugins: [
        new CopyWebpackPlugin({
            patterns: [{from : 'static'}],
        }),
    ]
}

export default config