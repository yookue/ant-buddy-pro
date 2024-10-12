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
import {IconSelect, ConsoleUtils} from '@yookue/ant-buddy-pro';
import {IconOptionMode} from '@yookue/ant-buddy-pro/form/IconSelect';


export default () => {
    const [optionMode, setOptionMode] = React.useState<IconOptionMode>('icon');
    const [themeInkBar, setThemeInkBar] = React.useState<boolean>(true);
    const [sceneInkBar, setSceneInkBar] = React.useState<boolean>(true);
    const [showSearch, setShowSearch] = React.useState<boolean>(true);
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
                            checked: showSearch,
                            disabled: optionMode === 'text',
                            onChange: (value) => {
                                setShowSearch(value);
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
                    fieldProps={{
                        notFoundContent: (<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='無數據'/>),
                        showSearch: showSearch,
                        onChange: (value) => {
                            ConsoleUtils.log(false, false, 'IconSelect', 'onChange 的值是 ' + value);
                        }
                    }}
                    tooltipCtrl={tooltipCtrl}
                    localeProps={{
                        search: '搜索',
                        outlined: '線框風格',
                        filled: '實底風格',
                        twotone: '雙色風格',
                        direction: '方向類',
                        suggestion: '建議類',
                        editor: '編輯類',
                        data: '數據類',
                        logo: '品牌類',
                        web: '網站類',
                    }}
                />
            </ProForm>
        </>
    );
}
