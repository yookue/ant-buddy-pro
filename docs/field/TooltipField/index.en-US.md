---
title: TooltipField
toc: content
---

## Description

TooltipField component, can display a field with a tooltip.

## Import

```jsx | pure
import {TooltipField} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                                 | Type                                                      | Default               |
|----------------|---------------------------------------------|-----------------------------------------------------------|-----------------------|
| clazzPrefix    | The CSS class prefix of the component       | `string`                                                  | `'abp-tooltip-field'` |
| containerClazz | The CSS class name of the container div     | `string`                                                  | -                     |
| containerStyle | The CSS style of the container div          | `React.CSSProperties`                                     | -                     |
| field          | The field element                           | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                     |
| fieldClazz     | The CSS class name of the field wrapper div | `string`                                                  | -                     |
| fieldStyle     | The CSS style of the field wrapper div      | `React.CSSProperties`                                     | -                     |
| tooltipCtrl    | Whether to use Tooltip                      | `boolean`                                                 | -                     |
| tooltipProps   | The props of Antd Tooltip                   | `TooltipProps`                                            | -                     |
| wrapContainer  | Whether to wrap the container div           | `boolean`                                                 | `true`                |
| wrapField      | Whether to wrap the field element           | `boolean`                                                 | `true`                |
