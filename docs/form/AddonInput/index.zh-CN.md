---
title: AddonInput
toc: content
order: 0
---

## 组件说明

AddonInput，提供了一个支持 addonBefore 和 addonAfter 属性的文本输入框组件，还原了早期版本 Ant Design Input 组件的 addon 功能。

在新版 Ant Design 中，Input 组件移除了 addonBefore 和 addonAfter 属性，建议使用 Space.Compact 模式。但在实际使用中，直接使用 Space.Compact 不够方便，且没有旧版 addon 的灰色背景效果。AddonInput 组件使用新版 Space.Compact 实现，同时保留了旧版的视觉效果和使用方式。

典型的应用场景是，在输入框前后添加固定的前缀、后缀、按钮或其他内容，例如 URL 输入框添加协议前缀和域名后缀。

## 导入组件

```jsx | pure
import {AddonInput} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性            | 描述                   | 类型                                                        | 默认值                 |
|---------------|----------------------|-----------------------------------------------------------|---------------------|
| clazzPrefix   | 组件的 CSS 类名前缀         | `string`                                                  | `'abp-addon-input'` |
| addonBefore   | 输入框前的内容              | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                   |
| addonAfter    | 输入框后的内容              | `React.ReactNode \| (() => React.ReactNode \| undefined)` | -                   |
| cursorBefore  | 输入框前的内容的鼠标指针         | `string`                                                  | `'default'`         |
| cursorAfter   | 输入框后的内容的鼠标指针         | `string`                                                  | `'default'`         |
| paddingBefore | 输入框前的内容间距            | `number`                                                  | -                   |
| paddingAfter  | 输入框后的内容间距            | `number`                                                  | -                   |
| widthBlock    | 是否匹配父节点的宽度           | `boolean`                                                 | `true`              |
| proField      | 是否使用 ProFormField 控件 | `boolean`                                                 | `true`              |

> 注意: 其他属性继承自 Ant Design Pro 的 ProForm.Item 组件。
