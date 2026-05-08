---
title: MathInput
toc: content
---

## 组件说明

MathInput，提供了一个可以输入数学公式的的录入框。

## 导入组件

```jsx | pure
import {MathInput} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 说明                   | 类型                          | 默认值                |
|----------------|----------------------|-----------------------------|--------------------|
| clazzPrefix    | 组件的 CSS 类名前缀         | `string`                    | `'abp-math-input'` |
| containerClazz | 容器 div 的 CSS 类名      | `string`                    | -                  |
| containerStyle | 容器 div 的 CSS 样式      | `React.CSSProperties`       | -                  |
| mathOptions    | Mathfield 的选项        | `Partial<MathfieldOptions>` | -                  |
| validation     | 是否增加公式校验规则           | `boolean`                   | `true`             |
| onChange       | 值更改后的回调函数            | `(value?: string) => void`  | -                  |
| proField       | 是否使用 ProFormField 控件 | `boolean`                   | -                  |
| locale         | 组件的语言, e.g. 'zh_CN'  | `string`                    | -                  |
| localeProps    | 多语言属性                | `IntlLocaleProps`           | -                  |
| value          | 输入框的值                | `string`                    | -                  |
