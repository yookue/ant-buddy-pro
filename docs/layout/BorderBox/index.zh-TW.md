---
title: BorderBox
toc: content
order: 5
---

## 組件說明

BorderBox 可以顯示壹個帶邊框的控件。

## 導入組件

```tsx | pure
import {BorderBox} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 描述              | 類型                    | 預設值                |
|----------------|-----------------|-----------------------|--------------------|
| clazzPrefix    | 組件的 CSS 類名前綴    | `string`              | `'abp-border-box'` |
| containerClazz | 容器 div 的 CSS 類名 | `string`              | -                  |
| containerStyle | 容器 div 的 CSS 樣式 | `React.CSSProperties` | -                  |
| borderTop      | 頂部是否有邊框         | `boolean`             | `true`             |
| borderRight    | 右側是否有邊框         | `boolean`             | `true`             |
| borderBottom   | 底部是否有邊框         | `boolean`             | `true`             |
| borderLeft     | 左側是否有邊框         | `boolean`             | `true`             |
| boundShadow    | 是否顯示邊框陰影        | `boolean`             | -                  |
