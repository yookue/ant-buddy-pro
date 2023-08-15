## FullScreen

FullScreen 是壹個用來切換文檔全屏的圖標按鈕。

### 使用前提

要使用此組件，您需要先安裝 [@ant-design/icons](https://github.com/ant-design/ant-design-icons) 圖標組件包：

```bash
npm install --save @ant-design/icons
```

### 導入組件

```jsx | pure
import {FullScreen} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {Space} from 'antd';
import {FullScreen} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <Space>
            <span title="全屏">
                <FullScreen/>
            </span>
        </Space>
    );
}
```
