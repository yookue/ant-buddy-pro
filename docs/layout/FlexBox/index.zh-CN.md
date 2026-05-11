---
title: FlexBox
toc: content
order: 6
---

## 组件说明

FlexBox 组件，一个用于对齐的弹性布局容器。

## 导入组件

```tsx | pure
import {FlexBox} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

| 属性             | 描述                                  | 类型                                                             | 默认值              |
|----------------|-------------------------------------|----------------------------------------------------------------|------------------|
| clazzPrefix    | 组件的 CSS 类名前缀                        | `string`                                                       | `'abp-flex-box'` |
| containerClazz | 容器 div 的 CSS 类名                     | `string`                                                       | -                |
| containerStyle | 容器 div 的 CSS 样式                     | `React.CSSProperties`                                          | -                |
| justifyContent | 内部元素在主轴上的分配空间的方式                    | `React.CSSProperties['justifyContent']`                        | -                |
| justifyItems   | 内部元素在主轴上的对齐方式                       | `React.CSSProperties['justifyItems']`                          | -                |
| alignContent   | 内部元素在交叉轴上的分配空间的方式                   | `React.CSSProperties['alignContent']`                          | -                |
| alignItems     | 内部元素在交叉轴上的对齐方式                      | `React.CSSProperties['alignItems']`                            | -                |
| flex           | 内部元素如何增大或缩小以适应容器中可用的空间              | `React.CSSProperties['flex']`                                  | -                |
| flexBasis      | 内部元素在主轴方向上的初始大小                     | `React.CSSProperties['flexBasis']`                             | -                |
| flexDirection  | 内部元素在容器中的主轴方向                       | `React.CSSProperties['flexDirection']`                         | -                |
| flexFlow       | 属性 flex-direction 和 flex-wrap 的简写形式 | `React.CSSProperties['flexFlow']`                              | -                |
| flexGrow       | 内部元素在主轴上的 flex 增长系数                 | `React.CSSProperties['flexGrow']`                              | -                |
| flexShrink     | 内部元素在主轴上的 flex 收缩系数                 | `React.CSSProperties['flexShrink']`                            | -                |
| flexWrap       | 内部元素是单行显示还是多行显示                     | `React.CSSProperties['flexWrap']`                              | -                |
| gap            | 行与列之间的间隙                            | `'small' \| 'middle' \| 'large' \| React.CSSProperties['gap']` | -                |
| boundBorder    | 是否显示边框                              | `boolean`                                                      | -                |
| boundShadow    | 是否显示边框阴影                            | `boolean`                                                      | -                |
