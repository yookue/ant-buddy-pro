---
title: FallbackImage
toc: content
order: 35
---

## 组件说明

FallbackImage 提供了一个加载图片备用源的选项，用以在图片常规源无法加载的时候显示。

## 导入组件

```tsx | pure
import {FallbackImage} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.tsx"></code>

## 组件属性

| 属性          | 描述           | 类型                                                                                                      | 默认值                    |
|-------------|--------------|---------------------------------------------------------------------------------------------------------|------------------------|
| clazzPrefix | 组件的 CSS 类名前缀 | `string`                                                                                                | `'abp-fallback-image'` |
| src         | 图片源          | `string \| Promise<string \| undefined> \| (() => string \| undefined \| Promise<string \| undefined>)` | -                      |
| fallback    | 备用图片源        | `string \| Promise<string \| undefined> \| (() => string \| undefined \| Promise<string \| undefined>)` | -                      |

> 注：其他属性继承自 rc-image 的 Image 组件。
