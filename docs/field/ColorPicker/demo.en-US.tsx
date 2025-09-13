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
import {Button, Divider} from 'antd';
import {type SizeType} from 'antd/es/config-provider/SizeContext';
import {FireOutlined, FormOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio, ProFormSelect, ProFormSwitch, type ProFormInstance} from '@ant-design/pro-form';
import {ColorPicker, ConsoleUtils, type BeforeAfterType, type ColorPickerRef} from '@unikue/ant-buddy-pro';
import {type PickerType} from '@unikue/ant-buddy-pro/field/ColorPicker';


export default () => {
    // noinspection DuplicatedCode
    const formRef = React.useRef<ProFormInstance>();
    const colorPickerRef = React.useRef<ColorPickerRef>(null);
    const [pickerType, setPickerType] = React.useState<PickerType>('chrome');
    const [allowClear, setAllowClear] = React.useState<boolean>(true);
    const [widthBlock, setWidthBlock] = React.useState<boolean>(false);
    const [size, setSize] = React.useState<SizeType>('middle');
    const [iconPos, setIconPos] = React.useState<BeforeAfterType>('after');

    // noinspection DuplicatedCode
    return (
        <>
            <ProForm
                formRef={formRef}
                name='ColorPicker_demo.en-US'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormSelect
                    label='Picker Type'
                    placeholder='Picker Type'
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
                        label='Allow Clear'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: allowClear,
                            onChange: setAllowClear,
                        }}
                    />
                    <ProFormSwitch
                        label='Width Block'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: widthBlock,
                            onChange: setWidthBlock,
                        }}
                    />
                </ProForm.Group>
                <ProFormRadio.Group
                    label='Button Size'
                    radioType='button'
                    fieldProps={{
                        value: size,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setSize(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Large', value: 'large'},
                        {label: 'Middle', value: 'middle'},
                        {label: 'Small', value: 'small'},
                    ]}
                />
                <ProFormRadio.Group
                    label='Icon Position'
                    radioType='button'
                    fieldProps={{
                        value: iconPos,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setIconPos(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Before', value: 'before'},
                        {label: 'After', value: 'after'},
                        {label: 'False', value: false},
                    ]}
                />
                <ProForm.Group>
                    <Button
                        icon={<FireOutlined/>}
                        onClick={() => colorPickerRef.current?.setColor('#1890ff')}
                    >
                        Set by Ref
                    </Button>
                    <Button
                        icon={<FormOutlined/>}
                        onClick={() => formRef.current?.setFieldValue('foobar', '#52c41a')}
                    >
                        Set by Form
                    </Button>
                </ProForm.Group>
                <Divider/>
                <ColorPicker
                    ref={colorPickerRef}
                    name='foobar'
                    label='Choose Color'
                    width='xs'
                    widthBlock={widthBlock}
                    pickerType={pickerType}
                    allowClear={allowClear}
                    size={size}
                    iconPos={iconPos}
                    onChange={(color: any) => {
                        ConsoleUtils.logTimestamp(false, false, 'ColorPicker', 'onChange color = ' + color);
                    }}
                />
            </ProForm>
        </>
    );
}
