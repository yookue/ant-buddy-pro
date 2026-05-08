---
title: SegmentRadio
toc: content
order: 75
---

## 组件说明

SegmentRadio 与 [Ant Design](https://ant.design) 的 [Segmented](https://ant.design/components/segmented) 类似，但是包装了一层 [ProForm](https://github.com/ant-design/pro-components/tree/master/packages/form) 的特有属性。

## 导入组件

```jsx | pure
import {SegmentRadio} from '@unikue/ant-buddy-pro';
```

## 使用示例

### 使用 options

<code src="./demo-1.zh-CN.tsx"></code>

### 使用 request

<code src="./demo-2.zh-CN.tsx"></code>

### 使用 valueEnum

<code src="./demo-3.zh-CN.tsx"></code>

## 组件属性

| 属性                  | 说明                                   | 类型                                                                                                                         | 默认值                   |
|---------------------|--------------------------------------|----------------------------------------------------------------------------------------------------------------------------|-----------------------|
| clazzPrefix         | 组件的 CSS 类名前缀                         | `string`                                                                                                                   | `'abp-segment-radio'` |
| containerClazz      | 容器 div 的 CSS 类名                      | `string`                                                                                                                   | -                     |
| containerStyle      | 容器 div 的 CSS 样式                      | `React.CSSProperties`                                                                                                      | -                     |
| request             | 远程数据请求                               | `(params?: Record<string, any>, props?: Record<string, any>) => Promise<(SegmentedRawOption \| SegmentedLabeledOption)[]>` | -                     |
| requestOptionPlace  | 使用 `request` 数据的同时，是否保留 `options` 数据 | `'before' \| 'after' \| 'override' \| false`                                                                               | -                     |
| proField            | 是否使用 ProFormField 控件                 | `boolean`                                                                                                                  | `true`                |
| onOptionItemsChange | 选项变化时的回调函数                           | `(options?: (SegmentedRawOption \| SegmentedLabeledOption)[]) => void`                                                     | -                     |
