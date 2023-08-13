// @see "https://github.com/umijs/father/blob/master/docs/config.md"

import {defineConfig} from 'father';


const path = require('path');

export default defineConfig({
    esm: {},
    cjs: {},
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
    }
});
