---
title: FallbackImage
toc: content
---

## 組件說明

FallbackImage 提供了一個加載圖片備用源的選項，用以在圖片常規源無法加載的時候顯示。

## 導入組件

```jsx | pure
import {FallbackImage} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.tsx"></code>

## 組件屬性

| 屬性          | 描述           | 類型                                                                                                      | 預設值                    |
|-------------|--------------|---------------------------------------------------------------------------------------------------------|------------------------|
| clazzPrefix | 組件的 CSS 類名前綴 | `string`                                                                                                | `'abp-fallback-image'` |
| src         | 圖片源          | `string \| Promise<string \| undefined> \| (() => string \| undefined \| Promise<string \| undefined>)` | -                      |
| fallback    | 備用圖片源        | `string \| Promise<string \| undefined> \| (() => string \| undefined \| Promise<string \| undefined>)` | -                      |

> 註：其他屬性繼承自 rc-image 的 Image 組件。
