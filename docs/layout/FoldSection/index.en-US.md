---
toc: content
---

## FoldSection

Similar to [Collapse](https://4x.ant.design/components/collapse/) of [Ant Design](https://ant.design/), with only one header and one panel.

### Premise

<Alert type='info'>
  Before use this component, you need to install <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> package first if you're using the default <b><i>`headerOpenedDom`/`headerClosedDom`</i></b> attribute:
</Alert>

```bash
npm install @ant-design/icons --save
```

### Import

```jsx | pure
import {FoldSection} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {AppstoreOutlined} from '@ant-design/icons';
import {FoldSection} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <FoldSection
            headerOrnament={<AppstoreOutlined/>}
            headerContent='FoldSection header caption'
            containerStyle={{
                border: '1px dashed #ebedf1',
            }}
            headerStyle={{
                backgroundColor: '#f9fafb',
            }}
            panelStyle={{
                borderTop: '1px dashed #ebedf1'
            }}
        />
    );
}
```

### Properties

##### FoldSectionProps

<API src="@/layout/FoldSection/index.tsx" hideTitle></API>
