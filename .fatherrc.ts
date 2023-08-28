// @see "https://github.com/umijs/father/blob/master/docs/config.md"

import {defineConfig} from 'father';


const path = require('path');

export default defineConfig({
    cjs: {},
    esm: {},
    umd: {
        name: 'AntBuddyPro',
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'jsxRuntime',
            'prop-types': 'PropTypes',
            'antd': 'antd',
            'classnames': 'classNames',
        }
    },
    alias: {
        '@': path.resolve(__dirname, './src'),
        '@yookue/ant-buddy-pro': path.resolve(__dirname, './src'),
    },
    extraBabelPlugins: [
        ['babel-plugin-comments', {
            remove: 'all',
        }]
    ]
});
