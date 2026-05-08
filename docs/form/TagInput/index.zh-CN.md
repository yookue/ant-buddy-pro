---
title: TagInput
toc: content
---

## 组件说明

TagInput，提供了一个可通过文本框增加的多标签。

## 导入组件

```jsx | pure
import {TagInput} from '@unikue/ant-buddy-pro';
```

## 使用示例

### 使用属性初始化

<code src="./demo-1.zh-CN.tsx"></code>

### 使用表单初始化

<code src="./demo-2.zh-CN.tsx"></code>

## 组件属性

| 属性                  | 说明                     | 类型                                                                                                             | 默认值               |
|---------------------|------------------------|----------------------------------------------------------------------------------------------------------------|-------------------|
| clazzPrefix         | 组件的 CSS 类名前缀           | `string`                                                                                                       | `'abp-tag-input'` |
| containerClazz      | 容器 div 的 CSS 类名        | `string`                                                                                                       | -                 |
| containerStyle      | 容器 div 的 CSS 样式        | `React.CSSProperties`                                                                                          | -                 |
| fieldRef            | 组件的 ref 句柄             | `React.Ref<TagInputRef \| null \| undefined>`                                                                  | -                 |
| request             | 远程数据请求                 | `(params?: Record<string, any>, props?: Record<string, any>) => Promise<(string \| number \| TextTagProps)[]>` | -                 |
| requestOptionPlace  | 使用 request 数据的同时是否保留数据 | `'before' \| 'after' \| 'override' \| false`                                                                   | -                 |
| fulfilTagItems      | 已完成标签的属性或内容            | `(string \| number \| TextTagProps)[]`                                                                         | -                 |
| fulfilTagProps      | 已完成标签的通用属性             | `Omit<TagProps, 'children'>`                                                                                   | -                 |
| addable             | 是否可以添加标签               | `boolean`                                                                                                      | `false`           |
| addingInputProps    | 添加标签的文本框的属性            | `AddingInputProps`                                                                                             | -                 |
| addingTagProps      | 添加标签的属性                | `TagProps`                                                                                                     | -                 |
| compactMargin       | 是否使用紧凑边距               | `boolean`                                                                                                      | -                 |
| tweenOneAnim        | 是否启用 tween-one 动画      | `boolean`                                                                                                      | `true`            |
| tweenOneProps       | tween-one 动画的属性        | `TweenOneGroupProps`                                                                                           | -                 |
| warnExists          | 是否显示标签已存在的警告           | `boolean`                                                                                                      | `true`            |
| proField            | 是否使用 ProFormField 控件   | `boolean`                                                                                                      | `true`            |
| onTagContentsChange | 标签内容变化时的回调函数           | `(contents?: (string \| number)[]) => void`                                                                    | -                 |
| locale              | 组件的语言, e.g. 'zh_CN'    | `string`                                                                                                       | -                 |
| localeProps         | 多语言属性                  | `IntlLocaleProps`                                                                                              | -                 |
