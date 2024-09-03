/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License (the "License")
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */


import React from 'react';
import {Divider, Empty} from 'antd';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {IconSelect} from '@yookue/ant-buddy-pro';
import {IconOptionMode} from '@yookue/ant-buddy-pro/form/IconSelect';


export default () => {
    const [optionMode, setOptionMode] = React.useState<IconOptionMode>('icon');
    const [themeInkBar, setThemeInkBar] = React.useState<boolean>(true);
    const [sceneInkBar, setSceneInkBar] = React.useState<boolean>(true);
    const [searchBox, setSearchBox] = React.useState<boolean>(true);
    const [tooltipCtrl, setTooltipCtrl] = React.useState<boolean>(false);

    return (
        <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
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
                        onChange: (value) => {
                            setThemeInkBar(value);
                        }
                    }}
                />
                <ProFormSwitch
                    label='Scene Ink Bar'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: sceneInkBar,
                        disabled: optionMode === 'text',
                        onChange: (value) => {
                            setSceneInkBar(value);
                        }
                    }}
                />
                <ProFormSwitch
                    label='Search Box'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: searchBox,
                        disabled: optionMode === 'text',
                        onChange: (value) => {
                            setSearchBox(value);
                        }
                    }}
                />
                <ProFormSwitch
                    label='Tooltip Ctrl'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: tooltipCtrl,
                        disabled: optionMode === 'text',
                        onChange: (value) => {
                            setTooltipCtrl(value);
                        }
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
                tooltipCtrl={tooltipCtrl}
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
            />
        </ProForm>
    );
}
