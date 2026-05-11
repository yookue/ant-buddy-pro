/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
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
import {defineConfig} from 'dumi';
import dumiTheme from './.dumitheme';


const {APP_ENV = 'dev'} = process.env;
const ROOT_CONTEXT: string = (APP_ENV === 'dev') ? '' : '/ant-buddy-pro';


/**
 * Configuration for dumi
 *
 * @author David Hsing
 *
 * @see "https://d.umijs.org/config"
 */
export default defineConfig({
    base: `${ROOT_CONTEXT}/`,
    publicPath: `${ROOT_CONTEXT}/`,
    locales: [
        {id: 'en-US', name: 'English', suffix: ''},
        {id: 'zh-CN', name: '简体中文', suffix: '-cn'},
        {id: 'zh-TW', name: '繁體中文', suffix: '-tw'},
    ],
    metas: [{
        name: 'keywords',
        content: 'Unikue, Ant Buddy Pro, Ant Design, Ant ProComponents, React, NPM',
    }],
    favicons: [`${ROOT_CONTEXT}/favicon.ico`],
    links: [
        { rel: 'apple-touch-icon', type: 'image/png', href: `${ROOT_CONTEXT}/assets/ico/iphone-retina-180×180.png`, sizes: '180×180' },
        { rel: 'apple-touch-icon', type: 'image/png', href: `${ROOT_CONTEXT}/assets/ico/ipad-retina-167×167.png`, sizes: '167×167' },
        { rel: 'apple-touch-icon', type: 'image/png', href: `${ROOT_CONTEXT}/assets/ico/android-192x192.png`, sizes: '192x192' },
        { rel: 'icon', type: 'image/svg+xml', href: `${ROOT_CONTEXT}/assets/ico/logo-icon.svg` },
        { rel: 'fluid-icon', type: 'image/svg+xml', href: `${ROOT_CONTEXT}/assets/ico/logo-icon.svg` },
        { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.font.im/css?family=Comfortaa' },
        { rel: 'stylesheet', type: 'text/css', href: `${ROOT_CONTEXT}/assets/css/overlay.css` },
    ],
    // externals: {
        // 'react': 'React',
        // 'react-dom': 'ReactDOM',
    // },
    // headScripts: [
        // Whether use unpkg
        // {src: 'https://unpkg.com/react@18.3.1/umd/react.production.min.js'},
        // {src: 'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js'},
        // Or use bootcdn
        // {src: 'https://cdn.bootcdn.net/ajax/libs/react/18.3.1/umd/react.production.min.js'},
        // {src: 'https://cdn.bootcdn.net/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js'},
    // ],
    resolve: {
        docDirs: ['docs'],
        entryFile: './src/index.ts',
    },
    outputPath: 'docs-dist',
    alias: {
        '#': nodePath.resolve(__dirname, '.'),
        '@': nodePath.resolve(__dirname, './src'),
        '@unikue/ant-buddy-pro': nodePath.resolve(__dirname, './src'),
    },
    apiParser: {},
    exportStatic: {},
    hash: true,
    mako: {},
    // mfsu: {},
    // ssr: {builder: 'mako'},
    // chainWebpack: (config) => {
    //     config.resolve.modules.add('node_modules').prepend('src');
    // },
    themeConfig: {
        name: 'Ant Buddy Pro',
        logo: `${ROOT_CONTEXT}/assets/ico/logo-icon.svg`,
        editLink: false,
        lastUpdated: false,
        socialLinks: {
            github: 'https://github.com/unikueltd/ant-buddy-pro',
        },
        footer: `Open-source MIT Licensed<br/>Copyright © ${new Date().getFullYear()} Unikue Ltd. All rights reserved`,
        ...dumiTheme,
    },
});
