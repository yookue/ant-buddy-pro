---
title: ExactInput
toc: content
order: 45
---

## Description

ExactInput, provides a text input box with a checkbox, aiming to support exact capability for enquiries.

## Premise

<Alert showIcon>
  You need to install <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> package first if you're using the default icons:
</Alert>

<InstallDependencies
  npm="$ npm install @ant-design/icons"
  yarn="$ yarn add @ant-design/icons"
  pnpm="$ pnpm install @ant-design/icons"
/>

## Import

```jsx | pure
import {ExactInput} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property        | Description                                      | Type                                                                                          | Default              |
|-----------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------|----------------------|
| clazzPrefix     | The CSS class prefix of the component            | `string`                                                                                      | `'abp-exact-input'`  |
| addonPos        | The position of the addon                        | `'before' \| 'after' \| false`                                                                | `'after'`            |
| compactAddon    | Whether to use compact mode for the addon        | `boolean`                                                                                     | `true`               |
| checkable       | Whether to show the checkbox or not              | `boolean`                                                                                     | `true`               |
| checkProps      | The properties of checkbox for addon             | `AddonCheckProps`                                                                             | -                    |
| tooltipCtrl     | Whether to use Tooltip                           | `boolean`                                                                                     | -                    |
| tooltipProps    | The props of Antd Tooltip                        | `Omit<TooltipProps, 'title'>`                                                                 | -                    |
| locale          | The locale of the component, e.g. 'en_US'        | `string`                                                                                      | -                    |
| localeProps     | The props of locale                              | `IntlLocaleProps`                                                                             | -                    |

> Note: Other properties are inherited from AddonInput component.
