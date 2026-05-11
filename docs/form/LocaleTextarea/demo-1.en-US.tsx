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
import {ProForm, ProFormRadio} from '@ant-design/pro-form';
import {LocaleTextarea} from '@unikue/ant-buddy-pro';
import {type TabPlacement} from '@unikue/ant-buddy-pro/layout/CardTabs';


export default () => {
    const [messageInvoker, messageContext] = messageApi.useMessage();
    const [tabPlacement, setTabPlacement] = React.useState<TabPlacement>('top');

    return (
        <>
            {messageContext}
            <ProForm
                name='LocaleTextarea_demo1.en-US'
                layout='vertical'
                autoFocusFirstInput={false}
                submitter={{
                    searchConfig: {
                        submitText: 'Submit',
                        resetText: 'Reset',
                    }
                }}
                onFinish={async () => {
                    messageInvoker.success(`Yep, you've clicked the submit button`);
                }}
            >
                <ProFormRadio.Group
                    label='Tab Position'
                    radioType='button'
                    fieldProps={{
                        value: tabPlacement,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setTabPlacement(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Top', value: 'top'},
                        {label: 'Bottom', value: 'bottom'},
                        {label: 'Left', value: 'start'},
                        {label: 'Right', value: 'end'},
                        {label: 'Top-End', value: 'top-end'},
                        {label: 'Bottom-End', value: 'bottom-end'},
                    ]}
                />
                <Divider/>
                <LocaleTextarea
                    name='foobar'
                    label='Demo Field Label'
                    placeholder='Demo Field With Validation'
                    fieldProps={{
                        autoSize: {
                            minRows: 6,
                            maxRows: 8,
                        }
                    }}
                    tabsProps={{
                        tabPlacement: tabPlacement,
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input demo field',
                        },
                    ]}
                    layout='vertical'
                    locale='en_US'
                    switchTextareaProps={[
                        {
                            tag: 'en-US',
                            placeholder: 'Demo Field in English',
                            allowClear: true,
                        },
                        {
                            tag: 'zh-CN',
                            placeholder: 'Demo Field in Simplified Chinese',
                            allowClear: true,
                        },
                        {
                            tag: 'zh-TW',
                            placeholder: 'Demo Field in Traditional Chinese',
                            allowClear: true,
                        }
                    ]}
                    switchShareProps={{
                        placeholder: 'Please input this field',
                        rules: [
                            {
                                type: 'string',
                                min: 2,
                                max: 60,
                                message: 'The value length must between 2 and 60',
                            }
                        ]
                    }}
                />
            </ProForm>
        </>
    );
}
