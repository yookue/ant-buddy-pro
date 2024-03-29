---
toc: content
---

## ApartTitle

ApartTitle 组件，可展示一个带有装饰图标的标题栏，用于分割页面区域。

### Import

```jsx | pure
import {ApartTitle} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Divider} from 'antd';
import {AppstoreOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio} from '@ant-design/pro-form';
import {ApartTitle} from '@yookue/ant-buddy-pro';

export default () => {
    const [ornamentPos, setOrnamentPos] = React.useState('before');

    return (
        <>
            <ProForm layout='horizontal' submitter={false}>
                <ProFormRadio.Group
                    label='装饰物位置'
                    radioType='button'
                    fieldProps={{
                        value: ornamentPos?.toString(),
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setOrnamentPos(event.target?.value === 'false' ? false : event.target?.value);
                        }
                    }}
                    options={[
                        {label: '前', value: 'before'},
                        {label: '后', value: 'after'},
                        {label: '无', value: 'false'},
                    ]}
                />
            </ProForm>
            <Divider/>
            <ApartTitle
                ornament={<AppstoreOutlined/>}
                ornamentPos={ornamentPos}
                content='ApartTitle 头部标题'
            />
        </>
    );
}
```

### 组件属性

##### ApartTitleProps

<API src="@/layout/ApartTitle/index.tsx" hideTitle></API>
