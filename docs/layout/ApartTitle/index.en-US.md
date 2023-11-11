---
toc: content
---

## ApartTitle

ApartTitle component, displays a title bar with an ornament, in order to separate page areas.

### Import

```jsx | pure
import {ApartTitle} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Radio} from 'antd';
import {AppstoreOutlined} from '@ant-design/icons';
import {ApartTitle} from '@yookue/ant-buddy-pro';

export default () => {
    const [ornamentPos, setOrnamentPos] = React.useState('before');

    return (
        <>
            <div>
                <span style={{paddingRight: '20px'}}>Ornament Position:</span>
                <Radio.Group
                    name='ornamentPos'
                    value={ornamentPos?.toString()}
                    defaultValue='before'
                    buttonStyle='solid'
                    onChange={event => {
                        setOrnamentPos(event.target?.value === 'false' ? false : event.target?.value);
                    }}
                >
                    <Radio.Button value='before'>Before</Radio.Button>
                    <Radio.Button value='after'>After</Radio.Button>
                    <Radio.Button value='false'>False</Radio.Button>
                </Radio.Group>
            </div>
            <br/><br/>
            <ApartTitle
                ornament={<AppstoreOutlined/>}
                ornamentPos={ornamentPos}
                content='ApartTitle header caption'
            />
        </>
    );
}
```

### Properties

##### ApartTitleProps

<API src="@/layout/ApartTitle/index.tsx" hideTitle></API>
