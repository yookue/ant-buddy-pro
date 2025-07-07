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
import {FireOutlined, FormOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio, ProFormSelect, ProFormSwitch, type ProFormInstance} from '@ant-design/pro-form';
import {ColorPicker, ConsoleUtils, type BeforeAfterType, type ColorPickerRef} from '@yookue/ant-buddy-pro';
import {type PickerType} from '@yookue/ant-buddy-pro/field/ColorPicker';


export default () => {
    // noinspection DuplicatedCode
    const formRef = React.useRef<ProFormInstance>();
    const colorPickerRef = React.useRef<ColorPickerRef>(null);
    const [pickerType, setPickerType] = React.useState<PickerType>('chrome');
    const [allowClear, setAllowClear] = React.useState<boolean>(true);
    const [widthBlock, setWidthBlock] = React.useState<boolean>(false);
    const [buttonSize, setButtonSize] = React.useState<SizeType>('small');
    const [iconPos, setIconPos] = React.useState<BeforeAfterType>('after');

    // noinspection DuplicatedCode
    return (
        <>
            <ProForm
                formRef={formRef}
                name='ColorPicker_demo.zh-TW'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormSelect
                    label='拾取器類型'
                    placeholder='拾取器類型'
                    width='md'
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
                <ProForm.Group>
                    <ProFormSwitch
                        label='允許清空'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: allowClear,
                            onChange: setAllowClear,
                        }}
                    />
                    <ProFormSwitch
                        label='匹配寬度'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: widthBlock,
                            onChange: setWidthBlock,
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
                <ProFormRadio.Group
                    label='圖標位置'
                    radioType='button'
                    fieldProps={{
                        value: iconPos,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setIconPos(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '前', value: 'before'},
                        {label: '後', value: 'after'},
                        {label: '無', value: false},
                    ]}
                />
                <ProForm.Group>
                    <Button
                        icon={<FireOutlined/>}
                        onClick={() => colorPickerRef.current?.setColor('#1890ff')}
                    >
                        設定（通過引用）
                    </Button>
                    <Button
                        icon={<FormOutlined/>}
                        onClick={() => formRef.current?.setFieldValue('foobar', '#52c41a')}
                    >
                        設定（通過表單）
                    </Button>
                </ProForm.Group>
                <Divider/>
                <ColorPicker
                    ref={colorPickerRef}
                    name='foobar'
                    label='選擇顏色'
                    width='xs'
                    widthBlock={widthBlock}
                    pickerType={pickerType}
                    allowClear={allowClear}
                    buttonProps={{
                        size: buttonSize,
                    }}
                    iconPos={iconPos}
                    onChange={(color: any) => {
                        ConsoleUtils.logTimestamp(false, false, 'ColorPicker', 'onChange color = ' + color);
                    }}
                />
            </ProForm>
        </>
    );
}
