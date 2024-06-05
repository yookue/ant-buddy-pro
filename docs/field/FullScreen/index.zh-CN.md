---
toc: content
---

## FullScreen

FullScreen 是一个用来切换文档全屏的图标按钮。

### 使用前提

要使用此组件，您需要先安装 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 图标组件包：

```bash
npm install @ant-design/icons --save
```

### 导入组件

```jsx | pure
import {FullScreen} from '@yookue/ant-buddy-pro';
```

### 使用示例

#### 使用 HTML Title

```jsx
import React from 'react';
import {FullScreen} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <FullScreen enterHint='全屏' exitHint='退出全屏'/>
    );
}
```

#### 使用 Ant Tooltip

```jsx
import React from 'react';
import {FullScreen} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <FullScreen enterHint='全屏' exitHint='退出全屏' useTooltip={true}/>
    );
}
```

### 组件属性

#### FullScreenProps

<API src="@/field/FullScreen/index.tsx" hideTitle></API>
