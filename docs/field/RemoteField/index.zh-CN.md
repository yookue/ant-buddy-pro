---
title: RemoteField
toc: content
order: 18
---

## 组件说明

RemoteField 可以使用远程数据渲染一个组件。

此诉求产生的原因是，并不是所有的 [Ant Design](https://ant.design) 组件都被 [Ant ProComponents](https://procomponents.ant.design) 封装，此组件提供了通过远程数据来渲染字段的能力。

## 导入组件

```tsx | pure
import {RemoteField} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 描述              | 类型                                                                     | 默认值                  |
|----------------|-----------------|------------------------------------------------------------------------|----------------------|
| clazzPrefix    | 组件的 CSS 类名前缀    | `string`                                                               | `'abp-remote-field'` |
| containerClazz | 容器 div 的 CSS 类名 | `string`                                                               | -                    |
| containerStyle | 容器 div 的 CSS 样式 | `React.CSSProperties`                                                  | -                    |
| request        | 远程请求            | `(params?: any) => Promise<any>`                                       | -                    |
| render         | 获取远程数据后的回调函数    | `React.ReactNode \| ((outcome?: any) => React.ReactNode \| undefined)` | -                    |
| fallback       | 组件的占位符          | `React.ReactNode \| (() => React.ReactNode \| undefined)`              | `<Spin/>`            |
| autoStart      | 是否自动开始获取远程数据    | `boolean`                                                              | `true`               |

> 注：其他属性继承自 Pro Components 的 ProFormFieldRemoteProps。

## 组件方法

通过 `ref` 可以访问以下方法：

| 方法名         | 参数 | 描述          |
|-------------|----|-------------|
| getOutcome  | 无  | 获取远程请求的结果数据 |
| isAutoStart | 无  | 检查是否自动启动    |
| refresh     | 无  | 刷新远程数据      |
