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
import { Button } from 'antd';
import { FireOutlined } from '@ant-design/icons';
import { ProForm, ProFormSwitch } from '@ant-design/pro-components';
import { DragModal } from '@unikue/ant-buddy-pro';
import { RandomUtils } from '@unikue/ts-lang-utils';


export default () => {
    const [open, setOpen] = React.useState(false);
    const [draggable, setDraggable] = React.useState<boolean>(true);

    return (
        <>
            <ProForm
                name='DragModal_demo.zh-CN'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSwitch
                        label='可拖动'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: draggable,
                            disabled: open,
                            onChange: setDraggable,
                        }}
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <Button
                        icon={<FireOutlined />}
                        disabled={open}
                        onClick={() => setOpen(true)}
                    >
                        弹出
                    </Button>
                </ProForm.Group>
            </ProForm>
            <DragModal
                draggable={draggable}
                title='DragModal'
                mask={{ closable: false }}
                open={open}
                okText='确定'
                cancelText='取消'
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
            >
                {`咦，这是一条消息内容。 ${RandomUtils.randomString(6)}`}
            </DragModal>
        </>
    );
}
