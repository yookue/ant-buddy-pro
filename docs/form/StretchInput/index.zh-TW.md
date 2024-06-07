---
toc: content
---

## StretchInput

StretchInput，提供了一個可以動態拉伸的文本框。

典型的應用場景是，顯示一個小的搜索框或搜索圖標，當點擊它時拉伸顯示它。

### 導入組件

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
            <ProForm layout='horizontal' submitter={false}>
                <ProFormRadio.Group
                    label='折疊類型'
                    radioType='button'
                    fieldProps={{
                        value: collapseType,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setCollapseType(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '默認', value: 'default'},
                        {label: '自定義', value: 'custom'},
                    ]}
                />
            </ProForm>
            <Divider/>
            <div style={{textAlign: 'right'}}>
                <StretchInput
                    name='foobar'
                    placeholder='請點擊此項'
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

### 組件屬性

#### StretchInputProps

<API src="@/form/StretchInput/index.tsx" hideTitle></API>
