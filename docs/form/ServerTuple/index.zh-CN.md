---
title: ServerTuple
toc: content
order: 80
---

## 组件说明

ServerTuple, 提供了一个可以输入服务器主机和端口的组合框。

## 导入组件

```jsx | pure
import {ServerTuple} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 说明                     | 类型                    | 默认值                  |
|----------------|------------------------|-----------------------|----------------------|
| clazzPrefix    | 组件的 CSS 类名前缀           | `string`              | `'abp-server-tuple'` |
| containerClazz | 容器 div 的 CSS 类名        | `string`              | -                    |
| containerStyle | 容器 div 的 CSS 样式        | `React.CSSProperties` | -                    |
| hostProps      | 主机地址的属性                | `HostInputProps`      | -                    |
| portProps      | 端口的属性                  | `PortInputProps`      | -                    |
| widthBlock     | 是否匹配父节点的宽度             | `boolean`             | `true`               |
| proField       | 是否使用 ProFormField 控件   | `boolean`             | `true`               |
| locale         | 组件的语言, e.g. 'zh_CN'    | `string`              | -                    |
| name           | HTML input 的 name 属性   | `string`              | -                    |
| label          | HTML option 的 label 属性 | `string`              | -                    |
