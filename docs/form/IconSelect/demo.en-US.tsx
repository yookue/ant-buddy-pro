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
import {Divider, Empty, message as messageApi} from 'antd';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {IconSelect, ConsoleUtils} from '@yookue/ant-buddy-pro';
import {IconOptionMode} from '@yookue/ant-buddy-pro/form/IconSelect';
import {type TabsPosition} from '@yookue/ant-buddy-pro/layout/CardTabs';


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
                name='IconSelect_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={{
                    searchConfig: {
                        submitText: 'Submit',
                        resetText: 'Reset',
                    }
                }}
                onFinish={async () => {
                    messageApi.success(`Yep, you've clicked the submit button`);
                }}
            >
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
                <ProFormRadio.Group
                    label='Tab Position'
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
                        {label: 'Top', value: 'top'},
                        {label: 'Bottom', value: 'bottom'},
                        {label: 'Left', value: 'left'},
                        {label: 'Right', value: 'right'},
                        {label: 'Top-End', value: 'top-end'},
                        {label: 'Bottom-End', value: 'bottom-end'},
                    ]}
                />
                <ProForm.Group>
                    <ProFormSwitch
                        label='Theme Ink Bar'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: themeInkBar,
                            disabled: optionMode === 'text',
                            onChange: setThemeInkBar,
                        }}
                    />
                    <ProFormSwitch
                        label='Scene Ink Bar'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: sceneInkBar,
                            disabled: optionMode === 'text',
                            onChange: setSceneInkBar,
                        }}
                    />
                    <ProFormSwitch
                        label='Search Box'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: searchBox,
                            disabled: optionMode === 'text',
                            onChange: setSearchBox,
                        }}
                    />
                    <ProFormSwitch
                        label='Tooltip Ctrl'
                        checkedChildren='True'
                        unCheckedChildren='False'
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
                    placeholder='Please select an icon'
                    fieldProps={{
                        notFoundContent: (<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='No Data'/>),
                        onChange: (value) => {
                            ConsoleUtils.logTimestamp(false, false, 'IconSelect', 'onChange value = ' + value);
                        }
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input demo field',
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
                    locale='en_US'
                />
            </ProForm>
        </>
    );
}
