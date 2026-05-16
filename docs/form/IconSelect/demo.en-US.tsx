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
import { Divider, Empty } from 'antd';
import { ProForm, ProFormRadio, ProFormSwitch } from '@ant-design/pro-components';
import { IconSelect, ConsoleUtils } from '@unikue/ant-buddy-pro';
import { IconOptionMode } from '@unikue/ant-buddy-pro/form/IconSelect';
import { type TabPlacement } from '@unikue/ant-buddy-pro/layout/CardTabs';


export default () => {
    const [optionMode, setOptionMode] = React.useState<IconOptionMode>('icon');
    const [tabPlacement, setTabPlacement] = React.useState<TabPlacement>('top');
    const [themeInkBar, setThemeInkBar] = React.useState<boolean>(true);
    const [sceneInkBar, setSceneInkBar] = React.useState<boolean>(true);
    const [searchBox, setSearchBox] = React.useState<boolean>(true);
    const [tooltipCtrl, setTooltipCtrl] = React.useState<boolean>(false);

    return (
        <>
            <ProForm
                name='IconSelect_demo.en-US'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormRadio.Group
                        label='Option Mode'
                        radioType='button'
                        fieldProps={{
                            value: optionMode,
                            buttonStyle: 'solid',
                            onChange: (event: any) => {
                                setOptionMode(event.target?.value);
                            }
                        }}
                        options={[
                            { label: 'Icon', value: 'icon' },
                            { label: 'Text', value: 'text' },
                        ]}
                    />
                </ProForm.Group>
                <ProFormRadio.Group
                    label='Tab Position'
                    radioType='button'
                    fieldProps={{
                        value: tabPlacement,
                        buttonStyle: 'solid',
                        disabled: optionMode === 'text',
                        onChange: (event: any) => {
                            setTabPlacement(event.target?.value);
                        }
                    }}
                    options={[
                        { label: 'Top', value: 'top' },
                        { label: 'Bottom', value: 'bottom' },
                        { label: 'Left', value: 'start' },
                        { label: 'Right', value: 'end' },
                        { label: 'Top-End', value: 'top-end' },
                        { label: 'Bottom-End', value: 'bottom-end' },
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
                <Divider />
                <IconSelect
                    name='demoIcon'
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
                        tabPlacement: tabPlacement,
                    }}
                    searchBox={searchBox}
                    tooltipCtrl={tooltipCtrl}
                    locale='en_US'
                />
            </ProForm>
        </>
    );
}
