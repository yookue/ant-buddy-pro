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
        <>
            <ProForm
                name='IconSelect_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
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
                            onChange: (value) => {
                                setThemeInkBar(value);
                            }
                        }}
                    />
                    <ProFormSwitch
                        label='場景指示條'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: sceneInkBar,
                            disabled: optionMode === 'text',
                            onChange: (value) => {
                                setSceneInkBar(value);
                            }
                        }}
                    />
                    <ProFormSwitch
                        label='搜索框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: searchBox,
                            disabled: optionMode === 'text',
                            onChange: (value) => {
                                setSearchBox(value);
                            }
                        }}
                    />
                    <ProFormSwitch
                        label='Tooltip 控件'
                        checkedChildren='是'
                        unCheckedChildren='否'
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
                    placeholder='請選擇圖標'
                    optionMode={optionMode}
                    themeInkBar={themeInkBar}
                    sceneInkBar={sceneInkBar}
                    searchBox={searchBox}
                    fieldProps={{
                        notFoundContent: (<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='無數據'/>),
                    }}
                    tooltipCtrl={tooltipCtrl}
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
                />
            </ProForm>
        </>
    );
}
