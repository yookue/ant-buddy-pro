---
title: LabelField
toc: content
order: 12
---

## Description

LabelField component, can display a field with a label.

## Import

```tsx | pure
import {LabelField} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property           | Description                                                | Type                                                      | Default                                  |
|--------------------|------------------------------------------------------------|-----------------------------------------------------------|------------------------------------------|
| clazzPrefix        | The CSS class prefix of the component                      | `string`                                                  | `'abp-label-field'`                      |
| containerClazz     | The CSS class name of the container div                    | `string`                                                  | -                                        |
| containerStyle     | The CSS style of the container div                         | `React.CSSProperties`                                     | -                                        |
| layout             | The layout of the label and the field                      | `'horizontal' \| 'vertical'`                              | `'horizontal'`                           |
| label              | The label element                                          | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                                        |
| labelClazz         | The CSS class name of the label                            | `string`                                                  | -                                        |
| labelStyle         | The CSS style of the label                                 | `React.CSSProperties`                                     | -                                        |
| colon              | The colon between the label and the content                | `React.ReactNode`                                         | `':'`                                    |
| labelColon         | Whether to display the colon                               | `boolean`                                                 | `true if context layout is 'horizontal'` |
| field              | The field element                                          | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                                        |
| fieldClazz         | The CSS class name of the field                            | `string`                                                  | -                                        |
| fieldStyle         | The CSS style of the field                                 | `React.CSSProperties`                                     | -                                        |
| spaceSize          | The space size                                             | `SpaceSize`                                               | -                                        |
| required           | Whether is required field or not                           | `boolean`                                                 | -                                        |
| tooltip            | The content of tooltip                                     | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                                        |
| widthBlock         | Whether to match the width of parent element or not        | `boolean`                                                 | -                                        |
| hideLabelWhenEmpty | Whether to hide the label (and delimiter) when it is empty | `boolean`                                                 | -                                        |
| hideFieldWhenEmpty | Whether to hide the field when it is empty                 | `boolean`                                                 | -                                        |
| presetStyle        | The preset style of the component                          | `'label-prior' \| 'field-prior' \| false`                 | `'field-prior'`                          |
