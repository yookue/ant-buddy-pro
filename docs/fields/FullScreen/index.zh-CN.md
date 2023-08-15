## FullScreen

FullScreen 是一个用来切换文档全屏的图标按钮。

### 使用前提

要使用此组件，您需要先安装 [@ant-design/icons](https://github.com/ant-design/ant-design-icons) 图标组件包：

```bash
npm install --save @ant-design/icons
```

### 导入组件

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
