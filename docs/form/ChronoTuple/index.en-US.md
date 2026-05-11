---
title: ChronoTuple
toc: content
order: 20
---

## Description

ChronoTuple, provides a capability that displaying a number input box and a select box with chrono units, options come from [ChronoUnit](https://docs.oracle.com/javase/8/docs/api/java/time/temporal/ChronoUnit.html).

## Import

```tsx | pure
import {ChronoTuple} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                                  | Type                  | Default              |
|----------------|----------------------------------------------|-----------------------|----------------------|
| clazzPrefix    | The CSS class prefix of the component        | `string`              | `'abp-chrono-tuple'` |
| containerClazz | The CSS class name of the container div      | `string`              | -                    |
| containerStyle | The CSS style of the container div           | `React.CSSProperties` | -                    |
| digitProps     | The props of the digit component             | `ProFormDigitProps`   | -                    |
| selectProps    | The props of the select component            | `ChronoSelectProps`   | -                    |
| widthBlock     | Whether to match the width of parent element | `boolean`             | `true`               |
| proField       | Whether to use ProFormField instead of Antd  | `boolean`             | `true`               |
