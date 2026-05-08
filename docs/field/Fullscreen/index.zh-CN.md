---
title: Fullscreen
toc: content
order: 40
---

## 组件说明

Fullscreen 是一个用来切换全屏的图标按钮。

## 使用前提

<Alert showIcon>
  如果您使用默认的图标，您需要先安装 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 图标组件包：
</Alert>

<InstallDependencies
  npm="$ npm install @ant-design/icons"
  yarn="$ yarn add @ant-design/icons"
  pnpm="$ pnpm install @ant-design/icons"
/>

## 导入组件

```jsx | pure
import {Fullscreen} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 描述                  | 类型                                                        | 默认值                        |
|----------------|---------------------|-----------------------------------------------------------|----------------------------|
| clazzPrefix    | 组件的 CSS 类名前缀        | `string`                                                  | `'abp-fullscreen'`         |
| containerClazz | 容器 span 的 CSS 类名    | `string`                                                  | -                          |
| containerStyle | 容器 span 的 CSS 样式    | `React.CSSProperties`                                     | -                          |
| onChange       | 全屏更改后的回调函数          | `(fullscreen?: boolean) => void`                          | -                          |
| triggerFor     | 要切换全屏的 DOM 元素       | `Element \| null \| (() => Element \| null \| undefined)` | `document.documentElement` |
| tooltipCtrl    | 是否使用 Tooltip        | `boolean`                                                 | -                          |
| tooltipProps   | Tooltip 属性          | `Omit<TooltipProps, 'title'>`                             | -                          |
| locale         | 组件的语言, e.g. 'zh_CN' | `string`                                                  | -                          |
| localeProps    | 多语言属性               | `IntlLocaleProps`                                         | -                          |
