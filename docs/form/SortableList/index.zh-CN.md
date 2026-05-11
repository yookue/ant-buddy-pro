---
title: SortableList
toc: content
order: 19
---

## 组件说明

SortableList, 是一个可以为 Ant `ProFormList` 增加排序能力的包装组件。

## 导入组件

```tsx | pure
import {SortableList} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性                 | 说明                  | 类型                | 默认值                   |
|--------------------|---------------------|-------------------|-----------------------|
| clazzPrefix        | 组件的 CSS 类名前缀        | `string`          | `'abp-sortable-list'` |
| allowTopBottom     | 是否允许移动到顶部和底部        | `boolean`         | `true`                |
| allowUpDown        | 是否允许向上和向下移动         | `boolean`         | `true`                |
| allowDefaultAction | 是否允许默认动作（复制和删除）     | `boolean`         | `true`                |
| locale             | 组件的语言, e.g. 'zh_CN' | `string`          | -                     |
| localeProps        | 多语言属性               | `IntlLocaleProps` | -                     |

> 注意: 其他属性继承自 ProFormList 组件。
