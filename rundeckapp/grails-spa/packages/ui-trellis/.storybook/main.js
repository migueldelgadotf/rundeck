module.exports = {
    addons: [
        {
            name: '@storybook/preset-typescript',
            options: {
                framework: 'vue',
                forkTsCheckerWebpackPluginOptions: {
                    compilerOptions: {
                        experimentalDecorators: true
                    }
                }
            }
        },
        '@storybook/addon-knobs'
    ],
    stories: ['../src/**/*.stories.[tj]s'],

    webpackFinal: (config) => {
        config.devtool = 'eval-source-map'
        config.module.rules.push(
        {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: [{
                loader: 'ts-loader',
                options: {
                appendTsSuffixTo: [/\.vue$/],
                transpileOnly: true
                },
            }],
        },
        {
            test: /\.scss$/,
            use: [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
        });
        return {
            ...config,
        };
    }
}