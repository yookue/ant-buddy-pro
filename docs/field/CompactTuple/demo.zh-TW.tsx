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
import {Row, Col, Divider} from 'antd';
import datePickerLocale from 'antd/es/date-picker/locale/zh_TW';
import {ProForm, ProFormDatePicker, ProFormRadio, ProFormSwitch, ProFormDependency} from '@ant-design/pro-form';
import {CompactTuple, type BeforeAfterType} from '@yookue/ant-buddy-pro';
import {type TuplePresetStyle} from '@yookue/ant-buddy-pro/field/CompactTuple';
import moment from 'moment';


export default () => {
    // noinspection DuplicatedCode
    const [formReadonly, setFormReadonly] = React.useState<boolean>(false);
    const [addonPos, setAddonPos] = React.useState<BeforeAfterType>('after');
    const [borderTop, setBorderTop] = React.useState<boolean>(true);
    const [borderRight, setBorderRight] = React.useState<boolean>(true);
    const [borderBottom, setBorderBottom] = React.useState<boolean>(true);
    const [borderLeft, setBorderLeft] = React.useState<boolean>(false);
    const [presetStyle, setPresetStyle] = React.useState<TuplePresetStyle>('field-prior');

    return (
        <>
            <ProForm
                name='CompactTuple_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormSwitch
                    label='表單只讀'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: formReadonly,
                        onChange: setFormReadonly,
                    }}
                />
                <ProFormRadio.Group
                    label='附加物位置'
                    radioType='button'
                    fieldProps={{
                        value: addonPos,
                        buttonStyle: 'solid',
                        disabled: formReadonly,
                        onChange: (event) => {
                            setAddonPos(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '前', value: 'before'},
                        {label: '後', value: 'after'},
                        {label: '無', value: false},
                    ]}
                />
                <ProForm.Group>
                    <ProFormSwitch
                        label='頂部邊框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: borderTop,
                            disabled: formReadonly,
                            onChange: setBorderTop,
                        }}
                    />
                    <ProFormSwitch
                        label='右側邊框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: borderRight,
                            disabled: formReadonly,
                            onChange: setBorderRight,
                        }}
                    />
                    <ProFormSwitch
                        label='底部邊框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: borderBottom,
                            disabled: formReadonly,
                            onChange: setBorderBottom,
                        }}
                    />
                    <ProFormSwitch
                        label='左側邊框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: borderLeft,
                            disabled: formReadonly,
                            onChange: setBorderLeft,
                        }}
                    />
                </ProForm.Group>
                <ProFormRadio.Group
                    label='預設樣式'
                    radioType='button'
                    fieldProps={{
                        value: presetStyle,
                        buttonStyle: 'solid',
                        disabled: formReadonly,
                        onChange: (event) => {
                            setPresetStyle(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '字段優先', value: 'field-prior'},
                        {label: '附加物優先', value: 'addon-prior'},
                        {label: '無', value: false},
                    ]}
                />
            </ProForm>
            <Divider/>
            <ProForm
                name='CompactTuple_test'
                layout='vertical'
                autoFocusFirstInput={false}
                readonly={formReadonly}
                submitter={false}
            >
                <Row gutter={[12, 0]}>
                    <Col span={12}>
                        <ProFormDatePicker
                            name='identityStart'
                            label='開始日期'
                            placeholder='開始日期'
                            fieldProps={{
                                style: {width: '100%'},
                                locale: datePickerLocale,
                            }}
                        />
                    </Col>
                    <Col span={12}>
                        <CompactTuple
                            field={(
                                <ProFormDependency name={['identityStart', 'identityInfinite']} shouldUpdate={true}>
                                    {({identityStart, identityInfinite}) => {
                                        return (
                                            <ProFormDatePicker
                                                name='identityEnd'
                                                label='結束日期'
                                                placeholder='結束日期'
                                                fieldProps={{
                                                    disabled: identityInfinite,
                                                    disabledDate: date => date < moment(identityStart),
                                                    style: {width: '100%'},
                                                    locale: datePickerLocale,
                                                }}
                                            />
                                        );
                                    }}
                                </ProFormDependency>
                            )}
                            addon={(
                                <ProFormSwitch
                                    name='identityInfinite'
                                    label='長期'
                                    fieldProps={{
                                        defaultChecked: false,
                                        checkedChildren: '是',
                                        unCheckedChildren: '否',
                                    }}
                                />
                            )}
                            addonPos={addonPos}
                            addonBorderProps={{
                                borderTop: borderTop,
                                borderRight: borderRight,
                                borderBottom: borderBottom,
                                borderLeft: borderLeft,
                            }}
                            presetStyle={presetStyle}
                        />
                    </Col>
                </Row>
            </ProForm>
        </>
    );
}
