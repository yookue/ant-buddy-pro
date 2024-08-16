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
                    label='版权图标'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: copyrightIcon,
                    }}
                    onChange={(value) => {
                        setCopyrightIcon(value ? true : false);
                    }}
                />
                <ProFormRadio.Group
                    label='预设样式'
                    radioType='button'
                    fieldProps={{
                        value: presetStyle?.toString(),
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setPresetStyle(event.target?.value === 'false' ? false : event.target?.value);
                        }
                    }}
                    options={[
                        {label: '默认', value: 'default'},
                        {label: '紧凑', value: 'compact'},
                        {label: '无', value: 'false'},
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
                presetStyle={presetStyle}
            />
        </>
    );
}
```

### 组件属性

##### PageFooterProps

<API src="@/layout/PageFooter/index.tsx" hideTitle></API>
