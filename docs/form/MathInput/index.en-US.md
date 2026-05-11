---
title: MathInput
toc: content
order: 70
---

## Description

MathInput, provides a text input-alike box with math capability.

## Import

```tsx | pure
import {MathInput} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property        | Description                                                  | Type                                                                                          | Default              |
|-----------------|--------------------------------------------------------------|-----------------------------------------------------------------------------------------------|----------------------|
| clazzPrefix     | The CSS class prefix of the component                        | `string`                                                                                      | `'abp-math-input'`   |
| containerClazz  | The CSS class name of the container div                      | `string`                                                                                      | -                    |
| containerStyle  | The CSS style of the container div                           | `React.CSSProperties`                                                                         | -                    |
| mathOptions     | The options of the math field                                | `Partial<MathfieldOptions>`                                                                   | -                    |
| validation      | Whether to use validate value by rules                       | `boolean`                                                                                     | `true`               |
| onChange        | The callback function when the value changed                 | `(value?: string) => void`                                                                    | -                    |
| proField        | Whether to use ProFormField instead of Antd                  | `boolean`                                                                                     | -                    |
| locale          | The locale of the component, e.g. 'en_US'                    | `string`                                                                                      | -                    |
| localeProps     | The props of locale                                          | `IntlLocaleProps`                                                                             | -                    |
| value           | The value of the input                                       | `string`                                                                                      | -                    |
