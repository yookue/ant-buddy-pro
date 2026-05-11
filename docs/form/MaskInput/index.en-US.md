---
title: MaskInput
toc: content
order: 65
---

## Description

MaskInput, provides a text input box with regular expression validation capability.

## Import

```tsx | pure
import {MaskInput} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property        | Description                                                  | Type                                                                                          | Default              |
|-----------------|--------------------------------------------------------------|-----------------------------------------------------------------------------------------------|----------------------|
| clazzPrefix     | The CSS class prefix of the component                        | `string`                                                                                      | `'abp-mask-input'`   |
| pattern         | The allowed regex pattern, either is considered as valid     | `RegExp \| RegExp[]`                                                                          | -                    |
| proField        | Whether to use ProFormField instead of Antd                  | `boolean`                                                                                     | `true`               |
