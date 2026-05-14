---
title: TagInput
toc: content
order: 20
---

## 組件說明

TagInput，提供了壹個可通過文本框增加的多標簽。

## 導入組件

```tsx | pure
import {TagInput} from '@unikue/ant-buddy-pro';
```

## 使用示例

### 使用屬性初始化

<code src="./demo-1.zh-TW.tsx"></code>

### 使用表單初始化

<code src="./demo-2.zh-TW.tsx"></code>

## 組件屬性

| 屬性                  | 說明                     | 類型                                                                                                             | 預設值               |
|---------------------|------------------------|----------------------------------------------------------------------------------------------------------------|-------------------|
| clazzPrefix         | 組件的 CSS 類名前綴           | `string`                                                                                                       | `'abp-tag-input'` |
| containerClazz      | 容器 div 的 CSS 類名        | `string`                                                                                                       | -                 |
| containerStyle      | 容器 div 的 CSS 樣式        | `React.CSSProperties`                                                                                          | -                 |
| fieldRef            | 組件的 ref 句柄             | `React.Ref<TagInputRef \| null \| undefined>`                                                                  | -                 |
| request             | 遠程數據請求                 | `(params?: Record<string, any>, props?: Record<string, any>) => Promise<(string \| number \| TextTagProps)[]>` | -                 |
| requestOptionPlace  | 使用 request 數據的同時是否保留數據 | `'before' \| 'after' \| 'override' \| false`                                                                   | -                 |
| fulfilTagItems      | 已完成標簽的屬性或內容            | `(string \| number \| TextTagProps)[]`                                                                         | -                 |
| fulfilTagProps      | 已完成標簽的通用屬性             | `Omit<TagProps, 'children'>`                                                                                   | -                 |
| addable             | 是否可以添加標簽               | `boolean`                                                                                                      | `false`           |
| addingInputProps    | 添加標簽的文本框的屬性            | `AddingInputProps`                                                                                             | -                 |
| addingTagProps      | 添加標簽的屬性                | `TagProps`                                                                                                     | -                 |
| compactMargin       | 是否使用緊凑邊距               | `boolean`                                                                                                      | -                 |
| warnExists          | 是否顯示標簽已存在的警告           | `boolean`                                                                                                      | `true`            |
| proField            | 是否使用 ProFormField 控件   | `boolean`                                                                                                      | `true`            |
| onTagContentsChange | 標簽内容變化時的回調函數           | `(contents?: (string \| number)[]) => void`                                                                    | -                 |
| locale              | 組件的語言, e.g. 'zh_TW'    | `string`                                                                                                       | -                 |
| localeProps         | 多語言屬性                  | `IntlLocaleProps`                                                                                              | -                 |

## 組件方法

通過 `ref` 可以訪問以下方法：

| 方法名              | 參數                                      | 描述       |
|------------------|-----------------------------------------|----------|
| getTagContents   | 無                                       | 獲取標簽内容列表 |
| setTagContents   | contents?: (string \| number)[] \| null | 設置標簽内容列表 |
| addTagContent    | content?: string \| number \| null      | 添加單個標簽内容 |
| removeTagContent | content?: string \| number \| null      | 移除單個標簽内容 |
