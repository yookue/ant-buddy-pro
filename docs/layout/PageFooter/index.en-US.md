---
toc: content
---

## PageFooter

Similar to [GlobalFooter](https://github.com/ant-design/pro-components/blob/v1/packages/layout/src/components/GlobalFooter/index.tsx) of [Ant Design Pro](https://pro.ant.design/), with more customization for CSS classes and styles.

### Import

```jsx | pure
import {PageFooter} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {PageFooter} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <PageFooter
            linkItems={[
                {
                    key: 'ant-buddy-pro',
                    content: 'Ant Buddy Pro',
                    href: 'https://github.com/yookue/ant-buddy-pro',
                    style: {
                        color: '#eba77a',
                    }
                }
            ]}
            copyright={'2023 Yookue Ltd'}
            containerStyle={{
                width: '100%',
                backgroundColor: '#e5f7ff',
                padding: 0,
                bottom: '6px',
            }}
            vesselStyle={{
                margin: '48px 0 6px 0',
                padding: '0 0',
            }}
            copyrightStyle={{
                color: '#443300'
            }}
        />
    );
}
```

### Properties

##### PageFooterProps

<API src="@/layout/PageFooter/index.tsx" hideTitle></API>
