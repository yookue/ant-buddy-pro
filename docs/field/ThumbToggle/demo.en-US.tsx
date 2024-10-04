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
import {PlusOutlined, MinusOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {ThumbToggle, ConsoleUtils, type ThumbToggleRef} from '@yookue/ant-buddy-pro';
import {type ThumbDirection} from '@yookue/ant-buddy-pro/field/ThumbToggle';


export default () => {
    const thumbToggleRef = React.useRef<ThumbToggleRef>(null);
    const [direction, setDirection] = React.useState<ThumbDirection>('up');
    const [showCount, setShowCount] = React.useState<boolean>(true);
    const [showZero, setShowZero] = React.useState<boolean>(true);
    const [tooltipCtrl, setTooltipCtrl] = React.useState<boolean>(false);

    return (
        <>
            <ProForm
                name='ThumbToggle_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='Direction'
                    radioType='button'
                    fieldProps={{
                        value: direction,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setDirection(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Up', value: 'up'},
                        {label: 'Down', value: 'down'},
                    ]}
                />
                <ProForm.Group>
                    <ProFormSwitch
                        label='Show Count'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: showCount,
                            onChange: (value) => {
                                setShowCount(value);
                            }
                        }}
                    />
                    <ProFormSwitch
                        label='Show Zero'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: showZero,
                            onChange: (value) => {
                                setShowZero(value);
                            }
                        }}
                    />
                    <ProFormSwitch
                        label='Tooltip Ctrl'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: tooltipCtrl,
                            onChange: (value) => {
                                setTooltipCtrl(value);
                            }
                        }}
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <Button
                        icon={<PlusOutlined/>}
                        onClick={() => thumbToggleRef.current?.increaseCount()}
                    >
                        Increase
                    </Button>
                    <Button
                        icon={<MinusOutlined/>}
                        onClick={() => thumbToggleRef.current?.decreaseCount()}
                    >
                        Decrease
                    </Button>
                </ProForm.Group>
            </ProForm>
            <Divider/>
            <ThumbToggle
                ref={thumbToggleRef}
                checkable={true}
                direction={direction}
                showCount={showCount}
                showZero={showZero}
                tooltipCtrl={tooltipCtrl}
                onToggle={async () => {
                    ConsoleUtils.log(false, false, 'ThumbToggle', 'onToggle returns true to allow changing count');
                    return true;
                }}
                localeProps={{
                    like: 'Like',
                    dislike: 'Dislike',
                }}
            />
        </>
    );
}
