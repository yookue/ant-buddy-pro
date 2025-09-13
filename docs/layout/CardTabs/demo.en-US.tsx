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
import {Divider} from 'antd';
import {ProForm, ProFormRadio, ProFormSelect, ProFormSwitch} from '@ant-design/pro-form';
import {CardTabs, type PaddingSpaceType} from '@unikue/ant-buddy-pro';
import {type TabsPosition} from '@unikue/ant-buddy-pro/layout/CardTabs';


export default () => {
    const [tabPos, setTabPos] = React.useState<TabsPosition>('top');
    const [tabBorder, setTabBorder] = React.useState<boolean>(true);
    const [contentBorder, setContentBorder] = React.useState<boolean>(true);
    const [inkBar, setInkBar] = React.useState<boolean>(true);
    const [presetStyle, setPresetStyle] = React.useState<PaddingSpaceType | false>('padding-md');

    // noinspection DuplicatedCode
    return (
        <>
            <ProForm
                name='CardTabs_demo.en-US'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='Tab Position'
                    radioType='button'
                    fieldProps={{
                        value: tabPos,
                        buttonStyle: 'solid',
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
                        label='Tab Border'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: tabBorder,
                            onChange: setTabBorder,
                        }}
                    />
                    <ProFormSwitch
                        label='Content Border'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: contentBorder,
                            onChange: setContentBorder,
                        }}
                    />
                    <ProFormSwitch
                        label='Ink Bar'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: inkBar,
                            onChange: setInkBar,
                        }}
                    />
                </ProForm.Group>
                <ProFormSelect
                    label='Preset Style'
                    placeholder='Preset Style'
                    width='md'
                    fieldProps={{
                        allowClear: true,
                        value: presetStyle,
                        options: [
                            {label: 'padding-0', value: 'padding-0'},
                            {label: 'padding-xxs', value: 'padding-xxs'},
                            {label: 'padding-xs', value: 'padding-xs'},
                            {label: 'padding-sm', value: 'padding-sm'},
                            {label: 'padding-md', value: 'padding-md'},
                            {label: 'padding-lg', value: 'padding-lg'},
                            {label: 'padding-x-0', value: 'padding-x-0'},
                            {label: 'padding-x-xxs', value: 'padding-x-xxs'},
                            {label: 'padding-x-xs', value: 'padding-x-xs'},
                            {label: 'padding-x-sm', value: 'padding-x-sm'},
                            {label: 'padding-x-md', value: 'padding-x-md'},
                            {label: 'padding-x-lg', value: 'padding-x-lg'},
                            {label: 'padding-y-0', value: 'padding-y-0'},
                            {label: 'padding-y-xxs', value: 'padding-y-xxs'},
                            {label: 'padding-y-xs', value: 'padding-y-xs'},
                            {label: 'padding-y-sm', value: 'padding-y-sm'},
                            {label: 'padding-y-md', value: 'padding-y-md'},
                            {label: 'padding-y-lg', value: 'padding-y-lg'},
                            {label: 'False', value: false},
                        ],
                        onChange: (value) => {
                            setPresetStyle(value);
                        }
                    }}
                />
            </ProForm>
            <Divider/>
            <CardTabs
                tabPosition={tabPos}
                tabBorder={tabBorder}
                contentBorder={contentBorder}
                inkBar={inkBar}
                presetStyle={presetStyle}
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: (
                            <>
                                <span>Content of Tab Pane {id}</span>
                                <br/><br/>
                                <span>Content of Tab Pane {id}</span>
                                <br/><br/>
                                <span>Content of Tab Pane {id}</span>
                            </>
                        ),
                    }
                })}
            />
        </>
    );
}
