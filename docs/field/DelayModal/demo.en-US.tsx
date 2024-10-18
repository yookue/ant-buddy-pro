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
                    label='Action Type'
                    radioType='button'
                    fieldProps={{
                        value: actionType,
                        buttonStyle: 'solid',
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
                <ProFormSwitch
                    label='Once Only'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: onceOnly,
                        onChange: setOnceOnly,
                    }}
                />
            </ProForm>
            <Divider/>
            <span>
                Popup a modal dialog after idle 15 seconds. {(onceOnly && hasOpened) ? 'Already shown' : 'Please wait'}.
            </span>
            <DelayModal
                actionType={actionType}
                onceOnly={onceOnly}
                timeout={1000 * 15}
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
                    if (open && !hasOpened) {
                        setHasOpened(true);
                    }
                    ConsoleUtils.logTimestamp(false, false, 'DelayModal', 'onOpenChange open = ' + open);
                }}
            />
        </>
    );
}
