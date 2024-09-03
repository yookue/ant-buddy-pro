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
import {type TabsPosition} from 'antd/es/tabs';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {CardTabs} from '@yookue/ant-buddy-pro';


export default () => {
    const [tabPos, setTabPos] = React.useState<TabsPosition>('top');
    const [tabBorder, setTabBorder] = React.useState<boolean>(true);
    const [contentBorder, setContentBorder] = React.useState<boolean>(true);
    const [inkBar, setInkBar] = React.useState<boolean>(true);

    return (
        <>
            <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
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
                    ]}
                />
                <ProForm.Group>
                    <ProFormSwitch
                        label='Tab Border'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: tabBorder,
                            onChange: (value) => {
                                setTabBorder(value);
                            }
                        }}
                    />
                    <ProFormSwitch
                        label='Content Border'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: contentBorder,
                            onChange: (value) => {
                                setContentBorder(value);
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
                </ProForm.Group>
            </ProForm>
            <Divider/>
            <CardTabs
                tabPosition={tabPos}
                tabBorder={tabBorder}
                contentBorder={contentBorder}
                inkBar={inkBar}
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: (
                            <>
                                <p>Content of Tab Pane {id}</p>
                                <p>Content of Tab Pane {id}</p>
                                <p>Content of Tab Pane {id}</p>
                            </>
                        ),
                    }})
                }
            />
        </>
    );
}
