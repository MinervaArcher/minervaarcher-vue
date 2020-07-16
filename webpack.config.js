process.traceDeprecation = true;
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlPwaPlugin = require('@vue/cli-plugin-pwa/lib/HtmlPwaPlugin');
const PreloadPlugin = require('@vue/preload-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

const buildStyleLoaders = ({ modules = false, mode = 'production'}) => {
    return [
        ...(mode === 'production' ? 
            [{
                loader: MiniCssExtractPlugin.loader
            }] :
            [{
                loader: 'vue-style-loader',
                options: {
                    sourceMap: false,
                    shadowMode: false,
                }
            }]
        ),
        {
            loader: 'css-loader',
            options: {
                sourceMap: false,
                importLoaders: 3,
                ...(modules ? {
                    modules: true,
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                } : {}),
            }
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: false,
            }
        },
    ];
};

module.exports = (env, argv) => ({
    mode: argv.mode || 'production',
    context: path.resolve(__dirname),
    devtool: argv.mode === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        hot: argv.mode !== 'production',
        historyApiFallback: true,
        host: 'localhost.minervaarcher',
        port: 3000,
    },
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: argv.mode === 'production' ? 'js/[name].[chunkhash:8].js' : '[name].js',
        publicPath: '/',
        chunkFilename: argv.mode === 'production' ? 'js/[name].[chunkhash:8].js' : '[name].js',
    },
    resolve: {
        symlinks: false,
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: [
            '.js',
            '.vue',
            '.json',
        ],
        modules: [
            'node_modules',
            path.resolve(__dirname, 'node_modules'),
        ],
    },
    resolveLoader: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'node_modules'),
        ],
    },
    ...(argv.mode === 'production' ?
        { 
            optimization: {
                minimize: true,
                minimizer: [
                    new TerserPlugin({
                        test: /\.js(\?.*)?$/i,
                        include: path.resolve(__dirname, 'src'),
                        cache: true,
                        terserOptions: {
                            output: {
                                comments: /^\**!|@preserve|@license|@cc_on/
                            },
                            mangle: {
                                safari10: true
                            }
                        },
                    })
                ],
                splitChunks: {
                    cacheGroups: {
                        vendors: {
                            name: 'chunk-vendors',
                            test: /[\\/]node_modules[\\/]/,
                            priority: -10,
                            chunks: 'initial',
                        },
                        common: {
                            name: 'chunk-common',
                            minChunks: 2,
                            priority: -20,
                            chunks: 'initial',
                            reuseExistingChunk: true,
                        }
                    }
                }
            } 
        } :
        {}
    ),
    module: {
        noParse: /^(vue|vue-router|vuex)$/,
        rules: [
            {
                test: /\.vue$/i,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhiteSpace: argv.mode !== 'production',
                            }
                        }
                    }
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                test: /\.s[ac]ss$/i,
                oneOf: [
                    {
                        resourceQuery: /module/,
                        use: buildStyleLoaders({ modules: true, mode: argv.mode }),
                    },
                    {
                        resourceQuery:  /\?vue/,
                        use: buildStyleLoaders({ mode: argv.mode }),
                    },
                    {
                        test: /\.module\.\w+$/,
                        use: buildStyleLoaders({ modules: true, mode: argv.mode }),
                    },
                    {
                        use: buildStyleLoaders({ mode: argv.mode }),
                    },
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                test:/\.(png|jpe?g|gif|webp)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            name: 'img/[name].[hash:8].[ext]',
                        }
                    }
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                test: /\.(svg)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[hash:8].[ext]',
                },
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:  [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'fonts/[name].[hash:7].[ext]'
                        }
                    }
                ],
                include: path.resolve(__dirname, 'src/fonts'),
            },
            {
                enforce: 'pre',
                test: /\.(vue|js)$/,
                exclude: [
                    /node_modules/
                ],
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            extensions: [
                                '.js',
                                '.vue',
                            ],
                            emitWarning: true,
                            formatter: 'stylish',
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin(
            {
              BASE_URL: '"/"',
              'process.env': {
                BASE_URL: '"/"'
              }
            }
        ),
        new CaseSensitivePathsPlugin(),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        ...(argv.mode === 'production' ? 
            [
                new MiniCssExtractPlugin({
                    filename: 'css/[name].[contenthash:8].css',
                    chunkFilename: 'css/[name].[contenthash:8].css',
                }),
                new OptimizeCssAssetsPlugin({
                    canPrint: false,
                    cssProcessorOptions: {
                        safe: true,
                        autoprefixer: {
                            disable: true
                        },
                        mergeLonghand: false
                    }
                }),
            ] : 
            [
                new webpack.HotModuleReplacementPlugin(),
                new webpack.NoEmitOnErrorsPlugin(),
                new webpack.ProgressPlugin(),
            ]
        ),
        new HtmlWebpackPlugin({
            templateParameters: (compilation, assets, pluginOptions) => {
                // enhance html-webpack-plugin's built in template params
                let stats
                return {
                  // make stats lazy as it is expensive
                  get webpack () {
                    return stats || (stats = compilation.getStats().toJson())
                  },
                  compilation: compilation,
                  webpackConfig: compilation.options,
                  htmlWebpackPlugin: {
                    files: assets,
                    options: pluginOptions
                  }
                };
              },
            ...(argv.mode === 'production' ?
                {
                    minify: {
                        removeComments: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        collapseBooleanAttributes: true,
                        removeScriptTypeAttributes: true,
                    },
                } : 
                {}),
            template: path.resolve(__dirname, 'public/index.html'),
        }),
        new HtmlPwaPlugin({
            name: 'Minerva Archer',
            short_name: 'Minerva',
            themeColor: '#000000',
            msTileColor: '#FFFFFF',
            manifestOptions: {
                name: 'Minerva Archer',
                short_name: 'Minerva',
                description: 'The personal website of Minerva Archer.',
                developer: {
                    name: 'Minerva Archer',
                    url: 'https://minervaarcher.com'
                },
                start_url: '/index.html',
                theme_color: '#000000',
                background_color: '#FFFFFF',
            }
        }),
        new PreloadPlugin({
            rel: 'preload',
            include: 'initial',
            fileBlacklist: [
                /\.map$/,
                /hot-update\.js$/
            ]
        }),
        new PreloadPlugin({
            rel: 'prefetch',
            include: 'asyncChunks'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public'),
                    to: path.resolve(__dirname, 'dist'),
                    toType: 'dir',
                    globOptions: {
                        ignore: [
                            '**/index.html',
                            '**/.DS_Store'
                        ],
                    }
                }
            ]
        }),
        ...(argv.mode === 'production' ? [
            new GenerateSW({
                cleanupOutdatedCaches: true,
                exclude: [
                    /\.map$/,
                    /img\/icons\//,
                    /favicon\.ico$/,
                    /manifest\.json$/
                ],
                cacheId: 'minervaarcher-vue'
            }),
        ] : [])
    ]
});