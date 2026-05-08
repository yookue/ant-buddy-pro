---
title: CornerStamp
toc: content
order: 15
---

## Description

CornerStamp component, can display a corner stamp.

## Import

```jsx | pure
import {CornerStamp} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                                 | Type                                                       | Default              |
|----------------|---------------------------------------------|------------------------------------------------------------|----------------------|
| clazzPrefix    | The CSS class prefix of the component       | `string`                                                   | `'abp-corner-stamp'` |
| containerClazz | The CSS class name of the container div     | `string`                                                   | -                    |
| containerStyle | The CSS style of the container div          | `React.CSSProperties`                                      | -                    |
| field          | The field element                           | `React.ReactNode \| (() => React.ReactNode \| undefined)`  | -                    |
| fieldClazz     | The CSS class name of the field wrapper div | `string`                                                   | -                    |
| fieldStyle     | The CSS style of the field wrapper div      | `React.CSSProperties`                                      | -                    |
| addon          | The addon element                           | `React.ReactNode \| (() => React.ReactNode \| undefined)`  | -                    |
| addonClazz     | The CSS class name of the addon wrapper div | `string`                                                   | -                    |
| addonStyle     | The CSS style of the addon wrapper div      | `React.CSSProperties`                                      | -                    |
| rotateAddon    | Whether to rotate the addon element or not  | `boolean`                                                  | `true`               |
| placement      | The placement of the stamp                  | `'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight'` | `'topRight'`         |
| size           | The side length of the component            | `number`                                                   | `16`                 |
| zIndex         | The z-index of the component                | `number`                                                   | `9`                  |
| color          | The color of the corner stamp               | `string`                                                   | `'green'`            |
