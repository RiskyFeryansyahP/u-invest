const withPlugins = require('next-compose-plugins')
const withAntdLess = require('next-plugin-antd-less')
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

const plugins = [
    [
        withAntdLess({
            cssLoaderOptions: {
                sourceMap: true,
                modules: true,
            },
            lessVarsFilePath: './src/styles/theme.less',
            webpack: (config) => {
                // replace antd moment to dayjs
                config.plugins.push(new AntdDayjsWebpackPlugin())

                return config
            },
        }),
    ]
]

module.exports = withPlugins(plugins, {poweredByHeader: false})