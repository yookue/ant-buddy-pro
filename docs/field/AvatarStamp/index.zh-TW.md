---
title: AvatarStamp
toc: content
order: 1
---

## 組件說明

AvatarStamp 是一個可以顯示帶角標的頭像控件。

## 導入組件

```tsx | pure
import {AvatarStamp} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 描述                  | 類型                                                         | 預設值                  |
|----------------|---------------------|------------------------------------------------------------|----------------------|
| clazzPrefix    | 組件的 CSS 類名前綴        | `string`                                                   | `'abp-avatar-stamp'` |
| containerClazz | 容器 div 的 CSS 類名     | `string`                                                   | -                    |
| containerStyle | 容器 div 的 CSS 樣式     | `React.CSSProperties`                                      | -                    |
| addon          | 附加節點                | `React.ReactNode \| (() => React.ReactNode \| undefined)`  | -                    |
| addonClazz     | 包裹附加節點 div 的 CSS 類名 | `string`                                                   | -                    |
| addonStyle     | 包裹附加節點 div 的 CSS 樣式 | `React.CSSProperties`                                      | -                    |
| offset         | 包裹附加節點 div 的偏移，單位像素 | `[number, number]`                                         | -                    |
| placement      | 角標的位置               | `'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight'` | `'bottomRight'`      |

> 註：其他屬性繼承自 Ant Design 的 <a href="https://ant.design/components/avatar" target="_blank">Avatar</a> 組件。
