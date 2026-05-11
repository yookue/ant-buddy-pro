---
title: IconSelect
toc: content
order: 9
---

## 组件说明

IconSelect，提供了一个可选择图标的下拉框。

## 使用前提

> 如果您使用默认的图标，您需要先安装 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 图标组件包：

<InstallDependencies
  npm="$ npm install @ant-design/icons"
  yarn="$ yarn add @ant-design/icons"
  pnpm="$ pnpm install @ant-design/icons"
/>

## 导入组件

```tsx | pure
import {IconSelect} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性                 | 说明                   | 类型                            | 默认值                                                            |
|--------------------|----------------------|-------------------------------|----------------------------------------------------------------|
| clazzPrefix        | 组件的 CSS 类名前缀         | `string`                      | `'abp-icon-select'`                                            |
| optionMode         | 选项模式，文本或图标           | `'icon' \| 'text'`            | `'icon'`                                                       |
| optionGroup        | 是否将选项分组              | `boolean`                     | `true`                                                         |
| proField           | 是否使用 ProFormField 控件 | `boolean`                     | `true`                                                         |
| tabsProps          | 标签页的属性               | `MixinTabsProps`              | -                                                              |
| themeTypes         | 主题类型                 | `IconThemeType[]`             | `['outlined', 'filled', 'twotone']`                            |
| defaultThemeType   | 默认的主题类型              | `IconThemeType`               | `'outlined'`                                                   |
| themeInkBar        | 是否显示主题类型的活跃指示条       | `boolean`                     | `true`                                                         |
| sceneTypes         | 场景类型                 | `IconSceneType[]`             | `['direction', 'suggestion', 'editor', 'data', 'logo', 'web']` |
| defaultSceneType   | 默认的场景类型              | `IconSceneType`               | `'direction'`                                                  |
| sceneInkBar        | 是否显示场景类型的活跃指示条       | `boolean`                     | `true`                                                         |
| sceneEntryWidth    | 场景类型的宽度              | `string`                      | `'150px'`                                                      |
| optionWrapperClazz | 包裹图标选项 div 的 CSS 类名  | `string`                      | -                                                              |
| optionWrapperStyle | 包裹图标选项 div 的 CSS 样式  | `React.CSSProperties`         | -                                                              |
| optionIconClazz    | 图标选项的 CSS 类名         | `string`                      | -                                                              |
| optionIconStyle    | 图标选项的 CSS 样式         | `React.CSSProperties`         | -                                                              |
| searchBox          | 是否显示搜索框              | `boolean`                     | `true`                                                         |
| tooltipCtrl        | 是否使用 Tooltip         | `boolean`                     | `false`                                                        |
| tooltipProps       | Tooltip 属性           | `Omit<TooltipProps, 'title'>` | -                                                              |
| locale             | 组件的语言, e.g. 'zh_CN'  | `string`                      | -                                                              |
| localeProps        | 多语言属性                | `IntlLocaleProps`             | -                                                              |
