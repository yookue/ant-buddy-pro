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
            links={[
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
                backgroundColor: '#e5f7ff',
            }}
            copyrightStyle={{
                color: '#443300',
            }}
            usePresetStyle='compact'
        />
    );
}
```

### Properties

##### PageFooterProps

<API src="@/layout/PageFooter/index.tsx" hideTitle></API>
