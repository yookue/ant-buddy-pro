---
title: FoldSection
toc: content
order: 25
---

## 组件说明

与 [Ant Design](https://ant.design) 的 [Collapse](https://ant.design/components/collapse) 组件类似，但只有一个标题栏和一个面板。

## Premise

<Alert showIcon>
  如果您使用默认的图标，您需要先安装 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 图标组件包：
</Alert>

<InstallDependencies
  npm="$ npm install @ant-design/icons"
  yarn="$ yarn add @ant-design/icons"
  pnpm="$ pnpm install @ant-design/icons"
/>

## Import

```jsx | pure
import {FoldSection} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性                  | 描述                       | 类型                                                                            | 默认值                  |
|---------------------|--------------------------|-------------------------------------------------------------------------------|----------------------|
| clazzPrefix         | 组件的 CSS 类名前缀             | `string`                                                                      | `'abp-fold-section'` |
| containerClazz      | 容器 div 的 CSS 类名          | `string`                                                                      | -                    |
| containerStyle      | 容器 div 的 CSS 样式          | `React.CSSProperties`                                                         | -                    |
| boundBorder         | 外边界是否有边框                 | `boolean`                                                                     | `true`               |
| headerClazz         | 头部 div 的 CSS 类名          | `string`                                                                      | -                    |
| headerStyle         | 头部 div 的 CSS 样式          | `React.CSSProperties`                                                         | -                    |
| headerOrnament      | 头部装饰 span 的内容            | `React.ReactNode`                                                             | -                    |
| headerOrnamentPos   | 头部装饰 span 的位置            | `'before' \| 'after' \| false`                                                | `'before'`           |
| headerContent       | 头部标题 span 的内容            | `React.ReactNode`                                                             | -                    |
| headerCollapse      | 头部折叠 span 的节点内容(面板展开时)   | `React.ReactNode`                                                             | `<DownOutlined/>`    |
| headerCollapsePos   | 头部折叠 span 的位置            | `'before' \| 'after' \| false`                                                | `'after'`            |
| headerExpand        | 头部折叠 span 的节点内容(面板折叠时)   | `React.ReactNode`                                                             | `<UpOutlined/>`      |
| tooltipCtrl         | 是否使用 Tooltip             | `boolean`                                                                     | -                    |
| tooltipProps        | Tooltip 属性               | `Omit<TooltipProps, 'title'>`                                                 | -                    |
| panelClazz          | 面板 div 的 CSS 类名          | `string`                                                                      | -                    |
| panelStyle          | 面板 div 的 CSS 样式          | `React.CSSProperties`                                                         | -                    |
| panelContent        | 面板 div 的内容               | `React.ReactNode`                                                             | -                    |
| panelForceRender    | 面板 div 无内容也无占位符时，是否强制渲染它 | `boolean`                                                                     | `false`              |
| panelDestroyOnClose | 关闭面板 div 时是否销毁它          | `boolean`                                                                     | `false`              |
| panelPlaceholder    | 面板 div 的占位符              | `React.ReactNode`                                                             | `<Empty/>`           |
| defaultOpen         | 是否默认展开面板 div             | `boolean`                                                                     | `true`               |
| onOpenChange        | 面板 div 折叠展开状态变化时的回调函数    | `(open: boolean) => void`                                                     | -                    |
| presetStyle         | 预设样式                     | `'default' \| 'success' \| 'info' \| 'warn' \| 'error' \| 'classic' \| false` | `'default'`          |
| locale              | 组件的语言, e.g. 'zh_CN'      | `string`                                                                      | -                    |
| localeProps         | 多语言属性                    | `IntlLocaleProps`                                                             | -                    |
