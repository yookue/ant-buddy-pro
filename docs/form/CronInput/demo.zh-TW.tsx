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
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {CronInput} from '@unikue/ant-buddy-pro';


export default () => {
    const [tabPos, setTabPos] = React.useState<'top' | 'bottom'>('top');
    const [allowSecond, setAllowSecond] = React.useState(true);
    const [allowYear, setAllowYear] = React.useState(true);
    const [allowOkEcho, setAllowOkEcho] = React.useState(true);
    const [proField, setProField] = React.useState<boolean>(true);

    return (
        <>
            <ProForm
                name='CronInput_demo.zh-TW'
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
                    ]}
                />
                <ProForm.Group>
                    <ProFormSwitch
                        label='允許秒'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: allowSecond,
                            onChange: setAllowSecond,
                        }}
                    />
                    <ProFormSwitch
                        label='允許年'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: allowYear,
                            onChange: setAllowYear,
                        }}
                    />
                    <ProFormSwitch
                        label='允許確認回顯'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: allowOkEcho,
                            onChange: setAllowOkEcho,
                        }}
                    />
                    <ProFormSwitch
                        label='使用 ProField'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: proField,
                            onChange: setProField,
                        }}
                    />
                </ProForm.Group>
            </ProForm>
            <Divider/>
            <ProForm
                name='CronInput_demo.zh-TW.Test'
                layout='vertical'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <CronInput
                    name='foobar'
                    label='示例字段'
                    placeholder='請輸入此項'
                    rules={[
                        {
                            required: true,
                            message: '請輸入示例字段',
                        },
                    ]}
                    allowSecond={allowSecond}
                    allowYear={allowYear}
                    allowOkEcho={allowOkEcho}
                    tabsProps={{
                        tabPosition: tabPos,
                    }}
                    locale='zh_TW'
                    proField={proField}
                />
            </ProForm>
        </>
    );
}
