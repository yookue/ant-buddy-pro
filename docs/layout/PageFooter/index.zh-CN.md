---
toc: content
---

## PageFooter

与 [Ant Design Pro](https://pro.ant.design/) 的 [GlobalFooter](https://github.com/ant-design/pro-components/blob/v1/packages/layout/src/components/GlobalFooter/index.tsx) 类似, 但支持更多的自定义 CSS 样式。

### 导入组件

```jsx | pure
import {PageFooter} from '@yookue/ant-buddy-pro';
```

### 使用示例

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

### 组件属性

##### PageFooterProps

<API src="@/layout/PageFooter/index.tsx" hideTitle></API>
