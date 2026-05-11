---
title: SortableList
toc: content
order: 19
---

## 組件說明

SortableList, 是一個可以為 Ant `ProFormList` 增加排序能力的包裝組件。

## 導入組件

```tsx | pure
import {SortableList} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性                 | 說明                  | 類型                | 預設值                   |
|--------------------|---------------------|-------------------|-----------------------|
| clazzPrefix        | 組件的 CSS 類名前綴        | `string`          | `'abp-sortable-list'` |
| allowTopBottom     | 是否允許移動到頂部和底部        | `boolean`         | `true`                |
| allowUpDown        | 是否允許向上和向下移動         | `boolean`         | `true`                |
| allowDefaultAction | 是否允許默認動作（複製和刪除）     | `boolean`         | `true`                |
| locale             | 組件的語言, e.g. 'zh_TW' | `string`          | -                     |
| localeProps        | 多語言屬性               | `IntlLocaleProps` | -                     |

> 注意: 其他屬性繼承自 ProFormList 組件。
