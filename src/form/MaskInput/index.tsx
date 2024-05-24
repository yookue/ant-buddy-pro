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
import {ConfigProvider, Input, type InputProps, type InputRef} from 'antd';
import {FormContext} from 'antd/es/form/context';
import {ProFormText} from '@ant-design/pro-form';
import {type ProFormFieldItemProps} from '@ant-design/pro-form/es/interface';
import {RegexUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import warning from 'rc-util/es/warning';
import {PropsUtils} from '@/util/PropsUtils';


export type MaskInputProps = ProFormFieldItemProps<InputProps, InputRef> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-mask-input'
     */
    clazzPrefix?: string;

    /**
     * @description The allowed regex patterns, either is considered as valid
     * @description.zh-CN 允许值的正则表达式，满足任意一个即视为有效
     * @description.zh-TW 允許值的正則表達式，滿足任意一個即視爲有效
     */
    patterns?: RegExp[];

    /**
     * @description Whether to use ProFormField instead of Antd
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     * @default true
     */
    proField?: boolean;
};


/**
 * Component for displaying a text input box with regular expression validation capability
 *
 * @author David Hsing
 */
export const MaskInput: React.FC<MaskInputProps> = (props?: MaskInputProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const formContext = React.useContext(FormContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-mask-input');

    // Initialize the default props
    const {
        proField = true,
    } = props ?? {};

    warning(!!formContext, `This component needs a FormContext`);

    const webkitBrowser = navigator.userAgent.indexOf('WebKit') !== -1;
    const composeRef = React.useRef<boolean>(false);
    const previousRef = React.useRef<string>(formContext?.form?.getFieldValue(props?.name ?? props?.fieldProps?.name));

    const processValue = (value: string, passAction?: () => void, failAction?: () => void) => {
        if (value && props?.patterns && !props.patterns.some(item => RegexUtils.testResetting(item, value))) {
            formContext?.form?.setFieldValue(props?.name ?? props?.fieldProps?.name, previousRef.current);
            if (typeof failAction === 'function') {
                failAction();
            }
        } else {
            previousRef.current = value;
            if (typeof passAction === 'function') {
                passAction();
            }
        }
    };

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (composeRef.current) {
            return;
        }
        processValue(ev.target.value, () => {
            if (typeof props?.fieldProps?.onChange === 'function') {
                props.fieldProps.onChange(ev);
            }
        });
    };

    const handleCompositionStart = (ev: React.CompositionEvent<HTMLInputElement>) => {
        composeRef.current = true;
        if (typeof props?.fieldProps?.onCompositionStart === 'function') {
            props.fieldProps.onCompositionStart(ev);
        }
    };

    const handleCompositionEnd = (ev: React.CompositionEvent<HTMLInputElement>) => {
        composeRef.current = false;
        if (typeof props?.fieldProps?.onCompositionEnd === 'function') {
            props.fieldProps.onCompositionEnd(ev);
        }
        // WebKit browser (especially Chrome) triggers the `onCompositionEnd` event after `onChange` event
        if (webkitBrowser) {
            processValue(ev.currentTarget.value);
        }
    };

    const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['className', 'onChange', 'onCompositionStart', 'onCompositionEnd']);

    if (proField) {
        const restProps = !props ? {} : omit(props, ['fieldProps', 'clazzPrefix', 'patterns', 'proField']);
        return (
            <ProFormText
                {...restProps}
                fieldProps={{
                    className: classNames(clazzPrefix, props?.fieldProps?.className),
                    ...omitFieldProps,
                    onChange: handleChange,
                    onCompositionStart: handleCompositionStart,
                    onCompositionEnd: handleCompositionEnd,
                }}
            />
        );
    } else {
        const restProps = PropsUtils.pickForwardProps(props);
        return (
            <Input
                className={classNames(clazzPrefix, props?.fieldProps?.className)}
                {...restProps}
                {...omitFieldProps}
                onChange={handleChange}
                onCompositionStart={handleCompositionStart}
                onCompositionEnd={handleCompositionEnd}
            />
        );
    }
};
