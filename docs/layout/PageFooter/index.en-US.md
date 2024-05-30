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
import {Divider} from 'antd';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {PageFooter} from '@yookue/ant-buddy-pro';

export default () => {
    const [presetStyle, setPresetStyle] = React.useState('compact');
    const [copyrightIcon, setCopyrightIcon] = React.useState(true);

    return (
        <>
            <ProForm layout='horizontal' submitter={false}>
                <ProFormSwitch
                    label='Copyright Icon'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: copyrightIcon,
                    }}
                    onChange={(value) => {
                        setCopyrightIcon(value ? true : false);
                    }}
                />
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
                        {label: 'Compact', value: 'compact'},
                        {label: 'False', value: 'false'},
                    ]}
                />
            </ProForm>
            <Divider/>
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
                copyright={`${new Date().getFullYear()} Yookue Ltd`}
                copyrightIcon={copyrightIcon}
                containerStyle={{
                    backgroundColor: '#e5f7ff',
                }}
                copyrightStyle={{
                    color: '#443300',
                }}
                usePresetStyle={presetStyle}
            />
        </>
    );
}
```

### Properties

##### PageFooterProps

<API src="@/layout/PageFooter/index.tsx" hideTitle></API>
