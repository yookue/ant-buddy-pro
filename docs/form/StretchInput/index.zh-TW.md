---
title: StretchInput
toc: content
order: 19
---

## 組件說明

StretchInput，提供了一個可以動態拉伸的文本框。

典型的應用場景是，顯示一個小的搜索框或搜索圖標，當點擊它時拉伸顯示它。

## 導入組件

```tsx | pure
import {StretchInput} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性              | 說明                   | 類型                            | 預設值                   |
|-----------------|----------------------|-------------------------------|-----------------------|
| clazzPrefix     | 組件的 CSS 類名前綴         | `string`                      | `'abp-stretch-input'` |
| miniature       | 文本框折疊（失去焦點）時的替代節點內容  | `React.ReactNode`             | -                     |
| stretchClazz    | 拉伸狀態時的 CSS 類名        | `string`                      | -                     |
| stretchStyle    | 拉伸狀態時的 CSS 樣式        | `React.CSSProperties`         | -                     |
| triggerType     | 當需要拉伸已折疊的 DOM 時的觸發方式 | `'click' \| 'hover'`          | `'click'`             |
| proField        | 是否使用 ProFormField 控件 | `boolean`                     | -                     |
| onStretchChange | 拉伸狀態變化時的回調函數         | `(stretch?: boolean) => void` | -                     |
