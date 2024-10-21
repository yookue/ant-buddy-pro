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
import datePickerLocale from 'antd/es/date-picker/locale/en_US';
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
                    label='Form Readonly'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: formReadonly,
                        onChange: setFormReadonly,
                    }}
                />
                <ProFormRadio.Group
                    label='Addon Position'
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
                        {label: 'Before', value: 'before'},
                        {label: 'After', value: 'after'},
                        {label: 'False', value: false},
                    ]}
                />
                <ProForm.Group>
                    <ProFormSwitch
                        label='Border Top'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: borderTop,
                            disabled: formReadonly,
                            onChange: setBorderTop,
                        }}
                    />
                    <ProFormSwitch
                        label='Border Right'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: borderRight,
                            disabled: formReadonly,
                            onChange: setBorderRight,
                        }}
                    />
                    <ProFormSwitch
                        label='Border Bottom'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: borderBottom,
                            disabled: formReadonly,
                            onChange: setBorderBottom,
                        }}
                    />
                    <ProFormSwitch
                        label='Border Left'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: borderLeft,
                            disabled: formReadonly,
                            onChange: setBorderLeft,
                        }}
                    />
                </ProForm.Group>
                <ProFormRadio.Group
                    label='Preset Style'
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
                        {label: 'Field-Prior', value: 'field-prior'},
                        {label: 'Addon-Prior', value: 'addon-prior'},
                        {label: 'False', value: false},
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
                            label='Start Date'
                            placeholder='Start Date'
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
                                                label='End Date'
                                                placeholder='End Date'
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
                                    label='Infinite'
                                    fieldProps={{
                                        defaultChecked: false,
                                        checkedChildren: 'Yes',
                                        unCheckedChildren: 'No',
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
