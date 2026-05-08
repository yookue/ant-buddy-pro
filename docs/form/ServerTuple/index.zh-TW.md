---
title: ServerTuple
toc: content
---

## 組件說明

ServerTuple, 提供了一個可以輸入服務器主機和端口的組合框。

## 導入組件

```jsx | pure
import {ServerTuple} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性             | 說明                     | 類型                    | 預設值                  |
|----------------|------------------------|-----------------------|----------------------|
| clazzPrefix    | 組件的 CSS 類名前綴           | `string`              | `'abp-server-tuple'` |
| containerClazz | 容器 div 的 CSS 類名        | `string`              | -                    |
| containerStyle | 容器 div 的 CSS 樣式        | `React.CSSProperties` | -                    |
| hostProps      | 主機地址的屬性                | `HostInputProps`      | -                    |
| portProps      | 端口的屬性                  | `PortInputProps`      | -                    |
| widthBlock     | 是否匹配父節點的寬度             | `boolean`             | `true`               |
| proField       | 是否使用 ProFormField 控件   | `boolean`             | `true`               |
| locale         | 組件的語言, e.g. 'zh_TW'    | `string`              | -                    |
| name           | HTML input 的 name 屬性   | `string`              | -                    |
| label          | HTML option 的 label 屬性 | `string`              | -                    |
