---
toc: content
---

## FoldSection

Similar to [Collapse](https://4x.ant.design/components/collapse/) of [Ant Design](https://ant.design/), with only one header and one panel.

### Premise

<Alert type='info'>
  Before use this component, you need to install <a href='https://github.com/ant-design/ant-design-icons' target='_blank'>@ant-design/icons</a> package first if you're using the default <b><i>`headerOpenedDom`/`headerClosedDom`</i></b> attribute:
</Alert>

```bash
npm install @ant-design/icons --save
```

### Import

```jsx | pure
import {FoldSection} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Empty, Divider} from 'antd';
import {AppstoreOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {FoldSection} from '@yookue/ant-buddy-pro';

export default () => {
    const [ornamentPos, setOrnamentPos] = React.useState('before');
    const [collapsePos, setCollapsePos] = React.useState('after');
    const [presetStyle, setPresetStyle] = React.useState('default');
    const [tooltipCtrl, setTooltipCtrl] = React.useState(false);

    return (
        <>
            <ProForm layout='horizontal' submitter={false}>
                <ProFormRadio.Group
                    label='Ornament Position'
                    radioType='button'
                    fieldProps={{
                        value: ornamentPos?.toString(),
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setOrnamentPos(event.target?.value === 'false' ? false : event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Before', value: 'before'},
                        {label: 'After', value: 'after'},
                        {label: 'False', value: 'false'},
                    ]}
                />
                <ProFormRadio.Group
                    label='Collapse Position'
                    radioType='button'
                    fieldProps={{
                        value: collapsePos?.toString(),
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setCollapsePos(event.target?.value === 'false' ? false : event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Before', value: 'before'},
                        {label: 'After', value: 'after'},
                        {label: 'False', value: 'false'},
                    ]}
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
                        {label: 'Classic', value: 'classic'},
                        {label: 'False', value: 'false'},
                    ]}
                />
                <ProFormSwitch
                    label='Tooltip Ctrl'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: tooltipCtrl,
                    }}
                    onChange={(value) => {
                        setTooltipCtrl(value ? true : false);
                    }}
                />
            </ProForm>
            <Divider/>
            <FoldSection
                headerOrnament={<AppstoreOutlined/>}
                headerOrnamentPos={ornamentPos}
                headerContent='FoldSection header caption'
                headerCollapsePos={collapsePos}
                headerOpenedHint='Collapse'
                headerClosedHint='Expend'
                panelPlaceholder={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='No data'/>}
                presetStyle={presetStyle}
                tooltipCtrl={tooltipCtrl}
            />
        </>
    );
}
```

### Properties

##### FoldSectionProps

<API src="@/layout/FoldSection/index.tsx" hideTitle></API>
