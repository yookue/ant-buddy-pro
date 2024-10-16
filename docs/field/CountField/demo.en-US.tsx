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
                        label='Show Count'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: showCount,
                            onChange: setShowCount,
                        }}
                    />
                    <ProFormSwitch
                        label='Show Zero'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: showZero,
                            disabled: !showCount,
                            onChange: setShowZero,
                        }}
                    />
                    <ProFormSwitch
                        label='Tooltip Ctrl'
                        checkedChildren='True'
                        unCheckedChildren='False'
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
                        Increase
                    </Button>
                    <Button
                        icon={<MinusOutlined/>}
                        onClick={() => countFieldRef.current?.decreaseCount()}
                    >
                        Decrease
                    </Button>
                    <Button
                        icon={<FireOutlined/>}
                        onClick={() => countFieldRef.current?.setCount(99)}
                    >
                        Set
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
                    title: 'Comments',
                }}
                onChange={(count) => {
                    ConsoleUtils.log(false, false, 'CountField', 'onChange count = ' + count);
                }}
            />
        </>
    );
}
