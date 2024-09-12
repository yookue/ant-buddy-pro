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
import {Empty, Divider} from 'antd';
import {AppstoreOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {FoldSection, type BeforeAfterPos} from '@yookue/ant-buddy-pro';
import {type SectionPresetStyle} from '@yookue/ant-buddy-pro/layout/FoldSection';


export default () => {
    const [ornamentPos, setOrnamentPos] = React.useState<BeforeAfterPos>('before');
    const [collapsePos, setCollapsePos] = React.useState<BeforeAfterPos>('after');
    const [presetStyle, setPresetStyle] = React.useState<SectionPresetStyle>('default');
    const [tooltipCtrl, setTooltipCtrl] = React.useState<boolean>(false);

    return (
        <>
            <ProForm
                name='FoldSection_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='裝飾物位置'
                    radioType='button'
                    fieldProps={{
                        value: ornamentPos?.toString(),
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setOrnamentPos(event.target?.value === 'false' ? false : event.target?.value);
                        }
                    }}
                    options={[
                        {label: '前', value: 'before'},
                        {label: '后', value: 'after'},
                        {label: '無', value: 'false'},
                    ]}
                />
                <ProFormRadio.Group
                    label='摺叠區位置'
                    radioType='button'
                    fieldProps={{
                        value: collapsePos?.toString(),
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setCollapsePos(event.target?.value === 'false' ? false : event.target?.value);
                        }
                    }}
                    options={[
                        {label: '前', value: 'before'},
                        {label: '后', value: 'after'},
                        {label: '無', value: 'false'},
                    ]}
                />
                <ProFormRadio.Group
                    label='預設樣式'
                    radioType='button'
                    fieldProps={{
                        value: presetStyle?.toString(),
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setPresetStyle(event.target?.value === 'false' ? false : event.target?.value);
                        }
                    }}
                    options={[
                        {label: '默認', value: 'default'},
                        {label: '經典', value: 'classic'},
                        {label: '無', value: 'false'},
                    ]}
                />
                <ProFormSwitch
                    label='Tooltip 控件'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: tooltipCtrl,
                        onChange: (value) => {
                            setTooltipCtrl(value);
                        }
                    }}
                />
            </ProForm>
            <Divider/>
            <FoldSection
                headerOrnament={<AppstoreOutlined/>}
                headerOrnamentPos={ornamentPos}
                headerContent='FoldSection 頭部標題'
                headerCollapsePos={collapsePos}
                headerOpenedHint='摺叠'
                headerClosedHint='展開'
                panelPlaceholder={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='無數據'/>}
                presetStyle={presetStyle}
                tooltipCtrl={tooltipCtrl}
            />
        </>
    );
}
