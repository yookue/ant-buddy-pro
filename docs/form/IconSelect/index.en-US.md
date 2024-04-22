---
toc: content
---

## IconSelect

IconSelect, provides a select box that displaying icons for choosing.

### Import

```jsx | pure
import {IconSelect} from '@yookue/ant-buddy-pro';
```

### Example

```jsx
import React from 'react';
import {Divider, Empty} from 'antd';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {IconSelect} from '@yookue/ant-buddy-pro';

export default () => {
    const [optionMode, setOptionMode] = React.useState('icon');
    const [themeInkBar, setThemeInkBar] = React.useState(true);
    const [sceneInkBar, setSceneInkBar] = React.useState(true);
    const [searchBox, setSearchBox] = React.useState(true);
    const [useTooltip, setUseTooltip] = React.useState(false);

    return (
        <ProForm layout='horizontal' submitter={false}>
            <ProForm.Group>
                <ProFormRadio.Group
                    label='Option Mode'
                    radioType='button'
                    fieldProps={{
                        value: optionMode,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setOptionMode(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Icon', value: 'icon'},
                        {label: 'Text', value: 'text'},
                    ]}
                />
            </ProForm.Group>
            <ProForm.Group>
                <ProFormSwitch
                    label='Theme Ink Bar'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: themeInkBar,
                        disabled: optionMode === 'text',
                    }}
                    onChange={(value) => {
                        setThemeInkBar(value ? true : false);
                    }}
                />
                <ProFormSwitch
                    label='Scene Ink Bar'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: sceneInkBar,
                        disabled: optionMode === 'text',
                    }}
                    onChange={(value) => {
                        setSceneInkBar(value ? true : false);
                    }}
                />
                <ProFormSwitch
                    label='Search Box'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: searchBox,
                        disabled: optionMode === 'text',
                    }}
                    onChange={(value) => {
                        setSearchBox(value ? true : false);
                    }}
                />
                <ProFormSwitch
                    label='Use Tooltip'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: useTooltip,
                        disabled: optionMode === 'text',
                    }}
                    onChange={(value) => {
                        setUseTooltip(value ? true : false);
                    }}
                />
            </ProForm.Group>
            <Divider/>
            <IconSelect
                name='DemoIcon'
                placeholder='Please select an icon'
                optionMode={optionMode}
                themeInkBar={themeInkBar}
                sceneInkBar={sceneInkBar}
                searchBox={searchBox}
                fieldProps={{
                    notFoundContent: (<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='No data'/>),
                }}
                localeProps={{
                    searchBox: 'Search',
                    outlinedTheme: 'Outlined',
                    filledTheme: 'Filled',
                    twotoneTheme: 'Two Tone',
                    directionScene: 'Direction',
                    suggestionScene: 'Suggestion',
                    editorScene: 'Editor',
                    dataScene: 'Data',
                    logoScene: 'Logo',
                    webScene: 'Web',
                }}
                useTooltip={useTooltip}
            />
        </ProForm>
    );
}
```

### Properties

#### IconSelectProps

<API src="@/form/IconSelect/index.tsx" hideTitle></API>
