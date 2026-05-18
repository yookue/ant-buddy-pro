/*
 * Copyright (c) 2025 Unikue Ltd. All rights reserved.
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
import { Divider, Switch } from 'antd';
import { SkinOutlined } from '@ant-design/icons';
import { type ProSettings } from '@ant-design/pro-components';
import { SettingDrawer, BorderBox, LabelField } from '@unikue/ant-buddy-pro';


export default () => {
    const [tooltipCtrl, setTooltipCtrl] = React.useState<boolean>(false);

    const [settings, setSettings] = React.useState<ProSettings>({
        colorPrimary: '#1677ff',
        layout: 'side',
        contentWidth: 'Fluid',
        fixedHeader: false,
        fixSiderbar: true,
    });

    return (
        <>
            <LabelField
                label='Tooltip 控件'
                field={(
                    <Switch
                        checkedChildren='是'
                        unCheckedChildren='否'
                        checked={tooltipCtrl}
                        onChange={setTooltipCtrl}
                    />
                )}
                layout='horizontal'
            />
            <Divider />
            <SettingDrawer
                triggerDom={(
                    <BorderBox boundShape='circle' borderAll={true} containerStyle={{ padding: 8 }}>
                        <SkinOutlined style={{ fontSize: 16 }} />
                    </BorderBox>
                )}
                settings={settings}
                onSettingChange={setSettings}
                tooltipCtrl={tooltipCtrl}
                locale='zh_TW'
            />
        </>
    );
}
