---
title: CipherStrength
toc: content
order: 25
---

## 组件说明

CipherStrength，是一个可以通过进度条和文字来显示密码强度的组件。

## 导入组件

```jsx | pure
import {CipherStrength} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 说明                  | 类型                             | 默认值                     |
|----------------|---------------------|--------------------------------|-------------------------|
| clazzPrefix    | 组件的 CSS 类名前缀        | `string`                       | `'abp-cipher-strength'` |
| containerClazz | 容器 div 的 CSS 类名     | `string`                       | -                       |
| containerStyle | 容器 div 的 CSS 样式     | `React.CSSProperties`          | -                       |
| watchField     | 要监听的字段名             | `string`                       | `'password'`            |
| progressClazz  | 进度条 div 的 CSS 类名    | `string`                       | -                       |
| progressStyle  | 进度条 div 的 CSS 样式    | `React.CSSProperties`          | -                       |
| captionClazz   | 标题 div 的 CSS 类名     | `string`                       | -                       |
| captionStyle   | 标题 div 的 CSS 样式     | `React.CSSProperties`          | -                       |
| captionPos     | 标题位置                | `'before' \| 'after' \| false` | `'after'`               |
| colorProps     | 颜色属性                | `StrokeColorProps`             | -                       |
| widthBlock     | 是否匹配父节点的宽度          | `boolean`                      | -                       |
| locale         | 组件的语言, e.g. 'zh_CN' | `string`                       | -                       |
| localeProps    | 多语言属性               | `IntlLocaleProps`              | -                       |
