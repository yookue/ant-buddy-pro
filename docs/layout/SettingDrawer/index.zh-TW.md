---
toc: content
---

## SettingDrawer

與 [Ant Design Pro](https://pro.ant.design/) 的 [SettingDrawer](https://github.com/ant-design/pro-components/blob/v1/packages/layout/src/components/SettingDrawer/index.tsx) 類似, 但可以放置在任何位置，比如全局頂欄。

### 導入組件

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

### 組件屬性

參見 [SettingDrawer](https://github.com/ant-design/pro-components/blob/v1/packages/layout/src/components/SettingDrawer/index.tsx)
