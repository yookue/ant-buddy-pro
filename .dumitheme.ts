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
                title: 'Field',
                link: '/field',
            },
            {
                title: 'Form',
                link: '/form',
            },
            {
                title: 'Layout',
                link: '/layout',
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
                title: '控件',
                link: '/field-cn',
            },
            {
                title: '表单',
                link: '/form-cn',
            },
            {
                title: '布局',
                link: '/layout-cn',
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
                title: '控件',
                link: '/field-tw',
            },
            {
                title: '表單',
                link: '/form-tw',
            },
            {
                title: '布局',
                link: '/layout-tw',
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
        'en-US': '🏅 Awesome components based on Ant Design & Ant ProComponents ❤️',
        'zh-CN': '🏅 开箱即用的 Ant Design & Ant ProComponents 增强组件 ❤️',
        'zh-TW': '🏅 開箱即用的 Ant Design & Ant ProComponents 增強組件 ❤️',
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
                details: 'Elegant default configurations assist developers to get started as simple as possible',
            },
            {
                title: '🎄 Theme support',
                details: 'Theme capabilities, for customizing complete theme components, are up to you',
            },
            {
                title: '🚀 Better compilation performance',
                details: 'By combining Umi v4, esbuild, SWC, persistent cache and other schemes, it brings faster compilation speed than 0.x',
            },
            {
                title: '🎨 Uniform style',
                details: "Based on antd 5.0 CSS-in-JS style support, it fully unifies built-in styles and supports custom loading theme",
            },
            {
                title: '🎮 Simple use',
                details: 'Easy access, installation and use, fully integrated into Ant Design style'
            },
            {
                title: '✨ More coming components',
                details: 'React components compatible with Ant Design. More components are coming soon',
            }
        ],
        'zh-CN': [
            {
                title: '🎁 开箱即用',
                details: '熟悉 Ant Design 可快速上手，让您专注于业务逻辑',
            },
            {
                title: '🎄 主题支持',
                details: '支持 Ant Design 主题样式，更多样式，随心控制',
            },
            {
                title: '🚀 更好的编译性能',
                details: '通过结合使用 Umi v4、esbuild、SWC、持久缓存等方案，带来比 0.x 更快的编译速度',
            },
            {
                title: '🎨 样式风格统一',
                details: '基于 antd v5 CSS-in-JS 样式加持，全面统一内置样式，同时支持自定义主题加载',
            },
            {
                title: '🎮 上手简单',
                details: '接入简单，安装即使用，全面融入 Ant Design 风格',
            },
            {
                title: '✨ 丰富组件',
                details: '不断完善的 React 组件，与 Ant Design 如出一辙',
            }
        ],
        'zh-TW': [
            {
                title: '🎁 開箱即用',
                details: '熟悉 Ant Design 可快速上手，讓您專注于業務邏輯'
            },
            {
                title: '🎄 主題支持',
                details: '支持 Ant Design 主題樣式，更多樣式，隨心控制'
            },
            {
                title: '🚀 更好的編譯性能',
                details: '通過結合使用 Umi v4、esbuild、SWC、持久緩存等方案，帶來比 0.x 更快的編譯速度',
            },
            {
                title: '🎨 樣式風格統一',
                details: '基于 antd v5 CSS-in-JS 樣式加持，全面統一內置樣式，同時支持自定義主題加載',
            },
            {
                title: '🎮 上手簡單',
                details: '接入簡單，安裝即使用，全面融入 Ant Design 風格',
            },
            {
                title: '✨ 豐富組件',
                details: '不斷完善的 React 組件，與 Ant Design 如出一轍'
            }
        ]
    },
    sidebarGroupModePath: true,
});
