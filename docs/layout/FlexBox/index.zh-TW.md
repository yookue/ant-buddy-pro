---
title: FlexBox
toc: content
order: 20
---

## 組件說明

FlexBox 組件，一個用於對齊的彈性布局容器。

## 導入組件

```tsx | pure
import {FlexBox} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 描述                                  | 類型                                                             | 預設值              |
|----------------|-------------------------------------|----------------------------------------------------------------|------------------|
| clazzPrefix    | 組件的 CSS 類名前綴                        | `string`                                                       | `'abp-flex-box'` |
| containerClazz | 容器 div 的 CSS 類名                     | `string`                                                       | -                |
| containerStyle | 容器 div 的 CSS 樣式                     | `React.CSSProperties`                                          | -                |
| justifyContent | 內部元素在主軸上的分配空間的方式                    | `React.CSSProperties['justifyContent']`                        | -                |
| justifyItems   | 內部元素在主軸上的對齊方式                       | `React.CSSProperties['justifyItems']`                          | -                |
| alignContent   | 內部元素在交叉軸上的分配空間的方式                   | `React.CSSProperties['alignContent']`                          | -                |
| alignItems     | 內部元素在交叉軸上的對齊方式                      | `React.CSSProperties['alignItems']`                            | -                |
| flex           | 內部元素如何增大或縮小以適應容器中可用的空間              | `React.CSSProperties['flex']`                                  | -                |
| flexBasis      | 內部元素在主軸方向上的初始大小                     | `React.CSSProperties['flexBasis']`                             | -                |
| flexDirection  | 內部元素在容器中的主軸方向                       | `React.CSSProperties['flexDirection']`                         | -                |
| flexFlow       | 屬性 flex-direction 和 flex-wrap 的簡寫形式 | `React.CSSProperties['flexFlow']`                              | -                |
| flexGrow       | 內部元素在主軸上的 flex 增長系數                 | `React.CSSProperties['flexGrow']`                              | -                |
| flexShrink     | 內部元素在主軸上的 flex 收縮系數                 | `React.CSSProperties['flexShrink']`                            | -                |
| flexWrap       | 內部元素是單行顯示還是多行顯示                     | `React.CSSProperties['flexWrap']`                              | -                |
| gap            | 行與列之間的間隙                            | `'small' \| 'middle' \| 'large' \| React.CSSProperties['gap']` | -                |
| boundBorder    | 是否顯示邊框                              | `boolean`                                                      | -                |
| boundShadow    | 是否顯示邊框陰影                            | `boolean`                                                      | -                |
