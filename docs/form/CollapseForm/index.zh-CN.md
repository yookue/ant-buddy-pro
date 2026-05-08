---
title: CollapseForm
toc: content
order: 30
---

## 组件说明

CollapseForm，提供了一个可以折叠展开的表单。

典型的应用场景是，在某条评论下进行回复。

## 导入组件

```jsx | pure
import {CollapseForm} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性               | 说明                      | 类型                                                         | 默认值                   |
|------------------|-------------------------|------------------------------------------------------------|-----------------------|
| clazzPrefix      | 组件的 CSS 类名前缀            | `string`                                                   | `'abp-collapse-form'` |
| autoEntryCursor  | 是否自动改变鼠标指针样式            | `boolean`                                                  | -                     |
| closedEntry      | 表单关闭时的入口节点              | `React.ReactNode \| (() => React.ReactNode \| undefined)`  | -                     |
| closedEntryClazz | 表单关闭时的入口节点 div 的 CSS 类名 | `string`                                                   | -                     |
| closedEntryStyle | 表单关闭时的入口节点 div 的 CSS 样式 | `React.CSSProperties`                                      | -                     |
| openedEntry      | 表单展开时的入口节点              | `React.ReactNode \| (() => React.ReactNode \| undefined)`  | -                     |
| openedEntryClazz | 表单展开时的入口节点 div 的 CSS 类名 | `string`                                                   | -                     |
| openedEntryStyle | 表单展开时的入口节点 div 的 CSS 样式 | `React.CSSProperties`                                      | -                     |
| formContent      | 表单内容节点                  | `React.ReactNode \| (() => React.ReactNode \| undefined)`  | -                     |
| formContentClazz | 表单内容节点 div 的 CSS 类名     | `string`                                                   | -                     |
| formContentStyle | 表单内容节点 div 的 CSS 样式     | `React.CSSProperties`                                      | -                     |
| formProps        | 表单属性                    | `Omit<ProFormProps, 'formRef'> \| Omit<FormProps, 'form'>` | -                     |
| closeOnBlur      | 表单失去焦点后是否关闭表单           | `boolean`                                                  | `true`                |
| closeOnFinish    | 表单提交成功后是否关闭表单           | `boolean`                                                  | `true`                |
| defaultOpen      | 是否默认展开表单                | `boolean`                                                  | -                     |
| triggerType      | 展开表单的触发方式               | `'click' \| 'hover'`                                       | `'click'`             |
| proField         | 是否使用 ProFormField 控件    | `boolean`                                                  | `true`                |
