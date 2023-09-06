// @see "https://github.com/umijs/dumi-template"

import {defineConfig} from 'dumi';
import globalSettings from './globalSettings';


const path = require('path');

export default defineConfig({
    base: `${globalSettings?.rootContext}/`,
    publicPath: `${globalSettings?.rootContext}/`,
    title: 'Ant Buddy Pro',
    logo: `${globalSettings?.contextAssets}/ico/logo-icon.svg`,
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
    favicon: `${globalSettings?.rootContext}/favicon.ico`,
    links: [
        { rel: 'apple-touch-icon', type: 'image/png', href: `${globalSettings?.contextAssets}/ico/iphone-retina-180×180.png`, sizes: '180×180' },
        { rel: 'apple-touch-icon', type: 'image/png', href: `${globalSettings?.contextAssets}/ico/ipad-retina-167×167.png`, sizes: '167×167' },
        { rel: 'apple-touch-icon', type: 'image/png', href: `${globalSettings?.contextAssets}/ico/android-192x192.png`, sizes: '192x192' },
        { rel: 'icon', type: 'image/svg+xml', href: `${globalSettings?.contextAssets}/ico/logo-icon.svg` },
        { rel: 'fluid-icon', type: 'image/svg+xml', href: `${globalSettings?.contextAssets}/ico/logo-icon.svg` },
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
    dynamicImport: {
        loading: '@/../.dumi/loading',
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'classnames': 'classNames',
        'moment': 'moment',
        'antd': 'antd',
    },
    headScripts: [
        'https://unpkg.com/react@17.0.2/umd/react.production.min.js',
        'https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js',
        'https://unpkg.com/classnames@2.3.2/index.js',
        'https://unpkg.com/moment@2.29.4/min/moment-with-locales.min.js',
        'https://unpkg.com/antd@4.24.13/dist/antd.min.js',
    ],
    extraBabelPlugins: [
        ['babel-plugin-import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css',
        }]
    ],
    resolve: {
        includes: ['docs'],
    },
    outputPath: 'docs-dist',
    alias: {
        '@': path.resolve(__dirname, '../src'),
        '@yookue/ant-buddy-pro': path.resolve(__dirname, '../src'),
    },
    apiParser: {
        propFilter: {
            skipNodeModules: true,
        }
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
    hash: true,
    webpack5: {},
    mfsu: {},
    // ssr: {},
});
