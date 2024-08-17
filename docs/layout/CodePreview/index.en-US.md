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
import {Divider} from 'antd';
import {ProForm, ProFormRadio} from '@ant-design/pro-form';
import {CodePreview} from '@yookue/ant-buddy-pro';

export default () => {
    const [presetStyle, setPresetStyle] = React.useState('default');

    return (
        <>
            <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
                <ProFormRadio.Group
                    label='Preset Style'
                    radioType='button'
                    fieldProps={{
                        value: presetStyle?.toString(),
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setPresetStyle(event.target?.value === 'false' ? false : event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Default', value: 'default'},
                        {label: 'False', value: 'false'},
                    ]}
                />
            </ProForm>
            <Divider/>
            <CodePreview
                titleContent='How to install this package?'
                textContent='npm install @yookue/ant-buddy-pro -S'
                titleProps={{
                    level: 5,
                }}
                textProps={{
                    copyable: true,
                }}
                presetStyle={presetStyle}
            />
        </>
    );
}
```

### Properties

#### CodePreviewProps

<API src="@/layout/CodePreview/index.tsx" hideTitle></API>
