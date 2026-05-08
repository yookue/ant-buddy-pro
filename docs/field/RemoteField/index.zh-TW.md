---
title: RemoteField
toc: content
order: 65
---

## 組件說明

RemoteField 可以使用遠程數據渲染壹個組件。

此訴求產生的原因是，並不是所有的 [Ant Design](https://ant.design) 組件都被 [Ant ProComponents](https://procomponents.ant.design) 封裝，此組件提供了通過遠程數據來渲染字段的能力。

## 導入組件

```jsx | pure
import {RemoteField} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 描述              | 類型                                                                     | 預設值                  |
|----------------|-----------------|------------------------------------------------------------------------|----------------------|
| clazzPrefix    | 組件的 CSS 類名前綴    | `string`                                                               | `'abp-remote-field'` |
| containerClazz | 容器 div 的 CSS 類名 | `string`                                                               | -                    |
| containerStyle | 容器 div 的 CSS 樣式 | `React.CSSProperties`                                                  | -                    |
| request        | 遠程請求            | `(params?: any) => Promise<any>`                                       | -                    |
| render         | 獲取遠程數據後的回調函數    | `React.ReactNode \| ((outcome?: any) => React.ReactNode \| undefined)` | -                    |
| fallback       | 組件的佔位符          | `React.ReactNode \| (() => React.ReactNode \| undefined)`              | `<Spin/>`            |
| autoStart      | 是否自動開始獲取遠程數據    | `boolean`                                                              | `true`               |

> 註：其他屬性繼承自 Pro Components 的 ProFormFieldRemoteProps。
