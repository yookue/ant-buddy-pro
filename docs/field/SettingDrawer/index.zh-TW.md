---
title: SettingDrawer
toc: content
order: 19
---

## 組件說明

SettingDrawer 是一個封裝了 pro-components SettingDrawer 的組件，通過自定義觸發器替代默認的齒輪圖標。

**核心設計理念**：
- ✅ **完全複用** - 繼承 pro-components SettingDrawer 的所有屬性和功能
- ✅ **極簡擴展** - 僅新增 2 個屬性：`clazzPrefix` 和 `triggerDom`
- ✅ **隱藏默認按鈕** - 自動隱藏 pro-components 的默認設置按鈕
- ✅ **完整功能** - 主題配置、佈局切換、深色模式等所有原生功能保持不變

## 導入組件

```tsx | pure
import {SettingDrawer} from '@unikue/ant-buddy-pro';
```

## 使用示例

<code src="./demo.zh-TW.tsx"></code>

## 組件屬性

SettingDrawer 繼承了 pro-components SettingDrawer 的所有屬性，並新增了 2 個屬性：

| 屬性          | 描述           | 類型                | 默認值                                       |
|-------------|--------------|-------------------|-------------------------------------------|
| clazzPrefix | 組件的 CSS 類名前綴 | `string`          | `'abp-setting-drawer'`                    |
| triggerDom  | 自定義觸發 DOM 元素 | `React.ReactNode` | `<SkinOutlined style={{fontSize: 16}} />` |

此外，支持 pro-components SettingDrawer 的所有其他屬性，例如：
- `settings` - 當前設置
- `onSettingChange` - 設置變化回調
- `hideHintAlert` - 隱藏提示按鈕
- `hideCopyButton` - 隱藏複製按鈕
- 等等...
