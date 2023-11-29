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
import {Radio, Divider} from 'antd';
import {AppstoreOutlined} from '@ant-design/icons';
import {ApartTitle} from '@yookue/ant-buddy-pro';

export default () => {
    const [ornamentPos, setOrnamentPos] = React.useState('before');

    return (
        <>
            <div>
                <span style={{paddingRight: '20px'}}>装饰物位置：</span>
                <Radio.Group
                    name='ornamentPos'
                    value={ornamentPos?.toString()}
                    defaultValue='before'
                    buttonStyle='solid'
                    onChange={event => {
                        setOrnamentPos(event.target?.value === 'false' ? false : event.target?.value);
                    }}
                >
                    <Radio.Button value='before'>前</Radio.Button>
                    <Radio.Button value='after'>后</Radio.Button>
                    <Radio.Button value='false'>无</Radio.Button>
                </Radio.Group>
            </div>
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
