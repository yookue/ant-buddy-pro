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
import { Divider, message as messageApi } from 'antd';
import { ProForm, ProFormRadio } from '@ant-design/pro-components';
import { LocaleTextarea } from '@unikue/ant-buddy-pro';
import { type TabPlacement } from '@unikue/ant-buddy-pro/layout/CardTabs';


export default () => {
    const [messageInvoker, messageContext] = messageApi.useMessage();
    const [tabPlacement, setTabPlacement] = React.useState<TabPlacement>('top');

    return (
        <>
            {messageContext}
            <ProForm
                name='LocaleTextarea_demo1.zh-CN'
                layout='vertical'
                autoFocusFirstInput={false}
                submitter={{
                    searchConfig: {
                        submitText: '提交',
                        resetText: '重置',
                    }
                }}
                onFinish={async () => {
                    messageInvoker.success('您点击了提交按钮');
                }}
            >
                <ProFormRadio.Group
                    label='Tab 位置'
                    radioType='button'
                    fieldProps={{
                        value: tabPlacement,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setTabPlacement(event.target?.value);
                        }
                    }}
                    options={[
                        { label: '上', value: 'top' },
                        { label: '下', value: 'bottom' },
                        { label: '左', value: 'start' },
                        { label: '右', value: 'end' },
                        { label: '上-末尾', value: 'top-end' },
                        { label: '下-末尾', value: 'bottom-end' },
                    ]}
                />
                <Divider />
                <LocaleTextarea
                    name='foobar'
                    placeholder='示例字段-带校验'
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
                            message: '请输入示例字段',
                        },
                    ]}
                    layout='vertical'
                    locale='zh_CN'
                    switchTextareaProps={[
                        {
                            tag: 'en-US',
                            placeholder: '示例字段-英文',
                            allowClear: true,
                        },
                        {
                            tag: 'zh-CN',
                            placeholder: '示例字段-简体中文',
                            allowClear: true,
                        },
                        {
                            tag: 'zh-TW',
                            placeholder: '示例字段-繁体中文',
                            allowClear: true,
                        }
                    ]}
                    switchShareProps={{
                        rules: [
                            {
                                type: 'string',
                                min: 2,
                                max: 60,
                                message: '示例字段的长度必须在 2~60 之间',
                            }
                        ]
                    }}
                />
            </ProForm>
        </>
    );
}
