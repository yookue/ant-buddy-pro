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
import {Input, Space, type InputProps, type InputRef} from 'antd';
import {FormContext} from 'antd/es/form/context';
import {ProFormText, ProForm} from '@ant-design/pro-form';
import {type ProFormFieldItemProps} from '@ant-design/pro-form/es/typing';
import {StringUtils} from '@unikue/ts-lang-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {useFieldStyle} from './style';


export type AddonInputProps = Omit<ProFormFieldItemProps<InputProps, InputRef>, 'children'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-addon-input'
     */
    clazzPrefix?: string;

    /**
     * @description The content before the input field
     * @description.zh-CN 输入框前的内容
     * @description.zh-TW 輸入框前的內容
     */
    addonBefore?: React.ReactNode | (() => React.ReactNode | undefined);

    /**
     * @description The content after the input field
     * @description.zh-CN 输入框后的内容
     * @description.zh-TW 輸入框後的內容
     */
    addonAfter?: React.ReactNode | (() => React.ReactNode | undefined);

    /**
     * @description Whether to use compact mode for the addon before
     * @description.zh-CN 输入框前的内容是否使用紧凑模式
     * @description.zh-TW 輸入框前的內容是否使用緊凑模式
     * @default false
     */
    compactBefore?: boolean;

    /**
     * @description Whether to use compact mode for the addon after
     * @description.zh-CN 输入框后的内容是否使用紧凑模式
     * @description.zh-TW 輸入框後的內容是否使用緊凑模式
     * @default false
     */
    compactAfter?: boolean;

    /**
     * @description Whether to match the width of parent element or not
     * @description.zh-CN 是否匹配父节点的宽度
     * @description.zh-TW 是否匹配父節點的寬度
     */
    widthBlock?: boolean;

    /**
     * @description Whether to use ProFormField instead of Antd
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     * @default true
     */
    proField?: boolean;
};


/**
 * Component for displaying a text input box with addon before/after which aiming to action like the early version of Input
 *
 * @author David Hsing
 */
export const AddonInput: React.FC<AddonInputProps> = (props?: AddonInputProps) => {
    const formContext = React.useContext(FormContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-addon-input';

    // Initialize the default props
    const {
        compactBefore = false,
        compactAfter = false,
        widthBlock = true,
        proField = true,
    } = props ?? {};

    const fieldStyle = useFieldStyle(clazzPrefix);

    // Determine wrapper classes based on addon presence
    const addonBeforeDom = (typeof props?.addonBefore === 'function') ? props.addonBefore() : props?.addonBefore;
    const addonAfterDom = (typeof props?.addonAfter === 'function') ? props.addonAfter() : props?.addonAfter;
    const compactBeforeClazz = !compactBefore ? undefined : `${clazzPrefix}-compact-before`;
    const compactAfterClazz = !compactAfter ? undefined : `${clazzPrefix}-compact-after`;
    const widthBlockClazz = !widthBlock ? undefined : `${clazzPrefix}-width-block`;

    const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['className', 'id', 'placeholder', 'onChange']);

    if (proField) {
        const restProps = !props ? {} : omit(props, ['className', 'fieldProps', 'clazzPrefix', 'addonBefore', 'addonAfter', 'compactBefore', 'compactAfter', 'widthBlock', 'proField']);
        return (
            <div className={classNames(clazzPrefix, fieldStyle.hashId, widthBlockClazz, props?.className ?? props?.fieldProps?.className)}>
                <ProForm.Item
                    {...restProps}
                >
                    <Space.Compact className={`${clazzPrefix}-space`}>
                        {!!addonBeforeDom && (
                            <Space.Addon className={compactBeforeClazz}>
                                {addonBeforeDom}
                            </Space.Addon>
                        )}
                        <ProFormText
                            noStyle={true}
                            fieldProps={{
                                placeholder: StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder,
                                ...omitFieldProps,
                            }}
                        />
                        {!!addonAfterDom && (
                            <Space.Addon className={compactAfterClazz}>
                                {addonAfterDom}
                            </Space.Addon>
                        )}
                    </Space.Compact>
                </ProForm.Item>
            </div>
        );
    } else {
        return (
            <div className={classNames(clazzPrefix, fieldStyle.hashId, widthBlockClazz, props?.className ?? props?.fieldProps?.className)}>
                <Space.Compact className={`${clazzPrefix}-space`}>
                    {!!addonBeforeDom && (
                        <Space.Addon className={compactBeforeClazz}>
                            {addonBeforeDom}
                        </Space.Addon>
                    )}
                    <Input
                        className={`${clazzPrefix}-input`}
                        placeholder={StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder}
                        onChange={(event: any) => {
                            if (props?.name) {
                                formContext?.form?.setFieldValue(props.name, event.target.value);
                            }
                            props?.fieldProps?.onChange?.(event);
                        }}
                        {...omitFieldProps}
                    />
                    {!!addonAfterDom && (
                        <Space.Addon className={compactAfterClazz}>
                            {addonAfterDom}
                        </Space.Addon>
                    )}
                </Space.Compact>
            </div>
        );
    }
};
