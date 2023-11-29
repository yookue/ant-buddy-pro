---
toc: content
---

## ApartTitle

ApartTitle 組件，可展示壹個帶有裝飾圖標的標題欄，用於分割頁面區域。

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
                <span style={{paddingRight: '20px'}}>裝飾物位置：</span>
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
                    <Radio.Button value='false'>無</Radio.Button>
                </Radio.Group>
            </div>
            <Divider/>
            <ApartTitle
                ornament={<AppstoreOutlined/>}
                ornamentPos={ornamentPos}
                content='ApartTitle 頭部標題'
            />
        </>
    );
}
```

### 組件屬性

##### ApartTitleProps

<API src="@/layout/ApartTitle/index.tsx" hideTitle></API>
