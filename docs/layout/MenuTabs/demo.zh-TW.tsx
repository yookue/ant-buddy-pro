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
import {Divider} from 'antd';
import {ProForm, ProFormSelect, ProFormSwitch} from '@ant-design/pro-form';
import {MenuTabs, type PaddingSpaceType} from '@yookue/ant-buddy-pro';


export default () => {
    const [inkBar, setInkBar] = React.useState<boolean>(true);
    const [selectionBold, setSelectionBold] = React.useState<boolean>(true);
    const [presetStyle, setPresetStyle] = React.useState<PaddingSpaceType | false>('padding-md');

    // noinspection DuplicatedCode
    return (
        <>
            <ProForm
                name='MenuTabs_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSwitch
                        label='活躍指示條'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: inkBar,
                            onChange: setInkBar,
                        }}
                    />
                    <ProFormSwitch
                        label='選中項加粗'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: selectionBold,
                            onChange: setSelectionBold,
                        }}
                    />
                </ProForm.Group>
                <ProFormSelect
                    label='預設樣式'
                    placeholder='預設樣式'
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
            <MenuTabs
                menuProps={{
                    items: [
                        {
                            key: 'general',
                            label: '常規設置',
                            children: (
                                <span>這裏是常規設置的內容</span>
                            )
                        },
                        {
                            key: 'advanced',
                            label: '高級設置',
                            children: (
                                <span>這裏是高級設置的內容</span>
                            )
                        },
                        {
                            key: 'danger',
                            label: '危險設置',
                            danger: true,
                            children: (
                                <span>這裏是危險設置的內容</span>
                            )
                        },
                        {
                            key: 'disabled',
                            label: '禁用設置',
                            disabled: true,
                            children: (
                                <span>這裏是禁用設置的內容</span>
                            )
                        }
                    ],
                    defaultActiveKey: 'general',
                }}
                containerStyle={{
                    minHeight: '300px',
                }}
                entryInkBar={inkBar}
                entrySelectionBold={selectionBold}
                presetStyle={presetStyle}
            />
        </>
    );
}
