---
title: CronInput
toc: content
---

## 組件說明

CronInput 是壹個可以通過可視化選項來生成 cron 表達式的組件。

## 導入組件

```jsx | pure
import {CronInput} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性                | 說明                  | 類型                                                                | 預設值                    |
|-------------------|---------------------|-------------------------------------------------------------------|------------------------|
| clazzPrefix       | 組件的 CSS 類名前綴        | `string`                                                          | `'abp-cron-input'`     |
| addon             | 默認文本框的附屬節點內容        | `React.ReactNode \| (() => React.ReactNode \| undefined)`         | `<FieldTimeOutlined/>` |
| addonPos          | 默認文本框的附屬節點位置        | `'before' \| 'after' \| false`                                    | `'after'`              |
| allowSecond       | 是否允許秒標籤頁            | `boolean`                                                         | `true`                 |
| allowYear         | 是否允許年標籤頁            | `boolean`                                                         | `true`                 |
| defaultOpen       | 是否默認展開彈出層           | `boolean`                                                         | -                      |
| defaultShowSecond | 是否默認顯示秒標籤頁          | `boolean`                                                         | -                      |
| defaultShowYear   | 是否默認顯示年標籤頁          | `boolean`                                                         | -                      |
| echoValidateError | 是否回顯驗證錯誤到控制臺        | `boolean`                                                         | -                      |
| triggerProps      | 彈出層的屬性              | `Omit<TriggerProps, 'popup' \| 'popupVisible' \| 'children'>`     | -                      |
| tabsProps         | 標簽頁的屬性              | `CronTabProps`                                                    | -                      |
| secondPanelProps  | 秒標簽頁的屬性             | `SecondPanelProps`                                                | -                      |
| minutePanelProps  | 分標簽頁的屬性             | `MinutePanelProps`                                                | -                      |
| hourPanelProps    | 時標簽頁的屬性             | `HourPanelProps`                                                  | -                      |
| dayPanelProps     | 天標簽頁的屬性             | `DayPanelProps`                                                   | -                      |
| monthPanelProps   | 月標簽頁的屬性             | `MonthPanelProps`                                                 | -                      |
| weekPanelProps    | 周標簽頁的屬性             | `WeekPanelProps`                                                  | -                      |
| yearPanelProps    | 年標簽頁的屬性             | `YearPanelProps`                                                  | -                      |
| validateRule      | 是否校驗控件              | `boolean`                                                         | `true`                 |
| locale            | 組件的語言, e.g. 'zh_TW' | `string`                                                          | -                      |
| localeProps       | 多語言屬性               | `IntlLocaleProps`                                                 | -                      |
| onValidateError   | 驗證錯誤時的回調函數          | `(express?: string, errors?: string[], income?: boolean) => void` | -                      |
| allowOkEcho       | 是否允許確定按鈕回顯值         | `boolean`                                                         | -                      |

> 注意: 其他屬性繼承自 AddonInput 組件。
