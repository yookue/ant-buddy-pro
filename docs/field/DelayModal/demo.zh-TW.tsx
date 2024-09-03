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
import {DelayModal} from '@yookue/ant-buddy-pro';
import {type ModalActionType} from '@yookue/ant-buddy-pro/field/DelayModal';


export default () => {
    const [actionType, setActionType] = React.useState<ModalActionType>('info');
    const [onceOnly, setOnceOnly] = React.useState<boolean>(true);
    const [onceShown, setOnceShown] = React.useState<boolean>(false);

    return (
        <>
            <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
                <ProFormRadio.Group
                    label='動作類型'
                    radioType='button'
                    fieldProps={{
                        value: actionType,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setActionType(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '確認', value: 'confirm'},
                        {label: '信息', value: 'info'},
                        {label: '警告', value: 'warn'},
                        {label: '成功', value: 'success'},
                        {label: '錯誤', value: 'error'},
                        {label: '模態', value: 'modal'},
                    ]}
                />
                <ProFormSwitch
                    label='僅彈出一次'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: onceOnly,
                        onChange: (value) => {
                            setOnceOnly(value);
                        }
                    }}
                />
            </ProForm>
            <Divider/>
            <span>
                空閑（鼠標鍵盤無動作）10 秒鐘後彈出。{(onceOnly && onceShown) ? '已彈出' : '請稍候'}。
            </span>
            <DelayModal
                actionType={actionType}
                onceOnly={onceOnly}
                timeoutMillis={1000 * 10}
                modalProps={{
                    title: '搭載 modalProps',
                    children: '咦，這是一條來自 DelayModal 的消息',
                    closable: false,
                    maskClosable: false,
                    okText: '確定',
                    cancelText: '取消',
                }}
                modalFunProps={{
                    title: '搭載 modalFunProps',
                    content: '咦，這是一條來自 DelayModal 的消息',
                    closable: false,
                    okText: '確定',
                    cancelText: '取消',
                    preprocess: true,
                }}
                onOpen={() => setOnceShown(true)}
            />
        </>
    );
}
