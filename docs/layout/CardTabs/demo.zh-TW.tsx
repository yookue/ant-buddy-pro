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
            <ProForm
                name='CardTabs_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='Tab 位置'
                    radioType='button'
                    fieldProps={{
                        value: tabPos,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setTabPos(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '上', value: 'top'},
                        {label: '下', value: 'bottom'},
                        {label: '左', value: 'left'},
                        {label: '右', value: 'right'},
                    ]}
                />
                <ProForm.Group>
                    <ProFormSwitch
                        label='標簽邊框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: tabBorder,
                            onChange: (value) => {
                                setTabBorder(value);
                            }
                        }}
                    />
                    <ProFormSwitch
                        label='内容區邊框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: contentBorder,
                            onChange: (value) => {
                                setContentBorder(value);
                            }
                        }}
                    />
                    <ProFormSwitch
                        label='活躍指示條'
                        checkedChildren='是'
                        unCheckedChildren='否'
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
                                <p>Tab 面板 {id} 的內容</p>
                                <p>Tab 面板 {id} 的內容</p>
                                <p>Tab 面板 {id} 的內容</p>
                            </>
                        ),
                    }})
                }
            />
        </>
    );
}
