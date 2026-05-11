---
title: PreviewImage
toc: content
order: 55
---

## 組件說明

PreviewImage 是壹個可顯示圖片預覽的組件，並且支持備用圖片源。

## 導入組件

```tsx | pure
import {PreviewImage} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性          | 描述           | 類型                                                                                                      | 預設值                   |
|-------------|--------------|---------------------------------------------------------------------------------------------------------|-----------------------|
| clazzPrefix | 組件的 CSS 類名前綴 | `string`                                                                                                | `'abp-preview-image'` |
| src         | 圖片源          | `string \| Promise<string \| undefined> \| (() => string \| undefined \| Promise<string \| undefined>)` | -                     |
| fallback    | 備用圖片源        | `string \| Promise<string \| undefined> \| (() => string \| undefined \| Promise<string \| undefined>)` | -                     |

> 註：其他屬性繼承自 Ant Design 的 <a href="https://ant.design/components/image" target="_blank">Image</a> 組件。
