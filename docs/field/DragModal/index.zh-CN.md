---
title: DragModal
toc: content
---

## 组件说明

DragModal 用于显示一个可拖动的模态对话框。

## 导入组件

```jsx | pure
import {DragModal} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 描述           | 类型                | 默认值                                      |
|----------------|--------------|-------------------|------------------------------------------|
| clazzPrefix    | 组件的 CSS 类名前缀 | `string`          | `'abp-drag-modal'`                       |
| draggable      | 模态对话框是否可拖动   | `boolean`         | `true`                                   |
| draggableBound | 可拖动区域的边界     | `DraggableBounds` | `{left: 0, top: 0, bottom: 0, right: 0}` |

> 注：其他属性继承自 Ant Design 的 <a href="https://ant.design/components/modal" target="_blank">Modal</a> 组件。
