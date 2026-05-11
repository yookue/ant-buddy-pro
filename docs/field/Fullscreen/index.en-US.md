---
title: Fullscreen
toc: content
order: 6
---

## Description

Fullscreen, provides an icon with the ability to toggle fullscreen mode.

## Premise

> You need to install <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> package first if you're using the default icons:

<InstallDependencies
  npm="$ npm install @ant-design/icons"
  yarn="$ yarn add @ant-design/icons"
  pnpm="$ pnpm install @ant-design/icons"
/>

## Import

```tsx | pure
import {Fullscreen} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                                       | Type                                                      | Default                    |
|----------------|---------------------------------------------------|-----------------------------------------------------------|----------------------------|
| clazzPrefix    | The CSS class prefix of the component             | `string`                                                  | `'abp-fullscreen'`         |
| containerClazz | The CSS class name of the container span          | `string`                                                  | -                          |
| containerStyle | The CSS style of the container span               | `React.CSSProperties`                                     | -                          |
| onChange       | The callback function when the fullscreen changed | `(fullscreen?: boolean) => void`                          | -                          |
| triggerFor     | The target DOM element to toggle fullscreen       | `Element \| null \| (() => Element \| null \| undefined)` | `document.documentElement` |
| tooltipCtrl    | Whether to use Tooltip                            | `boolean`                                                 | -                          |
| tooltipProps   | The props of Antd Tooltip                         | `Omit<TooltipProps, 'title'>`                             | -                          |
| locale         | The locale of the component, e.g. 'en_US'         | `string`                                                  | -                          |
| localeProps    | The props of locale                               | `IntlLocaleProps`                                         | -                          |
