---
title: CipherStrength
toc: content
---

## 組件說明

CipherStrength，是一個可以通過進度條和文字來顯示密碼強度的組件。

## 導入組件

```jsx | pure
import {CipherStrength} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 說明                  | 類型                             | 預設值                     |
|----------------|---------------------|--------------------------------|-------------------------|
| clazzPrefix    | 組件的 CSS 類名前綴        | `string`                       | `'abp-cipher-strength'` |
| containerClazz | 容器 div 的 CSS 類名     | `string`                       | -                       |
| containerStyle | 容器 div 的 CSS 樣式     | `React.CSSProperties`          | -                       |
| watchField     | 要監聽的字段名             | `string`                       | `'password'`            |
| progressClazz  | 進度條 div 的 CSS 類名    | `string`                       | -                       |
| progressStyle  | 進度條 div 的 CSS 樣式    | `React.CSSProperties`          | -                       |
| captionClazz   | 標題 div 的 CSS 類名     | `string`                       | -                       |
| captionStyle   | 標題 div 的 CSS 樣式     | `React.CSSProperties`          | -                       |
| captionPos     | 標題位置                | `'before' \| 'after' \| false` | `'after'`               |
| colorProps     | 顏色屬性                | `StrokeColorProps`             | -                       |
| widthBlock     | 是否匹配父節點的寬度          | `boolean`                      | -                       |
| locale         | 組件的語言, e.g. 'zh_TW' | `string`                       | -                       |
| localeProps    | 多語言屬性               | `IntlLocaleProps`              | -                       |
