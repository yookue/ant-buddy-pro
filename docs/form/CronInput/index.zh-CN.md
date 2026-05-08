---
title: CronInput
toc: content
---

## 组件说明

CronInput 是一个可以通过可视化选项来生成 cron 表达式的组件。

## 导入组件

```jsx | pure
import {CronInput} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性                | 说明                  | 类型                                                                | 默认值                    |
|-------------------|---------------------|-------------------------------------------------------------------|------------------------|
| clazzPrefix       | 组件的 CSS 类名前缀        | `string`                                                          | `'abp-cron-input'`     |
| addon             | 默认文本框的附属节点内容        | `React.ReactNode \| (() => React.ReactNode \| undefined)`         | `<FieldTimeOutlined/>` |
| addonPos          | 默认文本框的附属节点位置        | `'before' \| 'after' \| false`                                    | `'after'`              |
| allowSecond       | 是否允许秒标签页            | `boolean`                                                         | `true`                 |
| allowYear         | 是否允许年标签页            | `boolean`                                                         | `true`                 |
| defaultOpen       | 是否默认展开弹出层           | `boolean`                                                         | -                      |
| defaultShowSecond | 是否默认显示秒标签页          | `boolean`                                                         | -                      |
| defaultShowYear   | 是否默认显示年标签页          | `boolean`                                                         | -                      |
| echoValidateError | 是否回显验证错误到控制台        | `boolean`                                                         | -                      |
| triggerProps      | 弹出层的属性              | `Omit<TriggerProps, 'popup' \| 'popupVisible' \| 'children'>`     | -                      |
| tabsProps         | 标签页的属性              | `CronTabProps`                                                    | -                      |
| secondPanelProps  | 秒标签页的属性             | `SecondPanelProps`                                                | -                      |
| minutePanelProps  | 分标签页的属性             | `MinutePanelProps`                                                | -                      |
| hourPanelProps    | 时标签页的属性             | `HourPanelProps`                                                  | -                      |
| dayPanelProps     | 天标签页的属性             | `DayPanelProps`                                                   | -                      |
| monthPanelProps   | 月标签页的属性             | `MonthPanelProps`                                                 | -                      |
| weekPanelProps    | 周标签页的属性             | `WeekPanelProps`                                                  | -                      |
| yearPanelProps    | 年标签页的属性             | `YearPanelProps`                                                  | -                      |
| validateRule      | 是否校验控件              | `boolean`                                                         | `true`                 |
| locale            | 组件的语言, e.g. 'zh_CN' | `string`                                                          | -                      |
| localeProps       | 多语言属性               | `IntlLocaleProps`                                                 | -                      |
| onValidateError   | 验证错误时的回调函数          | `(express?: string, errors?: string[], income?: boolean) => void` | -                      |
| allowOkEcho       | 是否允许确定按钮回显值         | `boolean`                                                         | -                      |

> 注意: 其他属性继承自 AddonInput 组件。
