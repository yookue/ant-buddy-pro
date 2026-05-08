---
title: SpaceBound
toc: content
order: 50
---

## 組件說明

與 [Ant Design](https://ant.design) 的 [Space](https://ant.design/components/space) 組件類似，`SpaceBound` 用於提供內間距包裹子組件。
但不同的是，`Space` 用於間隔兩個或兩個以上的組件，`SpaceBound` 可用於間隔任意數量的子組件，哪怕只有壹個子組件。

## 導入組件

```jsx | pure
import {SpaceBound} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 描述              | 類型                    | 預設值                 |
|----------------|-----------------|-----------------------|---------------------|
| clazzPrefix    | 組件的 CSS 類名前綴    | `string`              | `'abp-space-bound'` |
| containerClazz | 容器 div 的 CSS 類名 | `string`              | -                   |
| containerStyle | 容器 div 的 CSS 樣式 | `React.CSSProperties` | -                   |
| boundBorder    | 外邊界是否有邊框        | `boolean`             | -                   |
| boundPad       | 外邊框是否填充內邊距      | `boolean`             | `true`              |
| widthBlock     | 是否匹配父節點的寬度      | `boolean`             | -                   |

> 注意: 其他屬性繼承自 Ant Design 的 <a href="https://ant.design/components/space" target="_blank">Space</a> 組件。
