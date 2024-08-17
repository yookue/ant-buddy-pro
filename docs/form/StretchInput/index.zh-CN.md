---
toc: content
---

## StretchInput

StretchInput，提供了一个可以动态拉伸的文本框。

典型的应用场景是，显示一个小的搜索框或搜索图标，当点击它时拉伸显示它。

### 导入组件

```jsx | pure
import {StretchInput} from '@yookue/ant-buddy-pro';
```

### 使用示例

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
            <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
                <ProFormRadio.Group
                    label='折叠类型'
                    radioType='button'
                    fieldProps={{
                        value: collapseType,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setCollapseType(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '默认', value: 'default'},
                        {label: '自定义', value: 'custom'},
                    ]}
                />
            </ProForm>
            <Divider/>
            <div style={{textAlign: 'right'}}>
                <StretchInput
                    name='foobar'
                    placeholder='请点击此项'
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

### 组件属性

#### StretchInputProps

<API src="@/form/StretchInput/index.tsx" hideTitle></API>
