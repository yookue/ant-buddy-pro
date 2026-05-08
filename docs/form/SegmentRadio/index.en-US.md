---
title: SegmentRadio
toc: content
order: 75
---

## Description

SegmentRadio, Similar to [Segmented](https://ant.design/components/segmented) of [Ant Design](https://ant.design), but wraps it with [ProForm](https://github.com/ant-design/pro-components/tree/master/packages/form) features.

## Import

```jsx | pure
import {SegmentRadio} from '@unikue/ant-buddy-pro';
```

## Example

### With options

<code src="./demo-1.en-US.tsx"></code>

### With request

<code src="./demo-2.en-US.tsx"></code>

### With valueEnum

<code src="./demo-3.en-US.tsx"></code>

## Properties

| Property            | Description                                                      | Type                                                                                                                       | Default               |
|---------------------|------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|-----------------------|
| clazzPrefix         | The CSS class prefix of the component                            | `string`                                                                                                                   | `'abp-segment-radio'` |
| containerClazz      | The CSS class name of the container div                          | `string`                                                                                                                   | -                     |
| containerStyle      | The CSS style of the container div                               | `React.CSSProperties`                                                                                                      | -                     |
| request             | The remote request                                               | `(params?: Record<string, any>, props?: Record<string, any>) => Promise<(SegmentedRawOption \| SegmentedLabeledOption)[]>` | -                     |
| requestOptionPlace  | Whether to keep the `options` data when using the `request` data | `'before' \| 'after' \| 'override' \| false`                                                                               | -                     |
| proField            | Whether to use ProFormField instead of Antd                      | `boolean`                                                                                                                  | `true`                |
| onOptionItemsChange | The callback function when the option items changed              | `(options?: (SegmentedRawOption \| SegmentedLabeledOption)[]) => void`                                                     | -                     |
