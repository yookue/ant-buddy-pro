// @see "https://github.com/umijs/dumi-template"

import {defineConfig} from 'dumi';
import globalSettings from './globalSettings';


const path = require('path');

export default defineConfig({
    base: `${globalSettings?.rootContext}/`,
    publicPath: `${globalSettings?.rootContext}/`,
    title: 'Ant Buddy Pro',
    logo: `${globalSettings?.contextAssets}/ico/logo-blue.svg`,
    locales: [
        ['en-US', 'English'],
        ['zh-CN', '简体中文'],
        ['zh-TW', '繁體中文']
    ],
    metas: [
        {
            name: 'keywords',
            content: 'Ant Buddy, Ant Buddy Pro, Ant Design, Ant Design Pro, React, NPM',
        }
    ],
    favicon: `${globalSettings?.contextAssets}/ico/favicon-blue.ico`,
    links: [
        { rel: 'apple-touch-icon', type: 'image/png', href: `${globalSettings?.contextAssets}/ico/iphone-retina-180×180.png`, sizes: '180×180' },
        { rel: 'apple-touch-icon', type: 'image/png', href: `${globalSettings?.contextAssets}/ico/ipad-retina-167×167.png`, sizes: '167×167' },
        { rel: 'apple-touch-icon', type: 'image/png', href: `${globalSettings?.contextAssets}/ico/android-192x192.png`, sizes: '192x192' },
        { rel: 'icon', type: 'image/svg+xml', href: `${globalSettings?.contextAssets}/ico/logo-blue.svg` },
        { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.font.im/css?family=Comfortaa' },
    ],
    navs: {
        'en-US': [
            null,
            {
                title: 'GitHub',
                path: `https://github.com/yookue${globalSettings?.rootContext}`,
            }
        ],
        'zh-CN': [
            null,
            {
                title: 'GitHub',
                path: `https://github.com/yookue${globalSettings?.rootContext}`,
            }
        ],
        'zh-TW': [
            null,
            {
                title: 'GitHub',
                path: `https://github.com/yookue${globalSettings?.rootContext}`,
            }
        ]
    },
    cssLoader: {
        localsConvention: 'camelCase',
    },
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM',
    //     'react/jsx-runtime': 'jsxRuntime',
    //     'prop-types': 'PropTypes',
    //     'antd': 'antd',
    //     'classnames': 'classNames',
    // },
    extraBabelPlugins: [
        [
            'import',
            {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: 'css',
            }
        ]
    ],
    outputPath: 'docs-dist',
    resolve: {
        includes: ['docs'],
    },
    themeConfig: {
        name: `@${globalSettings?.rootContext}`
    },
    alias: {
        '@': path.resolve(__dirname, '../src'),
        '@yookue/ant-buddy-pro': path.resolve(__dirname, '../src'),
    },
    styles: [
        `
        .__dumi-default-navbar-logo {
            font-family: Comfortaa, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, cursive;
        }
        .__dumi-default-layout-hero {
            background: url("${globalSettings?.contextAssets}/img/home/hero-bg-1.svg") !important
        }
        .__dumi-default-layout-hero h1, .__dumi-default-layout-hero .markdown, .__dumi-default-layout-hero button {
            color: #fff !important;
        }
        `,
    ],
    mode: 'site',
    exportStatic: {},
    fastRefresh: {},
    hash: false,
    webpack5: {},
    // mfsu: {},
    // ssr: {},
});
