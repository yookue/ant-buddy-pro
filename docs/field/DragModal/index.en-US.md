---
title: DragModal
toc: content
order: 30
---

## Description

DragModal component, can display a modal dialog with draggable ability.

## Import

```jsx | pure
import {DragModal} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property       | Description                           | Type              | Default                                  |
|----------------|---------------------------------------|-------------------|------------------------------------------|
| clazzPrefix    | The CSS class prefix of the component | `string`          | `'abp-drag-modal'`                       |
| draggable      | Whether the modal is draggable or not | `boolean`         | `true`                                   |
| draggableBound | The bounds of the draggable area      | `DraggableBounds` | `{left: 0, top: 0, bottom: 0, right: 0}` |

> Note: Other properties are inherited from Ant Design's <a href="https://ant.design/components/modal" target="_blank">Modal</a> component.
