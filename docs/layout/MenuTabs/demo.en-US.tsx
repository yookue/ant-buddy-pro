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
                        label='Menu Theme'
                        checkedChildren='Dark'
                        unCheckedChildren='Light'
                        fieldProps={{
                            checked: menuTheme === 'dark',
                            onChange: (value) => {
                                setMenuTheme(value ? 'dark' : 'light');
                            }
                        }}
                    />
                    <ProFormSwitch
                        label='Ink Bar'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: inkBar,
                            onChange: (value) => {
                                setInkBar(value);
                            }
                        }}
                    />
                    <ProFormSwitch
                        label='Selection Bold'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: selectionBold,
                            onChange: (value) => {
                                setSelectionBold(value);
                            }
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
                            label: 'General Settings',
                            content: (
                                <span>Here is the general content</span>
                            )
                        },
                        {
                            key: 'advanced',
                            label: 'Advanced Settings',
                            content: (
                                <span>Here is the advanced content</span>
                            )
                        },
                        {
                            key: 'danger',
                            label: 'Danger Settings',
                            danger: true,
                            content: (
                                <span>Here is the danger content</span>
                            )
                        },
                        {
                            key: 'disabled',
                            label: 'Disabled Settings',
                            disabled: true,
                            content: (
                                <span>Here is the disabled content</span>
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
