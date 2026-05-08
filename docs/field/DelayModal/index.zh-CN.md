---
title: DelayModal
toc: content
---

## 组件说明

DelayModal 用于在超时后显示一个模态对话框，如果没有其它事件来阻止（延迟）它的话。

典型的应用场景是，当用户长时间不操作后，显示对话框来提示用户需要重新登录。

## 导入组件

```jsx | pure
import {DelayModal} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性            | 描述                | 类型                                                                                | 默认值                                  |
|---------------|-------------------|-----------------------------------------------------------------------------------|--------------------------------------|
| clazzPrefix   | 组件的 CSS 类名前缀      | `string`                                                                          | `'abp-delay-modal'`                  |
| actionType    | 显示模态对话框的动作类型      | `'confirm' \| 'info' \| 'warn' \| 'success' \| 'error' \| 'custom'`               | `'info'`                             |
| autoStart     | 是否自动开始模态对话框的计时器   | `boolean`                                                                         | `true`                               |
| onceOnly      | 是否只显示一次模态对话框      | `boolean`                                                                         | `true`                               |
| preventEvents | 阻止显示模态对话框的事件      | `Array<keyof GlobalEventHandlersEventMap>`                                        | `['keydown', 'mousedown', 'scroll']` |
| timeout       | 显示模态对话框的超时时间,单位毫秒 | `number`                                                                          | `1000 * 60 * 15`                     |
| triggerFor    | 要触发延迟事件的 DOM 元素   | `Document \| Element \| null \| (() => Document \| Element \| null \| undefined)` | `document`                           |
| modalProps    | 模态对话框的属性          | `MixinModalProps`                                                                 | -                                    |
| modalFunProps | 函数型模态对话框的属性       | `MixinModalFuncProps`                                                             | -                                    |
| skipCondition | 跳过单次计时器的条件        | `boolean \| (() => boolean \| undefined)`                                         | -                                    |
| stopCondition | 停止计时器的条件          | `boolean \| (() => boolean \| undefined)`                                         | -                                    |
| onOpenChange  | 显示状态变化时的回调函数      | `(open: boolean) => void`                                                         | -                                    |
