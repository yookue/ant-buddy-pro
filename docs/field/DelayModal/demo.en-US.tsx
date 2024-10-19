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
                        label='Auto Start'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: autoStart,
                            onChange: (value: boolean) => {
                                setAutoStart(value);
                                setTiming(value);
                                value ? delayModalRef.current?.startTimer() : delayModalRef.current?.stopTimer();
                            },
                        }}
                    />
                    <ProFormSwitch
                        label='Once Only'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: onceOnly,
                            disabled: autoStart || timing,
                            onChange: setOnceOnly,
                        }}
                    />
                </ProForm.Group>
                <ProFormRadio.Group
                    label='Action Type'
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
                        {label: 'Confirm', value: 'confirm'},
                        {label: 'Info', value: 'info'},
                        {label: 'Warn', value: 'warn'},
                        {label: 'Success', value: 'success'},
                        {label: 'Error', value: 'error'},
                        {label: 'Custom', value: 'custom'},
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
                        Manual Start
                    </Button>
                    <Button
                        icon={<StopOutlined/>}
                        disabled={autoStart || !timing}
                        onClick={() => {
                            delayModalRef.current?.stopTimer();
                            setTiming(false);
                        }}
                    >
                        Manual Stop
                    </Button>
                </ProForm.Group>
            </ProForm>
            <Divider/>
            <span>
                Popup a modal dialog after idle 10 seconds.
            </span>
            <DelayModal
                ref={delayModalRef}
                actionType={actionType}
                autoStart={autoStart}
                onceOnly={onceOnly}
                timeout={1000 * 10}
                modalProps={{
                    title: 'DelayModal',
                    children: 'Oops! This is a message from modalProps',
                    closable: false,
                    maskClosable: false,
                    okText: 'OK',
                    cancelText: 'Cancel',
                }}
                modalFunProps={{
                    title: 'DelayModal',
                    content: 'Oops! This is a message from modalFunProps',
                    closable: false,
                    maskClosable: false,
                    okText: 'OK',
                    cancelText: 'Cancel',
                }}
                onOpenChange={(open: boolean) => {
                    ConsoleUtils.logTimestamp(false, false, 'DelayModal', 'onOpenChange open = ' + open);
                }}
            />
        </>
    );
}
