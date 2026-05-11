---
title: ChronoTuple
toc: content
order: 20
---

## 组件说明

ChronoTuple, 提供了一个可以输入数值和选择时间单位的选择框，选项数据来源于 [ChronoUnit](https://docs.oracle.com/javase/8/docs/api/java/time/temporal/ChronoUnit.html)。

## 导入组件

```tsx | pure
import {ChronoTuple} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 说明                   | 类型                    | 默认值                  |
|----------------|----------------------|-----------------------|----------------------|
| clazzPrefix    | 组件的 CSS 类名前缀         | `string`              | `'abp-chrono-tuple'` |
| containerClazz | 容器 div 的 CSS 类名      | `string`              | -                    |
| containerStyle | 容器 div 的 CSS 样式      | `React.CSSProperties` | -                    |
| digitProps     | 数字组件的属性              | `ProFormDigitProps`   | -                    |
| selectProps    | 选择组件的属性              | `ChronoSelectProps`   | -                    |
| widthBlock     | 是否匹配父节点的宽度           | `boolean`             | `true`               |
| proField       | 是否使用 ProFormField 控件 | `boolean`             | `true`               |
