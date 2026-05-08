---
title: CountField
toc: content
order: 20
---

## Description

CountField component, can display a field with a count number.

## Import

```jsx | pure
import {CountField} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                                  | Type                                                                                                        | Default             |
|----------------|----------------------------------------------|-------------------------------------------------------------------------------------------------------------|---------------------|
| clazzPrefix    | The CSS class prefix of the component        | `string`                                                                                                    | `'abp-count-field'` |
| containerClazz | The CSS class name of the container div      | `string`                                                                                                    | -                   |
| containerStyle | The CSS style of the container div           | `React.CSSProperties`                                                                                       | -                   |
| field          | The field element                            | `React.ReactNode \| (() => React.ReactNode \| undefined)`                                                   | -                   |
| count          | The thumbs count                             | `number`                                                                                                    | `0`                 |
| countProps     | The props of the count                       | `Omit<BadgeProps, 'children' \| 'color' \| 'count' \| 'dot' \| 'showZero' \| 'size' \| 'status' \| 'text'>` | -                   |
| layout         | The layout of the label and the field        | `'horizontal' \| 'vertical'`                                                                                | `'horizontal'`      |
| showCount      | Whether to show the count or not             | `boolean`                                                                                                   | `true`              |
| spaceSize      | The space size                               | `SpaceSize`                                                                                                 | -                   |
| tooltipCtrl    | Whether to use Tooltip                       | `boolean`                                                                                                   | -                   |
| tooltipProps   | The props of Antd Tooltip                    | `TooltipProps`                                                                                              | -                   |
| onChange       | The callback function when the count changed | `(count?: number) => void`                                                                                  | -                   |
| showZero       | Whether to show zero count                   | `boolean`                                                                                                   | `true`              |
