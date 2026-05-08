---
title: ChronoSelect
toc: content
order: 15
---

## 组件说明

ChronoSelect, 提供了一个可以选择时间单位的选择框，选项数据来源于 [ChronoUnit](https://docs.oracle.com/javase/8/docs/api/java/time/temporal/ChronoUnit.html)。

## 导入组件

```jsx | pure
import {ChronoSelect} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性          | 说明                   | 类型                   | 默认值                                                                             |
|-------------|----------------------|----------------------|---------------------------------------------------------------------------------|
| clazzPrefix | 组件的 CSS 类名前缀         | `string`             | `'abp-chrono-select'`                                                           |
| unitTypes   | 单位类型                 | `ChronoUintType[]`   | `['millis', 'seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years']` |
| proField    | 是否使用 ProFormField 控件 | `boolean`            | `true`                                                                          |
| presetStyle | 预设样式                 | `WithFalse<'addon'>` | -                                                                               |
| locale      | 组件的语言, e.g. 'zh_CN'  | `string`             | -                                                                               |
| localeProps | 多语言属性                | `IntlLocaleProps`    | -                                                                               |

> 注意: 其他属性继承自 ProFormSelect 组件。
