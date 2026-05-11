---
title: BadgeRibbon
toc: content
order: 2
---

## 組件說明

BadgeRibbon 組件可以顯示壹個緞帶。

與 [Ant Design](https://ant.design) 的 [Badge](https://ant.design/components/badge/#components-badge-demo-ribbbon) 類似，但不同的是，`BadgeRibbon` 提供了壹個選項，當屬性 `text` 為空時是否渲染緞帶。

## 導入組件

```tsx | pure
import {BadgeRibbon} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 描述              | 類型                    | 預設值                  |
|----------------|-----------------|-----------------------|----------------------|
| clazzPrefix    | 組件的 CSS 類名前綴    | `string`              | `'abp-badge-ribbon'` |
| containerClazz | 容器 div 的 CSS 類名 | `string`              | -                    |
| containerStyle | 容器 div 的 CSS 樣式 | `React.CSSProperties` | -                    |
| transparent    | 是否透明色           | `boolean`             | -                    |

> 註：其他屬性繼承自 Ant Design 的 <a href="https://ant.design/components/badge" target="_blank">Badge.Ribbon</a> 組件。
