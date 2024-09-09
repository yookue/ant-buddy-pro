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
import {Button, Divider} from 'antd';
import {ProForm, ProFormRadio} from '@ant-design/pro-form';
import {FlexBox} from '@yookue/ant-buddy-pro';


export default () => {
    const [justifyContent, setJustifyContent] = React.useState<string>('center');
    const [alignItems, setAlignItems] = React.useState<string>('center');
    const [gap, setGap] = React.useState<string>('middle');

    return (
        <>
            <ProForm layout='horizontal' autoFocusFirstInput={false} submitter={false}>
                <ProFormRadio.Group
                    label='Justify Content'
                    radioType='button'
                    fieldProps={{
                        value: justifyContent,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setJustifyContent(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Start', value: 'start'},
                        {label: 'Center', value: 'center'},
                        {label: 'End', value: 'end'},
                        {label: 'Space-Between', value: 'space-between'},
                        {label: 'Space-Around', value: 'space-around'},
                        {label: 'Space-Evenly', value: 'space-evenly'},
                    ]}
                />
                <ProFormRadio.Group
                    label='Align Items'
                    radioType='button'
                    fieldProps={{
                        value: alignItems,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setAlignItems(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Start', value: 'start'},
                        {label: 'Center', value: 'center'},
                        {label: 'End', value: 'end'},
                        {label: 'Stretch', value: 'stretch'},
                    ]}
                />
                <ProFormRadio.Group
                    label='Gap'
                    radioType='button'
                    fieldProps={{
                        value: gap,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setGap(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Small', value: 'small'},
                        {label: 'Middle', value: 'middle'},
                        {label: 'Large', value: 'large'},
                        {label: 'Customize', value: '48px'},
                    ]}
                />
            </ProForm>
            <Divider/>
            <FlexBox
                justifyContent={justifyContent}
                alignItems={alignItems}
                gap={gap}
                containerStyle={{
                    height: '160px',
                }}
            >
                <Button disabled={true}>Button</Button>
                <Button disabled={true}>Button</Button>
                <Button disabled={true}>Button</Button>
                <Button disabled={true}>Button</Button>
            </FlexBox>
        </>
    );
}
