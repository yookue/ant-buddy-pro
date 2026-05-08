---
title: DragModal
toc: content
---

## 組件說明

DragModal 用於顯示壹個可拖動的模態對話框。

## 導入組件

```jsx | pure
import {DragModal} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 描述           | 類型                | 預設值                                      |
|----------------|--------------|-------------------|------------------------------------------|
| clazzPrefix    | 組件的 CSS 類名前綴 | `string`          | `'abp-drag-modal'`                       |
| draggable      | 模態對話框是否可拖動   | `boolean`         | `true`                                   |
| draggableBound | 可拖動區域的邊界     | `DraggableBounds` | `{left: 0, top: 0, bottom: 0, right: 0}` |

> 註：其他屬性繼承自 Ant Design 的 <a href="https://ant.design/components/modal" target="_blank">Modal</a> 組件。
