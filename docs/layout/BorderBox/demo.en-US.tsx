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
import {Divider} from 'antd';
import {CoffeeOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-components';
import {BorderBox} from '@unikue/ant-buddy-pro';
import {type BoundShapeType} from '@unikue/ant-buddy-pro/layout/BorderBox';


export default () => {
    const [boundShape, setBoundShape] = React.useState<BoundShapeType>('rect');
    const [borderAll, setBorderAll] = React.useState<boolean>(false);
    const [borderTop, setBorderTop] = React.useState<boolean>(true);
    const [borderRight, setBorderRight] = React.useState<boolean>(true);
    const [borderBottom, setBorderBottom] = React.useState<boolean>(true);
    const [borderLeft, setBorderLeft] = React.useState<boolean>(true);
    const [boundShadow, setBoundShadow] = React.useState<boolean>(false);

    return (
        <>
            <ProForm
                name='BorderBox_demo.en-US'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='Bound Shape'
                    radioType='button'
                    fieldProps={{
                        value: boundShape,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setBoundShape(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Rect', value: 'rect'},
                        {label: 'Circle', value: 'circle'},
                    ]}
                />
                <ProFormSwitch
                    label='Border All'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: borderAll,
                        onChange: setBorderAll,
                    }}
                />
                <ProForm.Group>
                    <ProFormSwitch
                        label='Border Top'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: borderTop,
                            disabled: borderAll || boundShape === 'circle',
                            onChange: setBorderTop,
                        }}
                    />
                    <ProFormSwitch
                        label='Border Bottom'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: borderBottom,
                            disabled: borderAll || boundShape === 'circle',
                            onChange: setBorderBottom,
                        }}
                    />
                    <ProFormSwitch
                        label='Border Left'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: borderLeft,
                            disabled: borderAll || boundShape === 'circle',
                            onChange: setBorderLeft,
                        }}
                    />
                    <ProFormSwitch
                        label='Border Right'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: borderRight,
                            disabled: borderAll || boundShape === 'circle',
                            onChange: setBorderRight,
                        }}
                    />
                </ProForm.Group>
                <ProFormSwitch
                    label='Bound Shadow'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: boundShadow,
                        onChange: setBoundShadow,
                    }}
                />
            </ProForm>
            <Divider/>
            <BorderBox
                boundShape={boundShape}
                boundShadow={boundShadow}
                borderAll={borderAll}
                borderTop={borderTop}
                borderBottom={borderBottom}
                borderLeft={borderLeft}
                borderRight={borderRight}
                containerStyle={{padding: '12px'}}
            >
                {(boundShape === 'circle') ? <CoffeeOutlined style={{fontSize: 22}}/> : 'The quick brown fox jumps over a lazy dog.'}
            </BorderBox>
        </>
    );
}
