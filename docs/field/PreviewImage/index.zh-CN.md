---
title: PreviewImage
toc: content
order: 16
---

## 组件说明

PreviewImage 是一个可显示图片预览的组件，并且支持备用图片源。

## 导入组件

```tsx | pure
import {PreviewImage} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性          | 描述           | 类型                                                                                                      | 默认值                   |
|-------------|--------------|---------------------------------------------------------------------------------------------------------|-----------------------|
| clazzPrefix | 组件的 CSS 类名前缀 | `string`                                                                                                | `'abp-preview-image'` |
| src         | 图片源          | `string \| Promise<string \| undefined> \| (() => string \| undefined \| Promise<string \| undefined>)` | -                     |
| fallback    | 备用图片源        | `string \| Promise<string \| undefined> \| (() => string \| undefined \| Promise<string \| undefined>)` | -                     |

> 注：其他属性继承自 Ant Design 的 <a href="https://ant.design/components/image" target="_blank">Image</a> 组件。
