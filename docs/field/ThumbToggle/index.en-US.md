---
title: ThumbToggle
toc: content
order: 20
---

## Description

ThumbToggle component, can display a thumb with toggle capability, and a count number.

## Import

```tsx | pure
import {ThumbToggle} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                                                   | Type                                                                                                     | Default              |
|----------------|---------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|----------------------|
| clazzPrefix    | The CSS class prefix of the component                         | `string`                                                                                                 | `'abp-thumb-toggle'` |
| containerClazz | The CSS class name of the container div                       | `string`                                                                                                 | -                    |
| containerStyle | The CSS style of the container div                            | `React.CSSProperties`                                                                                    | -                    |
| actionType     | The action type                                               | `'like' \| 'dislike' \| 'favorite'`                                                                      | `'like'`             |
| checkable      | Whether can checked the icon or not                           | `boolean`                                                                                                | `false`              |
| checkedClazz   | The CSS class name of the icon when checked                   | `string`                                                                                                 | -                    |
| checkedStyle   | The CSS style of the icon when checked                        | `React.CSSProperties`                                                                                    | -                    |
| uncheckedClazz | The CSS class name of the icon when unchecked                 | `string`                                                                                                 | -                    |
| uncheckedStyle | The CSS style of the icon when unchecked                      | `React.CSSProperties`                                                                                    | -                    |
| count          | The thumbs count                                              | `number`                                                                                                 | `0`                  |
| countProps     | The props of count                                            | `Omit<BadgeProps, 'color' \| 'count' \| 'dot' \| 'showZero' \| 'size' \| 'status' \| 'text'>`            | -                    |
| layout         | The layout of the icon and the field                          | `'horizontal' \| 'vertical'`                                                                             | `'horizontal'`       |
| showCount      | Whether to show the count or not                              | `boolean`                                                                                                | `true`               |
| tooltipCtrl    | Whether to use Tooltip                                        | `boolean`                                                                                                | -                    |
| tooltipProps   | The props of Antd Tooltip                                     | `Omit<TooltipProps, 'title'>`                                                                            | -                    |
| onChange       | The callback function when the checked state or count changed | `(checked?: boolean, count?: number) => void`                                                            | -                    |
| onToggle       | The trigger function for updating the count                   | `(checked?: boolean, count?: number) => boolean \| number \| void \| Promise<boolean \| number \| void>` | -                    |
| locale         | The locale of the component, e.g. 'en_US'                     | `string`                                                                                                 | -                    |
| localeProps    | The props of locale                                           | `IntlLocaleProps`                                                                                        | -                    |
| checked        | Whether the icon is checked                                   | `boolean`                                                                                                | -                    |
| defaultChecked | The default checked state                                     | `boolean`                                                                                                | -                    |
| showZero       | Whether to show zero count                                    | `boolean`                                                                                                | `true`               |

## Methods

The following methods can be accessed via `ref`:

| Method        | Parameters         | Description            |
|---------------|--------------------|------------------------|
| isCheckable   | None               | Check if checkable     |
| isChecked     | None               | Check if checked       |
| getCount      | None               | Get current count      |
| setCheckable  | checkable: boolean | Set checkable state    |
| setChecked    | checked: boolean   | Set checked state      |
| setCount      | count: number      | Set count value        |
| increaseCount | None               | Increase count (+1)    |
| decreaseCount | None               | Decrease count (-1)    |
| toggleChecked | None               | Toggle checked (async) |
