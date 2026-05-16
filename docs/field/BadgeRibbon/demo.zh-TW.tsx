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
import { Card } from 'antd';
import { ProForm, ProFormSwitch } from '@ant-design/pro-components';
import { BadgeRibbon } from '@unikue/ant-buddy-pro';


export default () => {
    const [emptyText, setEmptyText] = React.useState<boolean>(false);
    const [transparent, setTransparent] = React.useState<boolean>(false);

    return (
        <>
            <ProForm
                name='BadgeRibbon_demo.zh-TW'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSwitch
                        label='空白文本'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: emptyText,
                            onChange: setEmptyText,
                        }}
                    />
                    <ProFormSwitch
                        label='透明色'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: transparent,
                            disabled: emptyText,
                            onChange: setTransparent,
                        }}
                    />
                </ProForm.Group>
            </ProForm>
            <BadgeRibbon
                color='lime'
                transparent={transparent}
                text={emptyText ? undefined : (
                    <span style={{
                        color: transparent ? 'green' : undefined,
                        marginRight: transparent ? 8 : 0,
                    }}>
                        ant-buddy-pro
                    </span>
                )}
            >
                <Card title='BadgeRibbon'>
                    壹只棕色敏捷的狐貍跳過了壹只懶洋洋的狗。
                </Card>
            </BadgeRibbon>
        </>
    );
}
