---
toc: content
---

## TagInput

TagInput，提供了壹個可通過文本框增加的多標簽。

### 導入組件

```jsx | pure
import {TagInput} from '@yookue/ant-buddy-pro';
```

### 使用示例

```jsx
import React from 'react';
import {Button, Divider, message as messageApi} from 'antd';
import {FireOutlined, ClearOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {TagInput} from '@yookue/ant-buddy-pro';

export default () => {
    const [addable, setAddable] = React.useState(true);
    const [removeable, setRemoveable] = React.useState(false);
    const [performSubmit, setPerformSubmit] = React.useState(true);
    const tagInputRef = React.useRef(null);

    return (
        <ProForm
            layout='horizontal'
            autoFocusFirstInput={false}
            submitter={{
                searchConfig: {
                    submitText: '提交',
                    resetText: '重置',
                }
            }}
            onFinish={async (values) => {
                console.log(values);
                messageApi.success('您點擊了提交按鈕');
            }}
        >
            <ProForm.Group>
                <ProFormSwitch
                    label='可增加'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: addable,
                    }}
                    onChange={(value) => {
                        setAddable(value ? true : false);
                    }}
                />
                <ProFormSwitch
                    label='可移除'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: removeable,
                    }}
                    onChange={(value) => {
                        setRemoveable(value ? true : false);
                    }}
                />
                <ProFormSwitch
                    label='可提交'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    tooltip='查看 DOM 結構來區分不同'
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
                    設定
                </Button>
                <Button
                    icon={<ClearOutlined/>}
                    onClick={() => tagInputRef.current.setTagContents(undefined)}
                >
                    清空
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
        </ProForm>
    );
}
```

### 組件屬性

#### TagInputProps

<API src="@/form/TagInput/index.tsx" hideTitle></API>
