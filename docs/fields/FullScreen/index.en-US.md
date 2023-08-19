---
toc: content
---

## FullScreen

FullScreen, provides an icon with the ability to toggle document full screen mode.

### Premise

Before use this component, you need to install [@ant-design/icons](https://github.com/ant-design/ant-design-icons) package first:

```bash
npm install --save @ant-design/icons
```

### Import

```jsx | pure
import {FullScreen} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Space} from 'antd';
import {FullScreen} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <Space>
            <span title="Fullscreen">
                <FullScreen/>
            </span>
        </Space>
    );
}
```
