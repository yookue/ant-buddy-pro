---
title: ServerTuple
toc: content
order: 19
---

## Description

ServerTuple, provides a capability that displaying a text input box with a number input box, for server host and port.

## Import

```tsx | pure
import {ServerTuple} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                                  | Type                  | Default              |
|----------------|----------------------------------------------|-----------------------|----------------------|
| clazzPrefix    | The CSS class prefix of the component        | `string`              | `'abp-server-tuple'` |
| containerClazz | The CSS class name of the container div      | `string`              | -                    |
| containerStyle | The CSS style of the container div           | `React.CSSProperties` | -                    |
| hostProps      | The props of the host address                | `HostInputProps`      | -                    |
| portProps      | The props of the port number                 | `PortInputProps`      | -                    |
| widthBlock     | Whether to match the width of parent element | `boolean`             | `true`               |
| proField       | Whether to use ProFormField instead of Antd  | `boolean`             | `true`               |
| locale         | The locale of the component, e.g. 'en_US'    | `string`              | -                    |
| name           | The name attribute from HTML input           | `string`              | -                    |
| label          | The label attribute from HTML option         | `string`              | -                    |
