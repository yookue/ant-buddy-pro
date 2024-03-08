---
toc: content
---

## CodePreview

CodePreview component, provides a simple segment for displaying code snippet, with a title and a text, and also you can customize it completely with the `children` prop.

### Import

```jsx | pure
import {CodePreview} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {CodePreview} from '@yookue/ant-buddy-pro';

export default () => {
    return (
        <CodePreview
            titleContent='How to install this package?'
            textContent='npm install @yookue/ant-buddy-pro -S'
            titleProps={{
                level: 5,
            }}
            textProps={{
                copyable: true,
            }}
        />
    );
}
```

### Properties

#### CodePreviewProps

<API src="@/layout/CodePreview/index.tsx" hideTitle></API>
