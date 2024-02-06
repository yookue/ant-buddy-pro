---
toc: content
---

## IconSelect

IconSelect，提供了一个可选择图标的下拉框。

### 导入组件

```jsx | pure
import {IconSelect} from '@yookue/ant-buddy-pro';
```

### 使用示例

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
                    label='选项模式'
                    radioType='button'
                    fieldProps={{
                        value: optionMode,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setOptionMode(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '图标', value: 'icon'},
                        {label: '文本', value: 'text'},
                    ]}
                />
            </ProForm.Group>
            <ProForm.Group>
                <ProFormSwitch
                    label='主题指示条'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: themeInkBar,
                        disabled: optionMode === 'text',
                    }}
                    onChange={(value) => {
                        setThemeInkBar(value ? true : false);
                    }}
                />
                <ProFormSwitch
                    label='场景指示条'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: sceneInkBar,
                        disabled: optionMode === 'text',
                    }}
                    onChange={(value) => {
                        setSceneInkBar(value ? true : false);
                    }}
                />
                <ProFormSwitch
                    label='搜索框'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: searchBox,
                        disabled: optionMode === 'text',
                    }}
                    onChange={(value) => {
                        setSearchBox(value ? true : false);
                    }}
                />
                <ProFormSwitch
                    label='Tooltip 控件'
                    checkedChildren='是'
                    unCheckedChildren='否'
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
                placeholder='请选择图标'
                optionMode={optionMode}
                themeInkBar={themeInkBar}
                sceneInkBar={sceneInkBar}
                searchBox={searchBox}
                fieldProps={{
                    notFoundContent: (<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='无数据'/>),
                }}
                localeProps={{
                    searchBox: '搜索',
                    outlinedTheme: '线框风格',
                    filledTheme: '实底风格',
                    twotoneTheme: '双色风格',
                    directionScene: '方向类',
                    suggestionScene: '建议类',
                    editorScene: '编辑类',
                    dataScene: '数据类',
                    logoScene: '品牌类',
                    webScene: '网站类',
                }}
                useTooltip={useTooltip}
            />
        </ProForm>
    );
}
```

### 组件属性

#### IconSelectProps

<API src="@/form/IconSelect/index.tsx" hideTitle></API>
