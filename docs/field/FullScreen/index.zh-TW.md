---
toc: content
---

## FullScreen

FullScreen 是壹個用來切換文檔全屏的圖標按鈕。

### 使用前提

要使用此組件，您需要先安裝 [@ant-design/icons](https://github.com/ant-design/ant-design-icons) 圖標組件包：

```bash
npm install @ant-design/icons --save
```

### 導入組件

```jsx | pure
import {FullScreen} from '@yookue/ant-buddy-pro';
```

### 使用示例

#### 使用 HTML Title

```jsx
import React from 'react';
import {Space} from 'antd';
import {FullScreen} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <Space>
            <span>
                <FullScreen enterTitle="全屏" exitTitle="退出全屏"/>
            </span>
        </Space>
    );
}
```

#### 使用 Ant Design Tooltip

```jsx
import React from 'react';
import {Space} from 'antd';
import {FullScreen} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <Space>
            <span>
                <FullScreen enterTitle="全屏" exitTitle="退出全屏" useTooltip={true}/>
            </span>
        </Space>
    );
}
```

### 組件屬性

#### FullScreenProps

<API src="@/field/FullScreen/index.tsx" hideTitle></API>
