---
title: CardTabs
toc: content
---

## 組件說明

與 [Ant Design](https://ant.design) 的 [Tabs](https://ant.design/components/tabs) 組件類似，但 `CardTabs` 采用了卡片樣式和邊框。

## 導入組件

```jsx | pure
import {CardTabs} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 描述              | 類型                                                                                      | 預設值               |
|----------------|-----------------|-----------------------------------------------------------------------------------------|-------------------|
| clazzPrefix    | 組件的 CSS 類名前綴    | `string`                                                                                | `'abp-card-tabs'` |
| containerClazz | 容器 div 的 CSS 類名 | `string`                                                                                | -                 |
| containerStyle | 容器 div 的 CSS 樣式 | `React.CSSProperties`                                                                   | -                 |
| tabBorder      | 是否顯示標簽的邊框       | `boolean`                                                                               | `true`            |
| tabPosition    | 標簽的位置           | `'top' \| 'right' \| 'bottom' \| 'left' \| 'top-end' \| 'bottom-end'`                   | `'top'`           |
| contentBorder  | 是否顯示內容區的邊框      | `boolean`                                                                               | `true`            |
| inkBar         | 是否顯示活躍指示條       | `boolean`                                                                               | `true`            |
| size           | 標簽的大小           | `'small' \| 'middle' \| 'large' \| 'extra-small'`                                       | `'middle'`        |
| presetStyle    | 預設樣式            | `'padding-xs' \| 'padding-sm' \| 'padding-md' \| 'padding-lg' \| 'padding-xl' \| false` | `'padding-md'`    |

> 注意: 其他屬性繼承自 Ant Design 的 <a href="https://ant.design/components/tabs" target="_blank">Tabs</a> 組件。
