---
title: RefreshImage
toc: content
order: 18
---

## 組件說明

RefreshImage 是一個可點擊刷新的圖片組件。

典型的場景是配合圖形驗證碼使用，尤其是服務端不使用 Node.js 而生成圖形驗證碼的情況。

## 導入組件

```tsx | pure
import {RefreshImage} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 描述                 | 類型                                                                                                      | 預設值                   |
|----------------|--------------------|---------------------------------------------------------------------------------------------------------|-----------------------|
| clazzPrefix    | 組件的 CSS 類名前綴       | `string`                                                                                                | `'abp-refresh-image'` |
| containerClazz | 容器 div 的 CSS 類名    | `string`                                                                                                | -                     |
| containerStyle | 容器 div 的 CSS 樣式    | `React.CSSProperties`                                                                                   | -                     |
| handCursor     | 是否手型鼠標指針樣式         | `boolean`                                                                                               | `true`                |
| src            | 圖片源                | `string \| Promise<string \| undefined> \| (() => string \| undefined \| Promise<string \| undefined>)` | -                     |
| fallback       | 備用圖片源              | `string \| Promise<string \| undefined> \| (() => string \| undefined \| Promise<string \| undefined>)` | -                     |
| onRefresh      | 圖片刷新後的回調函數         | `(currentSrc?: string, previousSrc?: string) => void`                                                   | -                     |
| locale         | 組件的語言，e.g. 'zh_TW' | `string`                                                                                                | -                     |
| localeProps    | 多語言屬性              | `IntlLocaleProps`                                                                                       | -                     |

> 註：其他屬性繼承自 Ant Design 的 <a href="https://ant.design/components/image" target="_blank">Image</a> 組件。

## 組件方法

通過 `ref` 可以訪問以下方法：

| 方法名     | 參數 | 描述    |
|---------|----|-------|
| refresh | 無  | 刷新圖片源 |
