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
import {type SegmentedLabeledOption} from 'antd/es/segmented';
import {ProForm} from '@ant-design/pro-form';
import {type ProFormFieldItemProps, type ProFormFieldRemoteProps} from '@ant-design/pro-form/es/interface';
import {EditOrReadOnlyContext} from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import pickProFormItemProps from '@ant-design/pro-utils/es/pickProFormItemProps';
import classNames from 'classnames';
import {type SegmentedRawOption} from 'rc-segmented';
import omit from 'rc-util/es/omit';
import {type WithFalse, type RequestOptionPlace} from '@/type/declaration';
import {FieldUtils} from '@/util/FieldUtils';
import {PropsUtils} from '@/util/PropsUtils';


export type SegmentRadioProps = Omit<ProFormFieldItemProps<SegmentedProps>, 'placeholder' | 'readonly'> & Omit<ProFormFieldRemoteProps, 'request'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-segment-radio'
     */
    clazzPrefix?: string;

    /**
     * @description The CSS class name of the container div
     * @description.zh-CN 容器 div 的 CSS 类名
     * @description.zh-TW 容器 div 的 CSS 類名
     */
    containerClazz?: string;

    /**
     * @description The CSS style of the container div
     * @description.zh-CN 容器 div 的 CSS 样式
     * @description.zh-TW 容器 div 的 CSS 樣式
     */
    containerStyle?: React.CSSProperties;

    /**
     * @description The remote request
     * @description.zh-CN 远程数据请求
     * @description.zh-TW 遠程數據請求
     */
    request?: (params?: Record<string, any>, props?: Record<string, any>) => Promise<(SegmentedRawOption | SegmentedLabeledOption)[]>;

    /**
     * @description Whether to keep the `options` data when using the `request` data
     * @description.zh-CN 使用 `request` 数据的同时，是否保留 `options` 数据
     * @description.zh-TW 使用 `request` 數據的同時，是否保留 `options` 數據
     */
    requestOptionPlace?: WithFalse<RequestOptionPlace>;

    /**
     * @description Whether to use ProFormField instead of Antd
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     * @default true
     */
    proField?: boolean;

    /**
     * @description The callback function when the option items changed
     * @description.zh-CN 选项变化时的回调函数
     * @description.zh-TW 選項變化時的回調函數
     */
    onOptionItemsChange?: (options?: (SegmentedRawOption | SegmentedLabeledOption)[]) => void;
};


/**
 * Component for displaying a segmented field
 *
 * @see "https://github.com/ant-design/pro-components/blob/main/packages/form/src/components/Segmented/index.tsx"
 *
 * @author David Hsing
 */
export const SegmentRadio: React.FC<SegmentRadioProps> = (props?: SegmentRadioProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const editContext = React.useContext(EditOrReadOnlyContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-segment-radio');

    // Initialize the default props
    const {
        proField = true,
    } = props ?? {};

    const [optionItems, setOptionItems] = React.useState<(SegmentedRawOption | SegmentedLabeledOption)[] | undefined>(() => {
        const rawOptions = props?.fieldProps?.options ?? [];
        const enumOptions = FieldUtils.valueEnumToSegmentOptions(props?.valueEnum) ?? [];
        return [...rawOptions, ...enumOptions];
    });
    if (props?.request && props?.requestOptionPlace !== false) {
        FieldUtils.fetchRemoteRequest(props, (values?: (SegmentedRawOption | SegmentedLabeledOption)[]) => {
            // noinspection DuplicatedCode
            if (!values) {
                if (props?.requestOptionPlace === 'override') {
                    setOptionItems(undefined);
                }
                return;
            }
            if (props?.requestOptionPlace === undefined || props?.requestOptionPlace === 'override') {
                setOptionItems(values);
            } else if (props?.requestOptionPlace === 'before') {
                setOptionItems([...values, ...(optionItems ?? [])]);
            } else if (props?.requestOptionPlace === 'after') {
                setOptionItems([...(optionItems ?? []), ...values]);
            }
        }, []);
    }

    React.useEffect(() => {
        props?.onOptionItemsChange?.(optionItems);
    }, [optionItems]);

    const entryImmutable = editContext.mode === 'read' || props?.fieldProps?.disabled || props?.fieldProps?.readOnly || props?.proFieldProps?.mode === 'read' || props?.proFieldProps?.readonly;
    const restFieldProps = !props?.fieldProps ? {} : omit(props.fieldProps, ['options', 'disabled']);

    if (proField) {
        const restProps = !props ? {} : pickProFormItemProps(props);
        return (
            <div className={classNames(clazzPrefix, props?.containerClazz)} style={props?.containerStyle}>
                <ProForm.Item {...restProps}>
                    <Segmented
                        options={optionItems ?? []}
                        disabled={entryImmutable}
                        {...restFieldProps}
                    />
                </ProForm.Item>
            </div>
        );
    } else {
        const restProps = PropsUtils.pickForwardProps(props);
        return (
            <div className={classNames(clazzPrefix, props?.containerClazz)} style={props?.containerStyle}>
                <Segmented
                    options={optionItems ?? []}
                    disabled={entryImmutable}
                    {...restProps}
                    {...restFieldProps}
                />
            </div>
        );
    }
};
