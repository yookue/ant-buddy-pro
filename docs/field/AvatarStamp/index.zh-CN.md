---
title: AvatarStamp
toc: content
order: 1
---

## 组件说明

AvatarStamp 是一个可以显示带角标的头像控件。

## 导入组件

```tsx | pure
import {AvatarStamp} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 描述                   | 类型                                                         | 默认值                  |
|----------------|----------------------|------------------------------------------------------------|----------------------|
| clazzPrefix    | 组件的 CSS 类名前缀         | `string`                                                   | `'abp-avatar-stamp'` |
| containerClazz | 容器 div 的 CSS 类名      | `string`                                                   | -                    |
| containerStyle | 容器 div 的 CSS 样式      | `React.CSSProperties`                                      | -                    |
| addon          | 附加节点                 | `React.ReactNode \| (() => React.ReactNode \| undefined)`  | -                    |
| addonClazz     | 包裹附加节点 div 的 CSS 类名  | `string`                                                   | -                    |
| addonStyle     | 包裹附加节点 div 的 CSS 样式  | `React.CSSProperties`                                      | -                    |
| offset         | 包裹附加节点 div 的偏移, 单位像素 | `[number, number]`                                         | -                    |
| placement      | 角标的位置                | `'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight'` | `'bottomRight'`      |

> 注：其他属性继承自 Ant Design 的 <a href="https://ant.design/components/avatar" target="_blank">Avatar</a> 组件。
