/*
 * Copyright (c) 2025- Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License (the "License")
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


import {defineThemeConfig} from 'dumi-theme-antd/dist/defineThemeConfig';


export default defineThemeConfig({
    // loading: {
    //     skeleton: ['/guide', '/about']
    // },
    title: 'Yookue Ant Buddy Pro',
    // localesEnhance: [
    //     {id: 'en-US', switchPrefix: 'EN'},
    //     {id: 'zh-CN', switchPrefix: '中'},
    //     {id: 'zh-TW', switchPrefix: '繁'},
    // ],
    nav: {
        'en-US': [
            {
                title: 'Guide',
                link: '/guide',
            },
            {
                title: 'Layout',
                link: '/layout',
            },
            {
                title: 'Field',
                link: '/field',
            },
            {
                title: 'About',
                link: '/about/contact',
            }
        ],
        'zh-CN': [
            {
                title: '指南',
                link: '/guide-cn',
            },
            {
                title: '布局',
                link: '/layout-cn',
            },
            {
                title: '控件',
                link: '/field-cn',
            },
            {
                title: '关于',
                link: '/about/contact-cn',
            }
        ],
        'zh-TW': [
            {
                title: '指南',
                link: '/guide-tw',
            },
            {
                title: '布局',
                link: '/layout-tw',
            },
            {
                title: '控件',
                link: '/field-tw',
            },
            {
                title: '關于',
                link: '/about/contact-tw',
            }
        ]
    },
    moreLinks: [
        {
            text: 'TsLangUtils',
            link: 'https://github.com/yookue/ts-lang-utils'
        },
        {
            text: 'TsMultiMap',
            link: 'https://github.com/yookue/ts-multi-map'
        },
        {
            text: 'React Condition',
            link: 'https://github.com/yookue/react-condition'
        }
    ],
    description: {
        'en-US': '🏅 Awesome components based on Ant Design ProComponents ❤️',
        'zh-CN': '🏅 开箱即用的 Ant Design ProComponents 增强组件 ❤️',
        'zh-TW': '🏅 開箱即用的 Ant Design ProComponents 增強組件 ❤️',
    },
    actions: {
        'en-US': [
            {
                type: 'primary',
                text: 'Getting Started',
                link: '/guide'
            },
            {
                text: 'About Us',
                link: '/about/contact'
            }
        ],
        'zh-CN': [
            {
                type: 'primary',
                text: '开始使用',
                link: '/guide-cn'
            },
            {
                text: '关于我们',
                link: '/about/contact-cn'
            }
        ],
        'zh-TW': [
            {
                type: 'primary',
                text: '開始使用',
                link: '/guide-tw'
            },
            {
                text: '關于我們',
                link: '/about/contact-tw'
            }
        ],
    },
    features: {
        'en-US': [
            {
                title: '🎁 Out of the box',
                details: 'Elegant default configurations assist developers to get started as simple as possible'
            },
            {
                title: '🎄 Theme support',
                details: 'Theme capabilities, for customizing complete theme components, are up to you'
            },
            {
                title: '✨ More coming components',
                details: 'React components compatible with Ant Design. More components are coming soon'
            }
        ],
        'zh-CN': [
            {
                title: '🎁 开箱即用',
                details: '熟悉 Ant Design 可快速上手，让您专注于业务逻辑'
            },
            {
                title: '🎄 主题支持',
                details: '支持 Ant Design Pro 主题样式，更多样式，随心控制'
            },
            {
                title: '✨ 丰富组件',
                details: '不断完善的 React 组件，与 Ant Design 如出一辙'
            }
        ],
        'zh-TW': [
            {
                title: '🎁 開箱即用',
                details: '熟悉 Ant Design 可快速上手，讓您專注于業務邏輯'
            },
            {
                title: '🎄 主題支持',
                details: '支持 Ant Design Pro 主題樣式，更多樣式，隨心控制'
            },
            {
                title: '✨ 豐富組件',
                details: '不斷完善的 React 組件，與 Ant Design 如出一轍'
            }
        ]
    },
    sidebarGroupModePath: ['/guide', '/about'],
});
