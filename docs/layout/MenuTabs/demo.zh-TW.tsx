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
import {type MenuTheme} from 'antd/es/menu/MenuContext';
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {MenuTabs} from '@yookue/ant-buddy-pro';


export default () => {
    const [menuTheme, setMenuTheme] = React.useState<MenuTheme>('light');
    const [inkBar, setInkBar] = React.useState<boolean>(true);
    const [selectionBold, setSelectionBold] = React.useState<boolean>(true);

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
                        label='菜單主題'
                        checkedChildren='暗夜'
                        unCheckedChildren='明亮'
                        fieldProps={{
                            checked: menuTheme === 'dark',
                            onChange: (value) => {
                                setMenuTheme(value ? 'dark' : 'light');
                            }
                        }}
                    />
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
            </ProForm>
            <Divider/>
            <MenuTabs
                menuProps={{
                    items: [
                        {
                            key: 'general',
                            label: '常規設置',
                            content: (
                                <span>這裏是常規設置的內容</span>
                            )
                        },
                        {
                            key: 'advanced',
                            label: '高級設置',
                            content: (
                                <span>這裏是高級設置的內容</span>
                            )
                        },
                        {
                            key: 'danger',
                            label: '危險設置',
                            danger: true,
                            content: (
                                <span>這裏是危險設置的內容</span>
                            )
                        },
                        {
                            key: 'disabled',
                            label: '禁用設置',
                            disabled: true,
                            content: (
                                <span>這裏是禁用設置的內容</span>
                            )
                        }
                    ],
                    defaultActiveKey: 'general',
                    theme: menuTheme,
                }}
                containerStyle={{
                    minHeight: '300px',
                }}
                entryInkBar={inkBar}
                entrySelectionBold={selectionBold}
            />
        </>
    );
}
