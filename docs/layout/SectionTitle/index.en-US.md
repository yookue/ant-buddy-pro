---
title: SectionTitle
toc: content
order: 45
---

## Description

SectionTitle component, displays a title bar and an ornament prefix, in order to separate page areas.

## Import

```jsx | pure
import {SectionTitle} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                                  | Type                                                             | Default               |
|----------------|----------------------------------------------|------------------------------------------------------------------|-----------------------|
| clazzPrefix    | The CSS class prefix of the component        | `string`                                                         | `'abp-section-title'` |
| containerClazz | The CSS class name of the container div      | `string`                                                         | -                     |
| containerStyle | The CSS style of the container div           | `React.CSSProperties`                                            | -                     |
| boundBorder    | Whether to border the bound or not           | `boolean`                                                        | `true`                |
| ornament       | The DOM of ornament div                      | `React.ReactNode`                                                | -                     |
| ornamentClazz  | The CSS class name of ornament div           | `string`                                                         | -                     |
| ornamentStyle  | The CSS style of ornament div                | `React.CSSProperties`                                            | -                     |
| ornamentPos    | The position of ornament div                 | `'before' \| 'after' \| false`                                   | `'before'`            |
| content        | The DOM of content div                       | `React.ReactNode`                                                | -                     |
| contentClazz   | The CSS class name of content div            | `string`                                                         | -                     |
| contentStyle   | The CSS style of content div                 | `React.CSSProperties`                                            | -                     |
| widthBlock     | Whether to match the width of parent element | `boolean`                                                        | -                     |
| presetStyle    | The preset style of the component            | `'default' \| 'success' \| 'info' \| 'warn' \| 'error' \| false` | `'default'`           |
