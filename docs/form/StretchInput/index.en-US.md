---
toc: content
---

## StretchInput

StretchInput, provides a text input box with stretch capability when focus it.

The typical scenario is, displaying a small search box or an icon, and stretching it when click on it.

### Import

```jsx | pure
import {StretchInput} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Divider} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio} from '@ant-design/pro-form';
import {StretchInput} from '@yookue/ant-buddy-pro';

export default () => {
    const [collapseType, setCollapseType] = React.useState('default');

    return (
        <>
            <ProForm layout='horizontal' submitter={false}>
                <ProFormRadio.Group
                    label='Collapse Type'
                    radioType='button'
                    fieldProps={{
                        value: collapseType,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setCollapseType(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Default', value: 'default'},
                        {label: 'Custom', value: 'custom'},
                    ]}
                />
            </ProForm>
            <Divider/>
            <div style={{textAlign: 'right'}}>
                <StretchInput
                    name='foobar'
                    placeholder='Please click this field'
                    fieldProps={{
                        prefix: <SearchOutlined/>,
                        style: {
                            borderRadius: '16px',
                            width: '50%',
                        }
                    }}
                    collapseDom={collapseType !== 'custom' ? undefined : (
                        <span style={{cursor: 'pointer'}}>
                            <SearchOutlined style={{width: '32px', height: '32px'}}/>
                        </span>
                    )}
                    stretchStyle={{
                        borderRadius: '16px',
                        width: '100%',
                    }}
                />
            </div>
        </>
    );
}
```

### Properties

#### StretchInputProps

<API src="@/form/StretchInput/index.tsx" hideTitle></API>
