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
import { Button, Divider } from 'antd';
import { ProForm, ProFormRadio, ProFormSwitch } from '@ant-design/pro-components';
import { FlexBox } from '@unikue/ant-buddy-pro';


export default () => {
    const [justifyContent, setJustifyContent] = React.useState<string>('center');
    const [alignItems, setAlignItems] = React.useState<string>('center');
    const [gap, setGap] = React.useState<string>('middle');
    const [boundBorder, setBoundBorder] = React.useState<boolean>(false);
    const [boundShadow, setBoundShadow] = React.useState<boolean>(false);

    return (
        <>
            <ProForm
                name='FlexBox_demo.zh-CN'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='主轴空间'
                    radioType='button'
                    fieldProps={{
                        value: justifyContent,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setJustifyContent(event.target?.value);
                        }
                    }}
                    options={[
                        { label: 'Start', value: 'start' },
                        { label: 'Center', value: 'center' },
                        { label: 'End', value: 'end' },
                        { label: 'Space-Between', value: 'space-between' },
                        { label: 'Space-Around', value: 'space-around' },
                        { label: 'Space-Evenly', value: 'space-evenly' },
                    ]}
                />
                <ProFormRadio.Group
                    label='交叉轴对齐'
                    radioType='button'
                    fieldProps={{
                        value: alignItems,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setAlignItems(event.target?.value);
                        }
                    }}
                    options={[
                        { label: 'Start', value: 'start' },
                        { label: 'Center', value: 'center' },
                        { label: 'End', value: 'end' },
                        { label: 'Stretch', value: 'stretch' },
                    ]}
                />
                <ProFormRadio.Group
                    label='间隙'
                    radioType='button'
                    fieldProps={{
                        value: gap,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setGap(event.target?.value);
                        }
                    }}
                    options={[
                        { label: '大', value: 'large' },
                        { label: '中', value: 'middle' },
                        { label: '小', value: 'small' },
                        { label: '自定义', value: '48px' },
                    ]}
                />
                <ProForm.Group>
                    <ProFormSwitch
                        label='边框线条'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: boundBorder,
                            onChange: setBoundBorder,
                        }}
                    />
                    <ProFormSwitch
                        label='边框阴影'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: boundShadow,
                            onChange: setBoundShadow,
                        }}
                    />
                </ProForm.Group>
            </ProForm>
            <Divider />
            <FlexBox
                justifyContent={justifyContent}
                alignItems={alignItems}
                gap={gap}
                boundBorder={boundBorder}
                boundShadow={boundShadow}
                containerStyle={{
                    height: '160px',
                }}
            >
                <Button disabled={true}>按钮</Button>
                <Button disabled={true}>按钮</Button>
                <Button disabled={true}>按钮</Button>
                <Button disabled={true}>按钮</Button>
            </FlexBox>
        </>
    );
}
