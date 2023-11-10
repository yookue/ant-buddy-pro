---
toc: content
---

## FoldSection

與 [Ant Design](https://ant.design/) 的 [Collapse](https://4x.ant.design/components/collapse/) 組件類似，但只有一個標題欄和一個面板。

### Premise

<Alert type='info'>
  如果您使用默認的 <b><i>`headerOpenedDom`/`headerClosedDom`</i></b> 屬性，要使用此組件，您需要先安裝 <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> 圖標組件包：
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
            headerContent='FoldSection 頭部標題'
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
