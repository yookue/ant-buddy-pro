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
import {DelayModal, ConsoleUtils} from '@yookue/ant-buddy-pro';
import {type ModalActionType} from '@yookue/ant-buddy-pro/field/DelayModal';


export default () => {
    const [actionType, setActionType] = React.useState<ModalActionType>('info');
    const [onceOnly, setOnceOnly] = React.useState<boolean>(true);
    const [hasOpened, setHasOpened] = React.useState<boolean>(false);

    return (
        <>
            <ProForm
                name='DelayModal_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='动作类型'
                    radioType='button'
                    fieldProps={{
                        value: actionType,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setActionType(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '确认', value: 'confirm'},
                        {label: '信息', value: 'info'},
                        {label: '警告', value: 'warn'},
                        {label: '成功', value: 'success'},
                        {label: '错误', value: 'error'},
                        {label: '自定义', value: 'custom'},
                    ]}
                />
                <ProFormSwitch
                    label='仅弹出一次'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: onceOnly,
                        onChange: setOnceOnly,
                    }}
                />
            </ProForm>
            <Divider/>
            <span>
                空闲（鼠标键盘无动作）15 秒钟后弹出。{(onceOnly && hasOpened) ? '已弹出' : '请稍候'}。
            </span>
            <DelayModal
                actionType={actionType}
                onceOnly={onceOnly}
                timeout={1000 * 15}
                modalProps={{
                    title: 'DelayModal',
                    children: '咦，这是一条来自 modalProps 的消息',
                    closable: false,
                    maskClosable: false,
                    okText: '确定',
                    cancelText: '取消',
                }}
                modalFunProps={{
                    title: 'DelayModal',
                    content: '咦，这是一条来自 modalFunProps 的消息',
                    closable: false,
                    maskClosable: false,
                    okText: '确定',
                    cancelText: '取消',
                }}
                onOpenChange={(open: boolean) => {
                    if (open && !hasOpened) {
                        setHasOpened(true);
                    }
                    ConsoleUtils.logTimestamp(false, false, 'DelayModal', 'onOpenChange open = ' + open);
                }}
            />
        </>
    );
}
