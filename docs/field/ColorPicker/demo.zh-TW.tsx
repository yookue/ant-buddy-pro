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
import {type SizeType} from 'antd/es/config-provider/SizeContext';
import {FireOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio, ProFormSelect, ProFormSwitch} from '@ant-design/pro-form';
import {ColorPicker, ConsoleUtils, type ColorPickerRef} from '@yookue/ant-buddy-pro';
import {type PickerType} from '@yookue/ant-buddy-pro/field/ColorPicker';


export default () => {
    const colorPickerRef = React.useRef<ColorPickerRef>(null);
    const [pickerType, setPickerType] = React.useState<PickerType>('chrome');
    const [buttonSize, setButtonSize] = React.useState<SizeType>('middle');
    const [buttonBlock, setButtonBlock] = React.useState<boolean>(false);

    // noinspection DuplicatedCode
    return (
        <>
            <ProForm
                name='ColorPicker_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSelect
                        label='拾取器類型'
                        fieldProps={{
                            allowClear: false,
                            value: pickerType,
                            options: [
                                {label: 'Block', value: 'block'},
                                {label: 'Chrome', value: 'chrome'},
                                {label: 'Circle', value: 'circle'},
                                {label: 'Compact', value: 'compact'},
                                {label: 'Github', value: 'github'},
                                {label: 'Hue', value: 'hue'},
                                {label: 'Material', value: 'material'},
                                {label: 'Sketch', value: 'sketch'},
                                {label: 'Swatches', value: 'swatches'},
                                {label: 'Twitter', value: 'twitter'},
                            ],
                            onChange: (value) => {
                                setPickerType(value);
                            }
                        }}
                    />
                    <ProFormSwitch
                        label='匹配寬度'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: buttonBlock,
                            onChange: setButtonBlock,
                        }}
                    />
                </ProForm.Group>
                <ProFormRadio.Group
                    label='按鈕大小'
                    radioType='button'
                    fieldProps={{
                        value: buttonSize,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setButtonSize(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '大', value: 'large'},
                        {label: '中', value: 'middle'},
                        {label: '小', value: 'small'},
                    ]}
                />
                <ProForm.Group>
                    <Button
                        icon={<FireOutlined/>}
                        onClick={() => colorPickerRef.current?.setColor('#1890ff')}
                    >
                        設定
                    </Button>
                </ProForm.Group>
                <Divider/>
                <ColorPicker
                    ref={colorPickerRef}
                    pickerType={pickerType}
                    buttonProps={{
                        size: buttonSize,
                        block: buttonBlock,
                    }}
                    onChange={(color: any) => {
                        ConsoleUtils.logTimestamp(false, false, 'ColorPicker', 'onChange color = ' + color);
                    }}
                />
            </ProForm>
        </>
    );
}
