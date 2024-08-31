---
toc: content
---

## TagInput

TagInput, provides some tags with a text input box with addable capability.

### Import

```jsx | pure
import {TagInput} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Button, Divider, message as messageApi} from 'antd';
import {FireOutlined, ClearOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {TagInput} from '@yookue/ant-buddy-pro';

export default () => {
    const [addable, setAddable] = React.useState(false);
    const [removeable, setRemoveable] = React.useState(false);
    const [performSubmit, setPerformSubmit] = React.useState(true);
    const tagInputRef = React.useRef(null);

    return (
        <ProForm
            layout='horizontal'
            autoFocusFirstInput={false}
            submitter={{
                render: (props, doms) => {
                    return [
                        <Button type='primary' onClick={() => props.form?.submit?.()}>Submit</Button>
                    ];
                }
            }}
            onFinish={async (values) => {
                console.log(values);
                messageApi.success('Yep, you\'ve clicked the submit button');
            }}
        >
            <ProForm.Group>
                <ProFormSwitch
                    label='Addable'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: addable,
                    }}
                    onChange={(value) => {
                        setAddable(value ? true : false);
                    }}
                />
                <ProFormSwitch
                    label='Removeable'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: removeable,
                    }}
                    onChange={(value) => {
                        setRemoveable(value ? true : false);
                    }}
                />
                <ProFormSwitch
                    label='Perform Submit'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    tooltip='See DOM elements for difference'
                    fieldProps={{
                        checked: performSubmit,
                    }}
                    onChange={(value) => {
                        setPerformSubmit(value ? true : false);
                    }}
                />
            </ProForm.Group>
            <ProForm.Group>
                <Button
                    icon={<FireOutlined/>}
                    onClick={() => tagInputRef.current.setTagContents(['foo', 'bar'])}
                >
                    Set
                </Button>
                <Button
                    icon={<ClearOutlined/>}
                    onClick={() => tagInputRef.current.setTagContents(undefined)}
                >
                    Clear
                </Button>
            </ProForm.Group>
            <Divider/>
            <TagInput
                ref={tagInputRef}
                name='foobar'
                addable={addable}
                performSubmit={performSubmit}
                fulfilTagItems={[
                    {
                        color: 'volcano',
                        content: 'foo',
                    },
                    {
                        color: 'orange',
                        content: 'bar',
                    },
                    {
                        color: 'green',
                        content: 'hello',
                    },
                    {
                        color: 'blue',
                        content: 'world',
                    }
                ]}
                fulfilTagShareProps={{
                    closable: removeable,
                }}
            />
            <Divider/>
        </ProForm>
    );
}
```

### Properties

#### TagInputProps

<API src="@/form/TagInput/index.tsx" hideTitle></API>
