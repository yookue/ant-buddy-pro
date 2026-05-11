---
title: ThumbTuple
toc: content
order: 75
---

## 組件說明

ThumbTuple 用於顯示兩個拇指圖標和計數。

典型的應用場景是，顯示兩個拇指，分別為 `喜歡` 和 `不喜歡`。

## 導入組件

```tsx | pure
import {ThumbTuple} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性                | 描述                  | 類型                                              | 預設值                  |
|-------------------|---------------------|-------------------------------------------------|----------------------|
| clazzPrefix       | 組件的 CSS 類名前綴        | `string`                                        | `'abp-thumb-tuple'`  |
| containerClazz    | 容器 div 的 CSS 類名     | `string`                                        | -                    |
| containerStyle    | 容器 div 的 CSS 樣式     | `React.CSSProperties`                           | -                    |
| spaceProps        | 間距的屬性               | `SpaceProps`                                    | -                    |
| thumbLikeProps    | 喜歡的屬性               | `Omit<ThumbToggleProps, 'ref' \| 'actionType'>` | -                    |
| thumbDislikeProps | 不喜歡的屬性              | `Omit<ThumbToggleProps, 'ref' \| 'actionType'>` | -                    |
