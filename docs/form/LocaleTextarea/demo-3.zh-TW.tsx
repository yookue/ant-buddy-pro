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
import {message as messageApi} from 'antd';
import {ProForm} from '@ant-design/pro-form';
import {LocaleTextarea} from '@yookue/ant-buddy-pro';


export default () => {
    const [messageInvoker, messageContext] = messageApi.useMessage();
    return (
        <>
            {messageContext}
            <ProForm
                name='LocaleTextarea_demo3.zh-TW'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={{
                    searchConfig: {
                        submitText: '提交',
                        resetText: '重置',
                    }
                }}
                onFinish={async () => {
                    messageInvoker.success('您點擊了提交按鈕');
                }}
            >
                <LocaleTextarea
                    name='foobar'
                    placeholder='示例字段-帶校驗'
                    rules={[
                        {
                            required: true,
                            message: '請輸入示例字段',
                        },
                    ]}
                    locale='zh_TW'
                    switchQuickTags={[
                        'en-US',
                        'zh-CN',
                        'zh-TW',
                    ]}
                    switchShareProps={{
                        placeholder: '請輸入此字段',
                        rules: [
                            {
                                type: 'string',
                                min: 2,
                                max: 60,
                                message: '示例字段的長度必須在 2~60 之間',
                            }
                        ]
                    }}
                />
            </ProForm>
        </>
    );
}
