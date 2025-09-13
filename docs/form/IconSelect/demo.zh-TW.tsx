/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
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
import {IconSelect, ConsoleUtils} from '@unikue/ant-buddy-pro';
import {IconOptionMode} from '@unikue/ant-buddy-pro/form/IconSelect';
import {type TabsPosition} from '@unikue/ant-buddy-pro/layout/CardTabs';


export default () => {
    const [optionMode, setOptionMode] = React.useState<IconOptionMode>('icon');
    const [tabPos, setTabPos] = React.useState<TabsPosition>('top');
    const [themeInkBar, setThemeInkBar] = React.useState<boolean>(true);
    const [sceneInkBar, setSceneInkBar] = React.useState<boolean>(true);
    const [searchBox, setSearchBox] = React.useState<boolean>(true);
    const [tooltipCtrl, setTooltipCtrl] = React.useState<boolean>(false);

    return (
        <>
            <ProForm
                name='IconSelect_demo.zh-TW'
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
                <ProFormRadio.Group
                    label='Tab 位置'
                    radioType='button'
                    fieldProps={{
                        value: tabPos,
                        buttonStyle: 'solid',
                        disabled: optionMode === 'text',
                        onChange: (event) => {
                            setTabPos(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '上', value: 'top'},
                        {label: '下', value: 'bottom'},
                        {label: '左', value: 'left'},
                        {label: '右', value: 'right'},
                        {label: '上-末尾', value: 'top-end'},
                        {label: '下-末尾', value: 'bottom-end'},
                    ]}
                />
                <ProForm.Group>
                    <ProFormSwitch
                        label='主題指示條'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: themeInkBar,
                            disabled: optionMode === 'text',
                            onChange: setThemeInkBar,
                        }}
                    />
                    <ProFormSwitch
                        label='場景指示條'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: sceneInkBar,
                            disabled: optionMode === 'text',
                            onChange: setSceneInkBar,
                        }}
                    />
                    <ProFormSwitch
                        label='搜索框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: searchBox,
                            disabled: optionMode === 'text',
                            onChange: setSearchBox,
                        }}
                    />
                    <ProFormSwitch
                        label='Tooltip 控件'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: tooltipCtrl,
                            disabled: optionMode === 'text',
                            onChange: setTooltipCtrl,
                        }}
                    />
                </ProForm.Group>
                <Divider/>
                <IconSelect
                    name='DemoIcon'
                    placeholder='請選擇圖標'
                    fieldProps={{
                        notFoundContent: (<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='無數據'/>),
                        onChange: (value) => {
                            ConsoleUtils.logTimestamp(false, false, 'IconSelect', 'onChange value = ' + value);
                        }
                    }}
                    rules={[
                        {
                            required: true,
                            message: '請輸入示例字段',
                        },
                    ]}
                    optionMode={optionMode}
                    themeInkBar={themeInkBar}
                    sceneInkBar={sceneInkBar}
                    tabsProps={{
                        tabPosition: tabPos,
                    }}
                    searchBox={searchBox}
                    tooltipCtrl={tooltipCtrl}
                    locale='zh_TW'
                />
            </ProForm>
        </>
    );
}
