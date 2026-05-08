---
title: CollapseForm
toc: content
---

## 組件說明

CollapseForm，提供了壹個可以折疊展開的表單。

典型的應用場景是，在某條評論下進行回復。

## 導入組件

```jsx | pure
import {CollapseForm} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性               | 說明                      | 類型                                                         | 預設值                   |
|------------------|-------------------------|------------------------------------------------------------|-----------------------|
| clazzPrefix      | 組件的 CSS 類名前綴            | `string`                                                   | `'abp-collapse-form'` |
| autoEntryCursor  | 是否自動改變鼠標指針樣式            | `boolean`                                                  | -                     |
| closedEntry      | 表單關閉時的入口節點              | `React.ReactNode \| (() => React.ReactNode \| undefined)`  | -                     |
| closedEntryClazz | 表單關閉時的入口節點 div 的 CSS 類名 | `string`                                                   | -                     |
| closedEntryStyle | 表單關閉時的入口節點 div 的 CSS 樣式 | `React.CSSProperties`                                      | -                     |
| openedEntry      | 表單展開時的入口節點              | `React.ReactNode \| (() => React.ReactNode \| undefined)`  | -                     |
| openedEntryClazz | 表單展開時的入口節點 div 的 CSS 類名 | `string`                                                   | -                     |
| openedEntryStyle | 表單展開時的入口節點 div 的 CSS 樣式 | `React.CSSProperties`                                      | -                     |
| formContent      | 表單內容節點                  | `React.ReactNode \| (() => React.ReactNode \| undefined)`  | -                     |
| formContentClazz | 表單內容節點 div 的 CSS 類名     | `string`                                                   | -                     |
| formContentStyle | 表單內容節點 div 的 CSS 樣式     | `React.CSSProperties`                                      | -                     |
| formProps        | 表單屬性                    | `Omit<ProFormProps, 'formRef'> \| Omit<FormProps, 'form'>` | -                     |
| closeOnBlur      | 表單失去焦點後是否關閉表單           | `boolean`                                                  | `true`                |
| closeOnFinish    | 表單提交成功後是否關閉表單           | `boolean`                                                  | `true`                |
| defaultOpen      | 是否默認展開表單                | `boolean`                                                  | -                     |
| triggerType      | 展開表單的觸發方式               | `'click' \| 'hover'`                                       | `'click'`             |
| proField         | 是否使用 ProFormField 控件    | `boolean`                                                  | `true`                |
