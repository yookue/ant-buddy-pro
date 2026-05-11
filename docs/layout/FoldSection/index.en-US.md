---
title: FoldSection
toc: content
order: 25
---

## Description

Similar to [Collapse](https://ant.design/components/collapse) of [Ant Design](https://ant.design), with only one header and one panel.

## Premise

> You need to install <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> package first if you're using the default icons:

<InstallDependencies
  npm="$ npm install @ant-design/icons"
  yarn="$ yarn add @ant-design/icons"
  pnpm="$ pnpm install @ant-design/icons"
/>

## Import

```tsx | pure
import {FoldSection} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property            | Description                                                              | Type                                                                          | Default              |
|---------------------|--------------------------------------------------------------------------|-------------------------------------------------------------------------------|----------------------|
| clazzPrefix         | The CSS class prefix of the component                                    | `string`                                                                      | `'abp-fold-section'` |
| containerClazz      | The CSS class name of the container div                                  | `string`                                                                      | -                    |
| containerStyle      | The CSS style of the container div                                       | `React.CSSProperties`                                                         | -                    |
| boundBorder         | Whether to border the bound or not                                       | `boolean`                                                                     | `true`               |
| headerClazz         | The CSS class names of the header div                                    | `string`                                                                      | -                    |
| headerStyle         | The CSS style of the header div                                          | `React.CSSProperties`                                                         | -                    |
| headerOrnament      | The DOM of ornament span that under the header div                       | `React.ReactNode`                                                             | -                    |
| headerOrnamentPos   | The position of ornament span that under the header div                  | `'before' \| 'after' \| false`                                                | `'before'`           |
| headerContent       | The DOM of content span that under the header div                        | `React.ReactNode`                                                             | -                    |
| headerCollapse      | The DOM of collapse span that under the header div when expanded         | `React.ReactNode`                                                             | `<DownOutlined/>`    |
| headerCollapsePos   | The position of collapse span that under the header div                  | `'before' \| 'after' \| false`                                                | `'after'`            |
| headerExpand        | The DOM of collapse that under the header div when collapsed             | `React.ReactNode`                                                             | `<UpOutlined/>`      |
| tooltipCtrl         | Whether to use Tooltip                                                   | `boolean`                                                                     | -                    |
| tooltipProps        | The props of Antd Tooltip                                                | `Omit<TooltipProps, 'title'>`                                                 | -                    |
| panelClazz          | The CSS class name of the panel div                                      | `string`                                                                      | -                    |
| panelStyle          | The CSS style of the panel div                                           | `React.CSSProperties`                                                         | -                    |
| panelContent        | The DOM of the panel div                                                 | `React.ReactNode`                                                             | -                    |
| panelForceRender    | Whether to render the panel div even it has none content and placeholder | `boolean`                                                                     | `false`              |
| panelDestroyOnClose | Whether to destroy the panel div when it's closed                        | `boolean`                                                                     | `false`              |
| panelPlaceholder    | The DOM of placeholder for the panel div                                 | `React.ReactNode`                                                             | `<Empty/>`           |
| defaultOpen         | Whether the panel div is opened when initializing                        | `boolean`                                                                     | `true`               |
| onOpenChange        | The callback function when the panel div changed                         | `(open: boolean) => void`                                                     | -                    |
| presetStyle         | The preset style of the component                                        | `'default' \| 'success' \| 'info' \| 'warn' \| 'error' \| 'classic' \| false` | `'default'`          |
| locale              | The locale of the component, e.g. 'en_US'                                | `string`                                                                      | -                    |
| localeProps         | The props of locale                                                      | `IntlLocaleProps`                                                             | -                    |
