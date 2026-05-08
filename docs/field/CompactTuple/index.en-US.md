---
title: CompactTuple
toc: content
---

## Description

CompactTuple component, can display a field and an addon under a compact space.

The typical scenario is, displaying a date picker of identify with a switch/checkbox, which indicates the date is infinite.

In this case, the date picker has borders while the switch/checkbox doesn't. This component could border the switch/checkbox, to unify the UI style.

## Import

```jsx | pure
import {CompactTuple} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property          | Description                                         | Type                                                      | Default               |
|-------------------|-----------------------------------------------------|-----------------------------------------------------------|-----------------------|
| clazzPrefix       | The CSS class prefix of the component               | `string`                                                  | `'abp-compact-tuple'` |
| containerClazz    | The CSS class name of the container div             | `string`                                                  | -                     |
| containerStyle    | The CSS style of the container div                  | `React.CSSProperties`                                     | -                     |
| spaceCompactProps | The props of the compact space                      | `SpaceCompactProps`                                       | `{block: true}`       |
| field             | The field element                                   | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                     |
| fieldClazz        | The CSS class name of the field wrapper div         | `string`                                                  | -                     |
| fieldStyle        | The CSS style of the field wrapper div              | `React.CSSProperties`                                     | -                     |
| fieldBorder       | Whether to border the field element or not          | `boolean`                                                 | -                     |
| addon             | The addon element                                   | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                     |
| addonClazz        | The CSS class name of the addon div                 | `string`                                                  | -                     |
| addonStyle        | The CSS style of the addon div                      | `React.CSSProperties`                                     | -                     |
| addonBorder       | Whether to border the addon element or not          | `boolean`                                                 | -                     |
| addonMarginLeft   | The margin left of the addon element                | `boolean \| number`                                       | -                     |
| addonMarginRight  | The margin right of the addon element               | `boolean \| number`                                       | -                     |
| addonPos          | The position of addon                               | `'before' \| 'after' \| false`                            | `'after'`             |
| readonlyBorder    | Whether to render borders when under readonly mode  | `boolean`                                                 | `false`               |
| widthBlock        | Whether to match the width of parent element or not | `boolean`                                                 | -                     |
| presetStyle       | The preset style of the component                   | `'field-prior' \| 'addon-prior' \| false`                 | `'field-prior'`       |
