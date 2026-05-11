---
title: DivideSelect
toc: content
order: 4
---

## Description

DivideSelect, provides a capability that displaying the label and value of options into two parts.

## Import

```tsx | pure
import {DivideSelect} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property            | Description                                                                     | Type                                                      | Default               |
|---------------------|---------------------------------------------------------------------------------|-----------------------------------------------------------|-----------------------|
| clazzPrefix         | The CSS class prefix of the component                                           | `string`                                                  | `'abp-divide-select'` |
| optionClazz         | The CSS class name of the select option div                                     | `string`                                                  | -                     |
| optionStyle         | The CSS style of the option item div                                            | `React.CSSProperties`                                     | -                     |
| optionBeforeClazz   | The CSS class name of the option item before                                    | `string`                                                  | -                     |
| optionBeforeStyle   | The CSS style of the option item before                                         | `React.CSSProperties`                                     | -                     |
| optionBeforeContent | The content of the option item before                                           | `'label' \| 'value' \| 'code' \| false`                   | `'label'`             |
| optionBeforeRender  | The render of the option item before                                            | `(dom?: React.ReactNode) => React.ReactNode \| undefined` | -                     |
| optionAfterClazz    | The CSS class name of the option item after                                     | `string`                                                  | -                     |
| optionAfterStyle    | The CSS style of the option item after                                          | `React.CSSProperties`                                     | -                     |
| optionAfterContent  | The content of the option item after                                            | `'label' \| 'value' \| 'code' \| false`                   | `'value'`             |
| optionAfterRender   | The render of the option item after                                             | `(dom?: React.ReactNode) => React.ReactNode \| undefined` | -                     |
| requestOptionPlace  | Whether to keep the `options` or `valueEnum` data when using the `request` data | `'before' \| 'after' \| 'override' \| false`              | -                     |
| proField            | Whether to use ProFormField instead of Antd                                     | `boolean`                                                 | `true`                |
| presetStyle         | The preset style of the component                                               | `'before-prior' \| 'after-prior' \| false`                | `'before-prior'`      |
