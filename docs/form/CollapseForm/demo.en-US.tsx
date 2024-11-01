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
import {Avatar, Comment, message as messageApi} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {ProFormTextArea} from '@ant-design/pro-form';
import {CollapseForm} from '@yookue/ant-buddy-pro';
import {RandomUtils} from '@yookue/ts-lang-utils';


export default () => {
    return (
        <>
            <Comment
                avatar={(
                    <Avatar src='https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png' size='small'/>
                )}
                author='David Hsing'
                content={`The quick brown fox jumps over a lazy dog. ${RandomUtils.randomString(6)}`}
                datetime={`2024-10-${RandomUtils.randomInteger(10, 32)} ${RandomUtils.randomInteger(10, 24)}:35:36`}
                actions={[(
                    <CollapseForm
                        closedEntry='Reply'
                        openedEntry='Cancel Reply'
                        formProps={{
                            submitter: {
                                searchConfig: {
                                    submitText: 'Submit',
                                    resetText: 'Reset',
                                },
                                submitButtonProps: {
                                    style: {
                                        marginLeft: '36px',
                                    }
                                }
                            },
                            onFinish: async () => {
                                messageApi.success(`Yep, you've clicked the submit button`);
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
                                    placeholder='Content'
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
