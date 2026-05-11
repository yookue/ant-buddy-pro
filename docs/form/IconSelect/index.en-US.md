---
title: IconSelect
toc: content
order: 50
---

## Description

IconSelect, provides a select box that displaying icons for choosing.

## Premise

> You need to install <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> package first if you're using the default icons:

<InstallDependencies
  npm="$ npm install @ant-design/icons"
  yarn="$ yarn add @ant-design/icons"
  pnpm="$ pnpm install @ant-design/icons"
/>

## Import

```tsx | pure
import {IconSelect} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property           | Description                                        | Type                          | Default                                                        |
|--------------------|----------------------------------------------------|-------------------------------|----------------------------------------------------------------|
| clazzPrefix        | The CSS class prefix of the component              | `string`                      | `'abp-icon-select'`                                            |
| optionMode         | The option mode, text means normal                 | `'icon' \| 'text'`            | `'icon'`                                                       |
| optionGroup        | Whether to divide the options into groups          | `boolean`                     | `true`                                                         |
| proField           | Whether to use ProFormField instead of Antd        | `boolean`                     | `true`                                                         |
| tabsProps          | The properties of the tabs                         | `MixinTabsProps`              | -                                                              |
| themeTypes         | The theme types                                    | `IconThemeType[]`             | `['outlined', 'filled', 'twotone']`                            |
| defaultThemeType   | The default theme type                             | `IconThemeType`               | `'outlined'`                                                   |
| themeInkBar        | Whether to display the ink bar for the theme types | `boolean`                     | `true`                                                         |
| sceneTypes         | The scene types                                    | `IconSceneType[]`             | `['direction', 'suggestion', 'editor', 'data', 'logo', 'web']` |
| defaultSceneType   | The default scene type                             | `IconSceneType`               | `'direction'`                                                  |
| sceneInkBar        | Whether to display the ink bar for the scene types | `boolean`                     | `true`                                                         |
| sceneEntryWidth    | The width of scene title                           | `string`                      | `'150px'`                                                      |
| optionWrapperClazz | The CSS class name of the icon option wrapper      | `string`                      | -                                                              |
| optionWrapperStyle | The CSS style of the icon option wrapper           | `React.CSSProperties`         | -                                                              |
| optionIconClazz    | The CSS class name of the icon option              | `string`                      | -                                                              |
| optionIconStyle    | The CSS style of the icon option                   | `React.CSSProperties`         | -                                                              |
| searchBox          | Whether to display the search box or not           | `boolean`                     | `true`                                                         |
| tooltipCtrl        | Whether to use Tooltip                             | `boolean`                     | `false`                                                        |
| tooltipProps       | The props of Antd Tooltip                          | `Omit<TooltipProps, 'title'>` | -                                                              |
| locale             | The locale of the component, e.g. 'en_US'          | `string`                      | -                                                              |
| localeProps        | The props of locale                                | `IntlLocaleProps`             | -                                                              |
