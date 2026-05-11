---
title: ApartTitle
toc: content
order: 0
---

## Description

ApartTitle component, displays a title bar and an ornament icon, in order to separate page areas.

## Import

```tsx | pure
import {ApartTitle} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                                  | Type                                                                          | Default             |
|----------------|----------------------------------------------|-------------------------------------------------------------------------------|---------------------|
| clazzPrefix    | The CSS class prefix of the component        | `string`                                                                      | `'abp-apart-title'` |
| containerClazz | The CSS class name of the container div      | `string`                                                                      | -                   |
| containerStyle | The CSS style of the container div           | `React.CSSProperties`                                                         | -                   |
| ornament       | The DOM of ornament span                     | `React.ReactNode`                                                             | -                   |
| ornamentClazz  | The CSS class name of ornament span          | `string`                                                                      | -                   |
| ornamentStyle  | The CSS style of ornament span               | `React.CSSProperties`                                                         | -                   |
| ornamentPos    | The position of ornament span                | `'before' \| 'after' \| false`                                                | `'before'`          |
| content        | The DOM of content span                      | `React.ReactNode`                                                             | -                   |
| contentClazz   | The CSS class name of content span           | `string`                                                                      | -                   |
| contentStyle   | The CSS style of content span                | `React.CSSProperties`                                                         | -                   |
| boundBorder    | Whether to border the bound or not           | `boolean`                                                                     | `true`              |
| widthBlock     | Whether to match the width of parent element | `boolean`                                                                     | -                   |
| presetStyle    | The preset style of the component            | `'default' \| 'success' \| 'info' \| 'warn' \| 'error' \| 'classic' \| false` | `'default'`         |
