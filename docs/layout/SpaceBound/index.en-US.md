---
title: SpaceBound
toc: content
order: 19
---

## Description

Similar to [Space](https://ant.design/components/space) of [Ant Design](https://ant.design), `SpaceBound` provides padding spaces.
The difference is that, the `Space` provides spaces between more than one component, the `SpaceBound` wraps it's child/children component(s), even there is a single child.

## Import

```tsx | pure
import {SpaceBound} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                                    | Type                  | Default              |
|----------------|------------------------------------------------|-----------------------|----------------------|
| clazzPrefix    | The CSS class prefix of the component          | `string`              | `'abp-space-bound'`  |
| containerClazz | The CSS class name of the container div        | `string`              | -                    |
| containerStyle | The CSS style of the container div             | `React.CSSProperties` | -                    |
| boundBorder    | Whether to border the bound or not             | `boolean`             | -                    |
| boundPad       | Whether to pad the bound or not                | `boolean`             | `true`               |
| widthBlock     | Whether to match the width of parent element   | `boolean`             | -                    |

> Note: Other properties are inherited from Ant Design's <a href="https://ant.design/components/space" target="_blank">Space</a> component.
