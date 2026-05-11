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
                name='FoldSection_demo.zh-TW'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormSwitch
                    label='外邊框'
                    checkedChildren='是'
                    unCheckedChildren='否'
                    fieldProps={{
                        checked: boundBorder,
                        onChange: setBoundBorder,
                    }}
                />
                <ProFormRadio.Group
                    label='裝飾物位置'
                    radioType='button'
                    fieldProps={{
                        value: ornamentPos,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setOrnamentPos(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '前', value: 'before'},
                        {label: '后', value: 'after'},
                        {label: '無', value: false},
                    ]}
                />
                <ProFormRadio.Group
                    label='摺叠區位置'
                    radioType='button'
                    fieldProps={{
                        value: collapsePos,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setCollapsePos(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '前', value: 'before'},
                        {label: '后', value: 'after'},
                        {label: '無', value: false},
                    ]}
                />
                <ProFormRadio.Group
                    label='預設樣式'
                    radioType='button'
                    fieldProps={{
                        value: presetStyle,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setPresetStyle(event.target?.value);
                        }
                    }}
                    options={[
                        {label: '默認', value: 'default'},
                        {label: '成功', value: 'success'},
                        {label: '信息', value: 'info'},
                        {label: '警告', value: 'warn'},
                        {label: '錯誤', value: 'error'},
                        {label: '經典', value: 'classic'},
                        {label: '無', value: false},
                    ]}
                />
                <ProFormSwitch
                    label='Tooltip 控件'
                    checkedChildren='是'
                    unCheckedChildren='否'
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
                headerContent='FoldSection 頭部標題'
                headerCollapsePos={collapsePos}
                panelPlaceholder={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='無數據'/>}
                presetStyle={presetStyle}
                tooltipCtrl={tooltipCtrl}
                locale='zh_TW'
            />
        </>
    );
}
