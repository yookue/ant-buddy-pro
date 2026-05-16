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
import { Divider } from 'antd';
import { ProForm, ProFormText, ProFormSwitch, ProCard } from '@ant-design/pro-components';
import { SortableList } from '@unikue/ant-buddy-pro';


export default () => {
    const [allowTopBottom, setAllowTopBottom] = React.useState<boolean>(true);
    const [allowUpDown, setAllowUpDown] = React.useState<boolean>(true);
    const [allowDefaultAction, setAllowDefaultAction] = React.useState<boolean>(true);

    return (
        <>
            <ProForm
                name='SortableList_demo.zh-CN'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSwitch
                        label='允许移动到顶部和底部'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: allowTopBottom,
                            onChange: setAllowTopBottom,
                        }}
                    />
                    <ProFormSwitch
                        label='允许向上和向下移动'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: allowUpDown,
                            onChange: setAllowUpDown,
                        }}
                    />
                    <ProFormSwitch
                        label='允许默认动作'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: allowDefaultAction,
                            onChange: setAllowDefaultAction,
                        }}
                    />
                </ProForm.Group>
                <Divider />
                <SortableList
                    name='demoList'
                    allowTopBottom={allowTopBottom}
                    allowUpDown={allowUpDown}
                    allowDefaultAction={allowDefaultAction}
                    creatorButtonProps={{
                        creatorButtonText: '增加一组数据',
                    }}
                    copyIconProps={{
                        tooltipText: '复制该组数据',
                    }}
                    deleteIconProps={{
                        tooltipText: '删除该组数据',
                    }}
                    itemRender={({ listDom, action }) => {
                        return (
                            <ProCard
                                title='Demo Card'
                                variant='outlined'
                                extra={action}
                                style={{
                                    marginBlockEnd: 24,
                                }}
                            >
                                {listDom}
                            </ProCard>
                        );
                    }}
                    locale='zh_CN'
                >
                    <ProFormText
                        name='demoField'
                        label='示例字段'
                        placeholder='示例字段'
                    />
                </SortableList>
            </ProForm>
        </>
    );
}
