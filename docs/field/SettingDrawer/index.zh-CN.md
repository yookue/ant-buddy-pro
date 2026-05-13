---
title: SettingDrawer
toc: content
order: 19
---

## 组件说明

SettingDrawer 是一个封装了 pro-components SettingDrawer 的组件，通过自定义触发器替代默认的齿轮图标。

**核心设计理念**：
- ✅ **完全复用** - 继承 pro-components SettingDrawer 的所有属性和功能
- ✅ **极简扩展** - 仅新增 2 个属性：`clazzPrefix` 和 `triggerDom`
- ✅ **隐藏默认按钮** - 自动隐藏 pro-components 的默认设置按钮
- ✅ **完整功能** - 主题配置、布局切换、深色模式等所有原生功能保持不变

## 导入组件

```tsx | pure
import {SettingDrawer} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-CN.tsx"></code>

## 组件属性

SettingDrawer 继承了 pro-components SettingDrawer 的所有属性，并新增了 2 个属性：

| 属性          | 描述           | 类型                | 默认值                                       |
|-------------|--------------|-------------------|-------------------------------------------|
| clazzPrefix | 组件的 CSS 类名前缀 | `string`          | `'abp-setting-drawer'`                    |
| triggerDom  | 自定义触发 DOM 元素 | `React.ReactNode` | `<SkinOutlined style={{fontSize: 16}} />` |

此外，支持 pro-components SettingDrawer 的所有其他属性，例如：
- `settings` - 当前设置
- `onSettingChange` - 设置变化回调
- `hideHintAlert` - 隐藏提示按钮
- `hideCopyButton` - 隐藏复制按钮
- 等等...
