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
import {Avatar, message as messageApi} from 'antd';
import {Comment} from '@ant-design/compatible';
import {UserOutlined} from '@ant-design/icons';
import {ProFormTextArea} from '@ant-design/pro-form';
import {CollapseForm} from '@yookue/ant-buddy-pro';
import {RandomUtils} from '@yookue/ts-lang-utils';


export default () => {
    const [messageInvoker, messageContext] = messageApi.useMessage();
    return (
        <>
            {messageContext}
            <Comment
                avatar={(
                    <Avatar src='https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png' size='small'/>
                )}
                author='David Hsing'
                content={`一只棕色敏捷的狐狸跳过了一只懒洋洋的狗。${RandomUtils.randomString(6)}`}
                datetime={`2024-10-${RandomUtils.randomInteger(10, 32)} ${RandomUtils.randomInteger(10, 24)}:35:36`}
                actions={[(
                    <CollapseForm
                        closedEntry='回复'
                        openedEntry='取消回复'
                        autoEntryCursor={true}
                        formProps={{
                            submitter: {
                                searchConfig: {
                                    submitText: '提交',
                                    resetText: '重置',
                                },
                                submitButtonProps: {
                                    style: {
                                        marginLeft: '36px',
                                    }
                                }
                            },
                            onFinish: async () => {
                                messageInvoker.success('您点击了提交按钮');
                            }
                        }}
                    >
                        <Comment
                            avatar={(
                                <Avatar icon={<UserOutlined/>} size='small'/>
                            )}
                            content={(
                                <ProFormTextArea
                                    name='content'
                                    placeholder='内容'
                                    fieldProps={{
                                        autoSize: {
                                            minRows: 3,
                                            maxRows: 5,
                                        },
                                        cols: 120,
                                    }}
                                />
                            )}
                        />
                    </CollapseForm>
                )]}
            />
        </>
    );
}
