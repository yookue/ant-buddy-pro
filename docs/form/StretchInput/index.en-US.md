---
title: StretchInput
toc: content
order: 19
---

## Description

StretchInput, provides a text input box with stretch capability when focus it.

The typical scenario is, displaying a small search box or an icon, and stretching it when click on it.

## Import

```tsx | pure
import {StretchInput} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property        | Description                                                  | Type                          | Default               |
|-----------------|--------------------------------------------------------------|-------------------------------|-----------------------|
| clazzPrefix     | The CSS class prefix of the component                        | `string`                      | `'abp-stretch-input'` |
| containerClazz  | The CSS class name of the container div                      | `string`                      | -                     |
| containerStyle  | The CSS style of the container div                           | `React.CSSProperties`         | -                     |
| miniature       | The instead DOM when the input box is collapsed (lost focus) | `React.ReactNode`             | -                     |
| stretchClazz    | The CSS class name when stretched                            | `string`                      | -                     |
| stretchStyle    | The CSS style when stretched                                 | `React.CSSProperties`         | -                     |
| triggerType     | The trigger type when stretch the collapsed DOM              | `'click' \| 'hover'`          | `'click'`             |
| proField        | Whether to use ProFormField instead of Antd                  | `boolean`                     | -                     |
| onStretchChange | The callback function when stretch changed                   | `(stretch?: boolean) => void` | -                     |
