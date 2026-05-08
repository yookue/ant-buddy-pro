---
title: DelayModal
toc: content
order: 25
---

## Description

DelayModal component, can display a modal dialog after specified timeout, when there aren't any events to prevent it.

The typical scenario is, displaying a dialog to notice user that user hasn't operates anything for a several time, needs to re-login.

## Import

```jsx | pure
import {DelayModal} from '@unikue/ant-buddy-pro';
```

## Example

<code src="./demo.en-US.tsx"></code>

## Properties

| Property      | Description                                              | Type                                                                              | Default                              |
|---------------|----------------------------------------------------------|-----------------------------------------------------------------------------------|--------------------------------------|
| clazzPrefix   | The CSS class prefix of the component                    | `string`                                                                          | `'abp-delay-modal'`                  |
| actionType    | The action type to display the modal                     | `'confirm' \| 'info' \| 'warn' \| 'success' \| 'error' \| 'custom'`               | `'info'`                             |
| autoStart     | Whether auto start the modal timer                       | `boolean`                                                                         | `true`                               |
| onceOnly      | Whether to display the modal only once                   | `boolean`                                                                         | `true`                               |
| preventEvents | The events that will prevent displaying the modal        | `Array<keyof GlobalEventHandlersEventMap>`                                        | `['keydown', 'mousedown', 'scroll']` |
| timeout       | The timeout that will display the modal, in milliseconds | `number`                                                                          | `1000 * 60 * 15`                     |
| triggerFor    | The target DOM element to trigger the prevent events     | `Document \| Element \| null \| (() => Document \| Element \| null \| undefined)` | `document`                           |
| modalProps    | The properties of the modal                              | `MixinModalProps`                                                                 | -                                    |
| modalFunProps | The properties of the functional modal dialog            | `MixinModalFuncProps`                                                             | -                                    |
| skipCondition | The condition for skipping timer once                    | `boolean \| (() => boolean \| undefined)`                                         | -                                    |
| stopCondition | The condition for stopping the timer                     | `boolean \| (() => boolean \| undefined)`                                         | -                                    |
| onOpenChange  | The callback function when the opening state changed     | `(open: boolean) => void`                                                         | -                                    |
