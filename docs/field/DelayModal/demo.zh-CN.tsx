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
import {Button, Divider} from 'antd';
import {FireOutlined, StopOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {DelayModal, ConsoleUtils, type DelayModalRef} from '@yookue/ant-buddy-pro';
import {type ModalActionType} from '@yookue/ant-buddy-pro/field/DelayModal';


export default () => {
    const delayModalRef = React.useRef<DelayModalRef>(null);
    const [autoStart, setAutoStart] = React.useState<boolean>(true);
    const [onceOnly, setOnceOnly] = React.useState<boolean>(true);
    const [actionType, setActionType] = React.useState<ModalActionType>('info');
    const [timing, setTiming] = React.useState<boolean>(autoStart);

    return (
        <>
            <ProForm
                name='DelayModal_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSwitch
                        label='自动开始'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: autoStart,
                            onChange: (value: boolean) => {
                                setAutoStart(value);
                                value ? delayModalRef.current?.startTimer() : delayModalRef.current?.stopTimer();
                            },
                        }}
                    />
                    <ProFormSwitch
                        label='仅弹一次'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: onceOnly,
                            disabled: autoStart || timing,
                            onChange: setOnceOnly,
                        }}
                    />
                </ProForm.Group>
                <ProFormRadio.Group
                    label='动作类型'
                    radioType='button'
                    fieldProps={{
                        value: actionType,
                        buttonStyle: 'solid',
                        disabled: autoStart || timing,
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
                <ProForm.Group>
                    <Button
                        icon={<FireOutlined/>}
                        disabled={autoStart || timing}
                        onClick={() => {
                            delayModalRef.current?.startTimer();
                            setTiming(true);
                        }}
                    >
                        手动开始
                    </Button>
                    <Button
                        icon={<StopOutlined/>}
                        disabled={autoStart || !timing}
                        onClick={() => {
                            delayModalRef.current?.stopTimer();
                            setTiming(false);
                        }}
                    >
                        手动停止
                    </Button>
                </ProForm.Group>
            </ProForm>
            <Divider/>
            <span>
                空闲（鼠标键盘无动作）10 秒钟后弹出。
            </span>
            <DelayModal
                ref={delayModalRef}
                actionType={actionType}
                autoStart={autoStart}
                onceOnly={onceOnly}
                timeout={1000 * 10}
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
                    ConsoleUtils.logTimestamp(false, false, 'DelayModal', 'onOpenChange open = ' + open);
                }}
            />
        </>
    );
}
