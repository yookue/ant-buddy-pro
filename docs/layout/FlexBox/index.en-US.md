---
toc: content
---

## FlexBox

FlexBox component, a flex layout container for alignment.

### Import

```jsx | pure
import {FlexBox} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Button, Divider} from 'antd';
import {ProForm, ProFormRadio} from '@ant-design/pro-form';
import {FlexBox} from '@yookue/ant-buddy-pro';

export default () => {
    const [justifyContent, setJustifyContent] = React.useState('center');
    const [alignItems, setAlignItems] = React.useState('center');
    const [gap, setGap] = React.useState('middle');

    return (
        <>
            <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
                <ProFormRadio.Group
                    label='Justify Content'
                    radioType='button'
                    fieldProps={{
                        value: justifyContent,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setJustifyContent(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Start', value: 'start'},
                        {label: 'Center', value: 'center'},
                        {label: 'End', value: 'end'},
                        {label: 'Space-Between', value: 'space-between'},
                        {label: 'Apace-Around', value: 'space-around'},
                        {label: 'Space-Evenly', value: 'space-evenly'},
                    ]}
                />
                <ProFormRadio.Group
                    label='Align Items'
                    radioType='button'
                    fieldProps={{
                        value: alignItems,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setAlignItems(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Start', value: 'start'},
                        {label: 'Center', value: 'center'},
                        {label: 'End', value: 'end'},
                        {label: 'Stretch', value: 'stretch'},
                    ]}
                />
                <ProFormRadio.Group
                    label='Gap'
                    radioType='button'
                    fieldProps={{
                        value: gap,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setGap(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Small', value: 'small'},
                        {label: 'Middle', value: 'middle'},
                        {label: 'Large', value: 'large'},
                        {label: 'Customize', value: '48px'},
                    ]}
                />
            </ProForm>
            <Divider/>
            <FlexBox
                justifyContent={justifyContent}
                alignItems={alignItems}
                gap={gap}
                containerStyle={{
                    height: '160px',
                }}
            >
                <Button disabled={true}>Button</Button>
                <Button disabled={true}>Button</Button>
                <Button disabled={true}>Button</Button>
                <Button disabled={true}>Button</Button>
            </FlexBox>
        </>
    );
}
```

### Properties

#### FlexBoxProps

<API src="@/layout/FlexBox/index.tsx" hideTitle></API>
