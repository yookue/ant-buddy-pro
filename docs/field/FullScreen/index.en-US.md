---
toc: content
---

## FullScreen

FullScreen, provides an icon with the ability to toggle document full screen mode.

### Premise

<Alert type='info'>
  Before use this component, you need to install <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> package first:
</Alert>

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
import {FullScreen} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <FullScreen enterHint='Fullscreen' exitHint='Exit Fullscreen'/>
    );
}
```

#### Using Ant Tooltip

```jsx
import React from 'react';
import {FullScreen} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <FullScreen enterHint='Fullscreen' exitHint='Exit Fullscreen' useTooltip={true}/>
    );
}
```

### Properties

#### FullScreenProps

<API src="@/field/FullScreen/index.tsx" hideTitle></API>
