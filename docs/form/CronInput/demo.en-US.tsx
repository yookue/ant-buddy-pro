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
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {CronInput} from '@yookue/ant-buddy-pro';


export default () => {
    const [tabPos, setTabPos] = React.useState<'top' | 'bottom'>('top');
    const [allowSecond, setAllowSecond] = React.useState(true);
    const [allowYear, setAllowYear] = React.useState(true);
    const [allowOkEcho, setAllowOkEcho] = React.useState(true);

    return (
        <>
            <ProForm
                name='CronInput_demo.en-US'
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
                    ]}
                />
                <ProForm.Group>
                    <ProFormSwitch
                        label='Allow Second'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: allowSecond,
                            onChange: setAllowSecond,
                        }}
                    />
                    <ProFormSwitch
                        label='Allow Year'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: allowYear,
                            onChange: setAllowYear,
                        }}
                    />
                    <ProFormSwitch
                        label='Allow Ok Echo'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: allowOkEcho,
                            onChange: setAllowOkEcho,
                        }}
                    />
                </ProForm.Group>
                <Divider/>
                <CronInput
                    name='foobar'
                    placeholder='Please input this field'
                    rules={[
                        {
                            required: true,
                            message: 'Please input demo field',
                        },
                    ]}
                    allowSecond={allowSecond}
                    allowYear={allowYear}
                    allowOkEcho={allowOkEcho}
                    tabsProps={{
                        tabPosition: tabPos,
                    }}
                    locale='en_US'
                />
            </ProForm>
        </>
    );
}
