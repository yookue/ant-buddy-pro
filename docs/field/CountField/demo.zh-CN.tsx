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
import {PlusOutlined, MinusOutlined, FireOutlined, MessageOutlined} from '@ant-design/icons';
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {CountField, ConsoleUtils, type CountFieldRef} from '@yookue/ant-buddy-pro';


export default () => {
    const countFieldRef = React.useRef<CountFieldRef>(null);
    const [showCount, setShowCount] = React.useState<boolean>(true);
    const [showZero, setShowZero] = React.useState<boolean>(true);
    const [tooltipCtrl, setTooltipCtrl] = React.useState<boolean>(false);

    return (
        <>
            <ProForm
                name='CountField_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSwitch
                        label='显示计数'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: showCount,
                            onChange: setShowCount,
                        }}
                    />
                    <ProFormSwitch
                        label='显示计数 0'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: showZero,
                            disabled: !showCount,
                            onChange: setShowZero,
                        }}
                    />
                    <ProFormSwitch
                        label='Tooltip 控件'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: tooltipCtrl,
                            onChange: setTooltipCtrl,
                        }}
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <Button
                        icon={<PlusOutlined/>}
                        onClick={() => countFieldRef.current?.increaseCount()}
                    >
                        自增
                    </Button>
                    <Button
                        icon={<MinusOutlined/>}
                        onClick={() => countFieldRef.current?.decreaseCount()}
                    >
                        自减
                    </Button>
                    <Button
                        icon={<FireOutlined/>}
                        onClick={() => countFieldRef.current?.setCount(99)}
                    >
                        设定
                    </Button>
                </ProForm.Group>
            </ProForm>
            <Divider/>
            <CountField
                ref={countFieldRef}
                field={<MessageOutlined/>}
                showCount={showCount}
                showZero={showZero}
                tooltipCtrl={tooltipCtrl}
                tooltipProps={{
                    title: '评论',
                }}
                onChange={(count) => {
                    ConsoleUtils.logTimestamp(false, false, 'CountField', 'onChange count = ' + count);
                }}
            />
        </>
    );
}
