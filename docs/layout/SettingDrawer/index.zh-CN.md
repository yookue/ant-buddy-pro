---
toc: content
---

## SettingDrawer

与 [Ant Design Pro](https://pro.ant.design/) 的 [SettingDrawer](https://github.com/ant-design/pro-components/blob/v1/packages/layout/src/components/SettingDrawer/index.tsx) 类似, 但可以放置在任何位置，比如全局顶栏。

### 导入组件

```jsx | pure
import {SettingDrawer} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {SettingDrawer} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <SettingDrawer hideHintAlert hideCopyButton/>
    );
}
```

### 组件属性

参见 [SettingDrawer](https://github.com/ant-design/pro-components/blob/v1/packages/layout/src/components/SettingDrawer/index.tsx)
