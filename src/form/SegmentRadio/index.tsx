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
import {ConfigProvider, Segmented, type SegmentedProps} from 'antd';
import {ProForm} from '@ant-design/pro-form';
import {type ProFormFieldItemProps, type ProFormFieldRemoteProps} from '@ant-design/pro-form/es/interface';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {FieldUtils} from '@/util/FieldUtils';


export type SegmentRadioProps = ProFormFieldItemProps<SegmentedProps> & ProFormFieldRemoteProps & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-segment-radio'
     */
    clazzPrefix?: string;
};


/**
 * Simple Segmented wrapper for antd v4
 *
 * @see "https://github.com/ant-design/pro-components/blob/main/packages/form/src/components/Segmented/index.tsx"
 */
export const SegmentRadio: React.FC<SegmentRadioProps> = (props?: SegmentRadioProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-segment-radio');

    const [optionItems, setOptionItems] = React.useState<any[]>(FieldUtils.buildFieldOptionsLocally(props) ?? []);
    if (props?.request) {
        FieldUtils.buildFieldOptionsRemotely(props, setOptionItems);
    }

    const restProps = !props ? {} : omit(props, ['className', 'fieldProps', 'valueEnum', 'params', 'request', 'clazzPrefix']);
    const restFieldProps = !props?.fieldProps ? {} : omit(props.fieldProps, ['options']);

    return (
        <ProForm.Item
            className={classNames(clazzPrefix, props?.className)}
            {...restProps}
        >
            <Segmented
                options={optionItems}
                {...restFieldProps}
            />
        </ProForm.Item>
    );
};
