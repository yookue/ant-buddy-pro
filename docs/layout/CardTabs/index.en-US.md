---
title: CardTabs
toc: content
order: 3
---

## Description

Similar to [Tabs](https://ant.design/components/tabs) of [Ant Design](https://ant.design), but `CardTabs` with `card` style and borders.

## Import

```tsx | pure
import {CardTabs} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                             | Type                                                                                    | Default           |
|----------------|-----------------------------------------|-----------------------------------------------------------------------------------------|-------------------|
| clazzPrefix    | The CSS class prefix of the component   | `string`                                                                                | `'abp-card-tabs'` |
| containerClazz | The CSS class name of the container div | `string`                                                                                | -                 |
| containerStyle | The CSS style of the container div      | `React.CSSProperties`                                                                   | -                 |
| tabBorder      | Whether to display the tab border       | `boolean`                                                                               | `true`            |
| tabPlacement   | The position of the tabs                | `'top' \| 'top-end' \| 'bottom' \| 'bottom-end' \| 'start' \| 'end'`                    | `'top'`           |
| contentBorder  | Whether to display the content border   | `boolean`                                                                               | `true`            |
| inkBar         | Whether to display the ink bar          | `boolean`                                                                               | `true`            |
| size           | The size of the tabs                    | `'small' \| 'middle' \| 'large' \| 'extra-small'`                                       | `'middle'`        |
| presetStyle    | The preset style of the component       | `'padding-xs' \| 'padding-sm' \| 'padding-md' \| 'padding-lg' \| 'padding-xl' \| false` | `'padding-md'`    |

> Note: Other properties are inherited from Ant Design's <a href="https://ant.design/components/tabs" target="_blank">Tabs</a> component.
