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
import {Divider, ColorPicker} from 'antd';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {PageFooter} from '@unikue/ant-buddy-pro';
import {type FooterPresetStyle} from '@unikue/ant-buddy-pro/layout/PageFooter';
import {ColorUtils} from '@unikue/ts-lang-utils';


export default () => {
    const [bgColor, setBgColor] = React.useState<string>();
    const [copyrightIcon, setCopyrightIcon] = React.useState<boolean>(true);
    const [presetStyle, setPresetStyle] = React.useState<FooterPresetStyle | false>('default');

    return (
        <>
            <ProForm
                name='PageFooter_demo.en-US'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProForm.Item
                        label='Background Color'
                    >
                        <ColorPicker
                            size='small'
                            value={bgColor}
                            onChangeComplete={(color) => {
                                setBgColor(color?.toHexString());
                            }}
                        />
                    </ProForm.Item>
                    <ProFormSwitch
                        label='Copyright Icon'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: copyrightIcon,
                            onChange: setCopyrightIcon,
                        }}
                    />
                </ProForm.Group>
                <ProFormRadio.Group
                    label='Preset Style'
                    radioType='button'
                    fieldProps={{
                        value: presetStyle,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setPresetStyle(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Default', value: 'default'},
                        {label: 'Half', value: 'half'},
                        {label: 'False', value: false},
                    ]}
                />
            </ProForm>
            <Divider/>
            <PageFooter
                links={[
                    {
                        key: 'ant-buddy-pro',
                        content: 'Ant Buddy Pro',
                        href: 'https://github.com/unikueltd/ant-buddy-pro',
                        style: {
                            color: '#eba77a',
                        }
                    }
                ]}
                copyright={`${new Date().getFullYear()} Unikue Ltd`}
                copyrightIcon={copyrightIcon}
                containerStyle={{
                    backgroundColor: bgColor,
                }}
                copyrightStyle={{
                    color: ColorUtils.reverseHex(bgColor) ?? '#443300',
                }}
                presetStyle={presetStyle}
            />
        </>
    );
}
