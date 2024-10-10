/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */


import nodePath from 'node:path';
import globalSettings from './globalSettings';


/**
 * Configuration for dumi
 *
 * @author David Hsing
 *
 * @see "https://v1.d.umijs.org/config"
 */
export default {
    base: `${globalSettings.context?.root}/`,
    publicPath: `${globalSettings.context?.root}/`,
    title: 'Ant Buddy Pro',
    logo: `${globalSettings.context?.assets}/ico/logo-icon.svg`,
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
    favicon: `${globalSettings.context?.root}/favicon.ico`,
    links: [
        { rel: 'apple-touch-icon', type: 'image/png', href: `${globalSettings.context?.assets}/ico/iphone-retina-180×180.png`, sizes: '180×180' },
        { rel: 'apple-touch-icon', type: 'image/png', href: `${globalSettings.context?.assets}/ico/ipad-retina-167×167.png`, sizes: '167×167' },
        { rel: 'apple-touch-icon', type: 'image/png', href: `${globalSettings.context?.assets}/ico/android-192x192.png`, sizes: '192x192' },
        { rel: 'icon', type: 'image/svg+xml', href: `${globalSettings.context?.assets}/ico/logo-icon.svg` },
        { rel: 'fluid-icon', type: 'image/svg+xml', href: `${globalSettings.context?.assets}/ico/logo-icon.svg` },
        { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.font.im/css?family=Comfortaa' },
        { rel: 'stylesheet', type: 'text/css', href: `${globalSettings.context?.assets}/css/darkness.css` },
        { rel: 'stylesheet', type: 'text/css', href: `${globalSettings.context?.assets}/css/overlay.css` },
    ],
    navs: {
        'en-US': [
            null,
            {
                title: 'GitHub',
                path: `https://github.com/yookue${globalSettings.context?.root}`,
            }
        ],
        'zh-CN': [
            null,
            {
                title: 'GitHub',
                path: `https://github.com/yookue${globalSettings.context?.root}`,
            }
        ],
        'zh-TW': [
            null,
            {
                title: 'GitHub',
                path: `https://github.com/yookue${globalSettings.context?.root}`,
            }
        ]
    },
    cssLoader: {
        localsConvention: 'camelCase',
    },
    dynamicImport: {
        loading: '@ant-design/pro-layout/es/PageLoading',
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'classnames': 'classNames',
        'moment': 'moment',
        'antd': 'antd',
    },
    headScripts: [
        // Whether use unpkg
        // {src: 'https://unpkg.com/react@18.2.0/umd/react.production.min.js'},
        // {src: 'https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js'},
        // {src: 'https://unpkg.com/classnames@2.5.1/index.js'},
        // {src: 'https://unpkg.com/moment@2.30.1/min/moment.min.js'},
        // {src: 'https://unpkg.com/antd@4.24.16/dist/antd.min.js'},
        // {src: 'https://unpkg.com/smooth-scrollbar@8.8.4/dist/smooth-scrollbar.js'},

        // Or use bootcdn
        {src: 'https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.production.min.js'},
        {src: 'https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js'},
        {src: 'https://cdn.bootcdn.net/ajax/libs/classnames/2.5.2/index.min.js'},
        {src: 'https://cdn.bootcdn.net/ajax/libs/moment.js/2.30.1/moment.min.js'},
        {src: 'https://cdn.bootcdn.net/ajax/libs/antd/4.24.16/antd.min.js'},
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
        '#': nodePath.resolve(__dirname, '..'),
        '@': nodePath.resolve(__dirname, '../src'),
        '@yookue/ant-buddy-pro': nodePath.resolve(__dirname, '../src'),
    },
    apiParser: {
        propFilter: {
            skipNodeModules: true,
        }
    },
    styles: [
        `
        .__dumi-default-layout-hero {
            background: url("${globalSettings.context?.assets}/img/home/hero-bg-1.svg") !important
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
};
