---
title: DivideSelect
toc: content
order: 40
---

## 组件说明

DivideSelect, 提供了一下可以将选项的标签和值分开显示的选择框。

## 导入组件

```tsx | pure
import {DivideSelect} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性                  | 说明                                                 | 类型                                                        | 默认值                   |
|---------------------|----------------------------------------------------|-----------------------------------------------------------|-----------------------|
| clazzPrefix         | 组件的 CSS 类名前缀                                       | `string`                                                  | `'abp-divide-select'` |
| optionClazz         | 下拉选项 div 的 CSS 类名                                  | `string`                                                  | -                     |
| optionStyle         | 下拉选项 div 的 CSS 样式                                  | `React.CSSProperties`                                     | -                     |
| optionBeforeClazz   | 下拉选项左侧 span 的 CSS 类名                               | `string`                                                  | -                     |
| optionBeforeStyle   | 下拉选项左侧 span 的 CSS 样式                               | `React.CSSProperties`                                     | -                     |
| optionBeforeContent | 下拉选项左侧 span 的内容                                    | `'label' \| 'value' \| 'code' \| false`                   | `'label'`             |
| optionBeforeRender  | 下拉选项左侧 span 的渲染方法                                  | `(dom?: React.ReactNode) => React.ReactNode \| undefined` | -                     |
| optionAfterClazz    | 下拉选项右侧 span 的 CSS 类名                               | `string`                                                  | -                     |
| optionAfterStyle    | 下拉选项右侧 span 的 CSS 样式                               | `React.CSSProperties`                                     | -                     |
| optionAfterContent  | 下拉选项右侧 span 的内容                                    | `'label' \| 'value' \| 'code' \| false`                   | `'value'`             |
| optionAfterRender   | 下拉选项右侧 span 的渲染方法                                  | `(dom?: React.ReactNode) => React.ReactNode \| undefined` | -                     |
| requestOptionPlace  | 使用 `request` 数据的同时，是否保留 `options` 或 `valueEnum` 数据 | `'before' \| 'after' \| 'override' \| false`              | -                     |
| proField            | 是否使用 ProFormField 控件                               | `boolean`                                                 | `true`                |
| presetStyle         | 预设样式                                               | `'before-prior' \| 'after-prior' \| false`                | `'before-prior'`      |
