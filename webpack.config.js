/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// const ts = require("typescript");
// const tsConfig = require("./tsconfig.json");
const TSLintPlugin = require("tslint-webpack-plugin");

const config = {
    entry: {
        app: "./src/index.tsx",
    },

    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all",
                },
            },
        },
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".css", ".scss"],
        fallback: {
            path: false,
        },
    },

    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: __dirname + "/src/index.html",
        }),
        new HtmlWebpackPlugin({
            filename: "offline.html",
            template: __dirname + "/src/index.html",
        }),

        new CopyWebpackPlugin({
            patterns: [{ from: "assets/**/*" }],
        }),
    ],

    module: {
        rules: [
            // Exclude .test.ts from being bundled
            {
                test: /^((?!\.test\.ts).)*\.tsx?$/,
                loader: "awesome-typescript-loader",
            },

            // All output ".js' files will have any sourcemaps re-processed by 'source-map-loader".
            {
                enforce: "pre",
                //  - react-data-grid V6 does not have source map
                // test: /(?!react-data-grid)\.js$/,
                test: /\.(jsx?|tsx?)$/,
                loader: "source-map-loader",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: "file-loader",
            },

            {
                test: /\.(png|jpg|webp)$/,
                use: ["url-loader"],
            },
        ],
    },
};

module.exports = (env, argv) => {
    let output = {
        filename: "[name].[fullhash].js",
        path: __dirname + "/dist",
    };
    let plugins = config.plugins;
    let module = config.module;

    module = {
        rules: [
            ...module.rules,
            {
                test: /(?!codicon)\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: argv.mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader, // inject CSS to page
                    },
                    "css-loader", // translates CSS into CommonJS modules
                    {
                        loader: "postcss-loader", // Run post css actions
                        options: {
                            postcssOptions: {
                                // post css plugins, can be exported to postcss.config.js
                                // plugins: function () {
                                //     return [require("precss"), require("autoprefixer")];
                                // },
                                plugins: ["precss", "autoprefixer"],
                            },
                        },
                    },
                    "sass-loader", // compiles Sass to CSS
                ],
            },
            {
                test: /\.svg/,
                loader: "file-loader",
            },
            {
                // This is required for react-markdown in conjuntion with webpack 5+
                // https://github.com/vfile/vfile/issues/38#issuecomment-640479137
                test: /node_modules\/vfile\/core\.js/,
                use: [
                    {
                        loader: "imports-loader",
                        options: {
                            type: "commonjs",
                            imports: ["single process/browser process"],
                        },
                    },
                ],
            },
        ],
    };

    switch (argv.mode) {
        case "development":
            plugins = [
                ...plugins,
                new webpack.HotModuleReplacementPlugin(),
                new webpack.DefinePlugin({
                    SERVER_API_URI: '"http://localhost:3000/"',
                    BUILD_DATETIMESTAMP: `"${new Date().toLocaleString()}"`,
                    BUILD_VERSION: `"Xoet 0.2.0 Ruoi Tu Ky"`,
                    PEERJS_PORT: 3000,
                }),
                new TSLintPlugin({
                    files: ["./src/**/*.ts"],
                }),
            ];
            break;

        case "production":
        default:
            plugins = [
                ...plugins,
                new webpack.DefinePlugin({
                    SERVER_API_URI: '"/api/"',
                    BUILD_DATETIMESTAMP: `"${new Date().toLocaleString()}"`,
                    BUILD_VERSION: `"Xoet 0.1.0 Tiet Canh"`,
                    PEERJS_PORT: 443,
                }),

                // For production environment, tslint is an extra step in the build order.
            ];
            break;
    }

    if (argv.mode === "development")
        return {
            ...config,
            module,
            output,
            plugins,

            devtool: "source-map",
            devServer: {
                contentBase: "./dist",
                hot: true,
                compress: true,
                historyApiFallback: true,
            },
        };

    return {
        ...config,
        module,
        output,
        plugins,
        stats: {
            warningsFilter: [/Failed to parse source map/],
        },
    };
};
