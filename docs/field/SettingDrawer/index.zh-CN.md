---
title: SettingDrawer
toc: content
order: 19
---

## 组件说明

SettingDrawer 是一个封装了 pro-components SettingDrawer 的组件，通过自定义触发器替代默认的齿轮图标。

**核心设计理念**：
- ✅ **完全复用** - 继承 pro-components SettingDrawer 的所有属性和功能
- ✅ **隐藏默认按钮** - 自动隐藏 pro-components 的默认设置按钮
- ✅ **完整功能** - 主题配置、布局切换、深色模式等所有原生功能保持不变

## 导入组件

```tsx | pure
import {SettingDrawer} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

SettingDrawer 继承了 pro-components SettingDrawer 的所有属性，并新增了以下属性：

| 属性             | 描述                  | 类型                            | 默认值                                       |
|----------------|---------------------|-------------------------------|-------------------------------------------|
| clazzPrefix    | 组件的 CSS 类名前缀        | `string`                      | `'abp-setting-drawer'`                    |
| containerClazz | 容器 span 的 CSS 类名    | `string`                      | -                                         |
| containerStyle | 容器 span 的 CSS 样式    | `React.CSSProperties`         | -                                         |
| triggerDom     | 自定义触发 DOM 元素        | `React.ReactNode`             | `<SkinOutlined style={{fontSize: 16}} />` |
| tooltipCtrl    | 是否使用 Tooltip        | `boolean`                     | -                                         |
| tooltipProps   | Tooltip 属性          | `Omit<TooltipProps, 'title'>` | -                                         |
| locale         | 组件的语言, e.g. 'zh_CN' | `string`                      | -                                         |
| localeProps    | 多语言属性               | `IntlLocaleProps`             | -                                         |

此外，支持 pro-components SettingDrawer 的所有其他属性，例如：
- `settings` - 当前设置
- `onSettingChange` - 设置变化回调
- `hideHintAlert` - 隐藏提示按钮
- `hideCopyButton` - 隐藏复制按钮
- 等等...

## 组件方法

通过 `ref` 可以访问以下方法：

| 方法名  | 参数 | 描述            |
|------|----|---------------|
| open | 无  | 以编程方式打开设置抽屉面板 |
