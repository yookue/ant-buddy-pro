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
import {Card} from 'antd';
import {ProForm, ProFormSwitch} from '@ant-design/pro-form';
import {BadgeRibbon} from '@yookue/ant-buddy-pro';


export default () => {
    const [emptyText, setEmptyText] = React.useState<boolean>(false);
    const [renderEmpty, setRenderEmpty] = React.useState<boolean>(false);

    return (
        <>
            <ProForm
                name='BadgeRibbon_demo'
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
                        label='渲染空白'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: renderEmpty,
                            disabled: !emptyText,
                            onChange: setRenderEmpty,
                        }}
                    />
                </ProForm.Group>
            </ProForm>
            <BadgeRibbon
                color='lime'
                renderEmpty={renderEmpty}
                text={emptyText ? undefined : 'ant-buddy-pro'}
            >
                <Card title='BadgeRibbon'>
                    一只棕色敏捷的狐狸跳过了一只懒洋洋的狗。
                </Card>
            </BadgeRibbon>
        </>
    );
}
