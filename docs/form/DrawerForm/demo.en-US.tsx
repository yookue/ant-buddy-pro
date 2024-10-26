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
import {Button, Divider, Empty} from 'antd';
import {FireOutlined} from '@ant-design/icons';
import {ProForm, ProFormRadio, ProFormSwitch} from '@ant-design/pro-form';
import {DrawerForm} from '@yookue/ant-buddy-pro';
import {type Placement} from 'rc-drawer/es/DrawerPopup';


export default () => {
    const [placement, setPlacement] = React.useState<Placement>('right');
    const [open, setOpen] = React.useState<boolean>(false);
    const [extra, setExtra] = React.useState<boolean>(true);

    return (
        <>
            <ProForm
                name='DrawerForm_demo'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='Popup Placement'
                    radioType='button'
                    fieldProps={{
                        value: placement,
                        buttonStyle: 'solid',
                        onChange: (event) => {
                            setPlacement(event.target?.value);
                        }
                    }}
                    options={[
                        {label: 'Left', value: 'left'},
                        {label: 'Right', value: 'right'},
                        {label: 'Top', value: 'top'},
                        {label: 'Bottom', value: 'bottom'},
                    ]}
                />
                <ProFormSwitch
                    label='Extra'
                    checkedChildren='True'
                    unCheckedChildren='False'
                    fieldProps={{
                        checked: extra,
                        onChange: setExtra,
                    }}
                />
                <Button
                    icon={<FireOutlined/>}
                    disabled={open}
                    onClick={() => setOpen(true)}
                >
                    Open
                </Button>
            </ProForm>
            <Divider/>
            <DrawerForm
                title='DrawerForm title'
                open={open}
                drawerProps={{
                    placement: placement,
                    extra: extra && (
                        <Button disabled={true}>
                            Button
                        </Button>
                    ),
                }}
                onOpenChange={(open: boolean) => {
                    setOpen(open);
                }}
                onFinish={async () => {
                    return true;
                }}
            >
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='No Data'/>
            </DrawerForm>
        </>
    );
}
