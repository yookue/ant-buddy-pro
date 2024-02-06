---
toc: content
---

## IconSelect

IconSelect，提供了一個可選擇圖標的下拉框。

### 導入組件

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
                    label='選項模式'
                    radioType='button'
                    fieldProps={{
                        value: optionMode,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setOptionMode(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '圖標', value: 'icon'},
                        {label: '文本', value: 'text'},
                    ]}
                />
            </ProForm.Group>
            <ProForm.Group>
                <ProFormSwitch
                    label='主題指示條'
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
                    label='場景指示條'
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
                placeholder='請選擇圖標'
                optionMode={optionMode}
                themeInkBar={themeInkBar}
                sceneInkBar={sceneInkBar}
                searchBox={searchBox}
                fieldProps={{
                    notFoundContent: (<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='無數據'/>),
                }}
                localeProps={{
                    searchBox: '搜索',
                    outlinedTheme: '線框風格',
                    filledTheme: '實底風格',
                    twotoneTheme: '雙色風格',
                    directionScene: '方向類',
                    suggestionScene: '建議類',
                    editorScene: '編輯類',
                    dataScene: '數據類',
                    logoScene: '品牌類',
                    webScene: '網站類',
                }}
                useTooltip={useTooltip}
            />
        </ProForm>
    );
}
```

### 組件屬性

#### IconSelectProps

<API src="@/form/IconSelect/index.tsx" hideTitle></API>
