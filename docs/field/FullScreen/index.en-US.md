---
toc: content
---

## FullScreen

FullScreen, provides an icon with the ability to toggle document full screen mode.

### Premise

Before use this component, you need to install [@ant-design/icons](https://github.com/ant-design/ant-design-icons) package first:

```bash
npm install @ant-design/icons --save
```

### Import

```jsx | pure
import {FullScreen} from '@yookue/ant-buddy-pro';
```

### Example

#### Using HTML Title

```jsx
import React from 'react';
import {Space} from 'antd';
import {FullScreen} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <Space>
            <span>
                <FullScreen enterTitle='Fullscreen' exitTitle='Exit Fullscreen'/>
            </span>
        </Space>
    );
}
```

#### Using Ant Design Tooltip and Wrapper

```jsx
import React from 'react';
import {Space} from 'antd';
import {FullScreen} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <Space>
            <FullScreen enterTitle='Fullscreen' exitTitle='Exit Fullscreen' useTooltip={true} useWrapper='div'/>
        </Space>
    );
}
```

### Properties

#### FullScreenProps

<API src="@/field/FullScreen/index.tsx" hideTitle></API>
