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
import {Divider, message as messageApi} from 'antd';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {CronInput, ConsoleUtils} from '@unikue/ant-buddy-pro';


export default () => {
    const [messageInvoker, messageContext] = messageApi.useMessage();
    const [tabPos, setTabPos] = React.useState<'top' | 'bottom'>('top');
    const [allowSecond, setAllowSecond] = React.useState(true);
    const [allowYear, setAllowYear] = React.useState(true);
    const [allowOkEcho, setAllowOkEcho] = React.useState(true);
    const [proField, setProField] = React.useState<boolean>(true);

    return (
        <>
            {messageContext}
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
                    <ProFormSwitch
                        label='Use ProField'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: proField,
                            onChange: setProField,
                        }}
                    />
                </ProForm.Group>
            </ProForm>
            <Divider/>
            <ProForm
                name='CronInput_demo.en-US.Test'
                layout='vertical'
                autoFocusFirstInput={false}
                submitter={{
                    searchConfig: {
                        submitText: 'Submit',
                        resetText: 'Reset',
                    }
                }}
                onFinish={async (values) => {
                    ConsoleUtils.logTimestamp(false, false, 'CronInput', values, 'Submitted data');
                    messageInvoker.success(`Yep, you've clicked the submit button`);
                }}
            >
                <CronInput
                    name='foobar'
                    label='Demo field'
                    placeholder='Please input this field'
                    allowSecond={allowSecond}
                    allowYear={allowYear}
                    allowOkEcho={allowOkEcho}
                    tabsProps={{
                        tabPlacement: tabPos,
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input demo field',
                        },
                    ]}
                    locale='en_US'
                    proField={proField}
                />
            </ProForm>
        </>
    );
}
