---
title: DelayModal
toc: content
order: 25
---

## 組件說明

DelayModal 用於在超時後顯示一個模態對話框，如果沒有其它事件來阻止（延遲）它的話。

典型的應用場景是，當用戶長時間不操作後，顯示對話框來提示用戶需要重新登錄。

## 導入組件

```tsx | pure
import {DelayModal} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

| 屬性            | 描述                | 類型                                                                                | 預設值                                  |
|---------------|-------------------|-----------------------------------------------------------------------------------|--------------------------------------|
| clazzPrefix   | 組件的 CSS 類名前綴      | `string`                                                                          | `'abp-delay-modal'`                  |
| actionType    | 顯示模態對話框的動作類型      | `'confirm' \| 'info' \| 'warn' \| 'success' \| 'error' \| 'custom'`               | `'info'`                             |
| autoStart     | 是否自動開始模態對話框的計時器   | `boolean`                                                                         | `true`                               |
| onceOnly      | 是否只顯示一次模態對話框      | `boolean`                                                                         | `true`                               |
| preventEvents | 阻止顯示模態對話框的事件      | `Array<keyof GlobalEventHandlersEventMap>`                                        | `['keydown', 'mousedown', 'scroll']` |
| timeout       | 顯示模態對話框的超時時間，單位毫秒 | `number`                                                                          | `1000 * 60 * 15`                     |
| triggerFor    | 要觸發延遲事件的 DOM 元素   | `Document \| Element \| null \| (() => Document \| Element \| null \| undefined)` | `document`                           |
| modalProps    | 模態對話框的屬性          | `MixinModalProps`                                                                 | -                                    |
| modalFunProps | 函數型模態對話框的屬性       | `MixinModalFuncProps`                                                             | -                                    |
| skipCondition | 跳過單次計時器的條件        | `boolean \| (() => boolean \| undefined)`                                         | -                                    |
| stopCondition | 停止計時器的條件          | `boolean \| (() => boolean \| undefined)`                                         | -                                    |
| onOpenChange  | 顯示狀態變化時的回調函數      | `(open: boolean) => void`                                                         | -                                    |
