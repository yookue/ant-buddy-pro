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
import {Empty, Divider} from 'antd';
import {AppstoreOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-components';
import {FoldSection, type BeforeAfterType} from '@unikue/ant-buddy-pro';
import {type SectionPresetStyle} from '@unikue/ant-buddy-pro/layout/FoldSection';


export default () => {
    const [boundBorder, setBoundBorder] = React.useState<boolean>(true);
    const [ornamentPos, setOrnamentPos] = React.useState<BeforeAfterType>('before');
    const [collapsePos, setCollapsePos] = React.useState<BeforeAfterType>('after');
    const [tooltipCtrl, setTooltipCtrl] = React.useState<boolean>(false);
    const [presetStyle, setPresetStyle] = React.useState<SectionPresetStyle | false>('default');

    return (
        <>
            <ProForm
                name='FoldSection_demo.en-US'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormSwitch
                    label='Bound Border'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: boundBorder,
                        onChange: setBoundBorder,
                    }}
                />
                <ProFormRadio.Group
                    label='Ornament Position'
                    radioType='button'
                    fieldProps={{
                        value: ornamentPos,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setOrnamentPos(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Before', value: 'before'},
                        {label: 'After', value: 'after'},
                        {label: 'False', value: false},
                    ]}
                />
                <ProFormRadio.Group
                    label='Collapse Position'
                    radioType='button'
                    fieldProps={{
                        value: collapsePos,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setCollapsePos(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Before', value: 'before'},
                        {label: 'After', value: 'after'},
                        {label: 'False', value: false},
                    ]}
                />
                <ProFormRadio.Group
                    label='Preset Style'
                    radioType='button'
                    fieldProps={{
                        value: presetStyle,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setPresetStyle(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Default', value: 'default'},
                        {label: 'Success', value: 'success'},
                        {label: 'Info', value: 'info'},
                        {label: 'Warn', value: 'warn'},
                        {label: 'Error', value: 'error'},
                        {label: 'Classic', value: 'classic'},
                        {label: 'False', value: false},
                    ]}
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
            </ProForm>
            <Divider/>
            <FoldSection
                boundBorder={boundBorder}
                headerOrnament={<AppstoreOutlined/>}
                headerOrnamentPos={ornamentPos}
                headerContent='FoldSection header caption'
                headerCollapsePos={collapsePos}
                panelPlaceholder={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='No Data'/>}
                presetStyle={presetStyle}
                tooltipCtrl={tooltipCtrl}
                locale='en_US'
            />
        </>
    );
}
