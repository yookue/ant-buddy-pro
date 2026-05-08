---
title: BadgeRibbon
toc: content
---

## Description

BadgeRibbon component, can display a ribbon.

Similar to [Badge](https://ant.design/components/badge/#components-badge-demo-ribbbon) of [Ant Design](https://ant.design), the most difference is that, `BadgeRibbon` provides a choice to render empty `text` or not.

## Import

```jsx | pure
import {BadgeRibbon} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                                 | Type                  | Default              |
|----------------|---------------------------------------------|-----------------------|----------------------|
| clazzPrefix    | The CSS class prefix of the component       | `string`              | `'abp-badge-ribbon'` |
| containerClazz | The CSS class name of the container div     | `string`              | -                    |
| containerStyle | The CSS style of the container div          | `React.CSSProperties` | -                    |
| transparent    | Whether to use the transparent color or not | `boolean`             | -                    |

> Note: Other properties are inherited from Ant Design's <a href="https://ant.design/components/badge" target="_blank">Badge.Ribbon</a> component.
