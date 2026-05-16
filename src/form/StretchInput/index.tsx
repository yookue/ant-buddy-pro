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
import { Form, Input, type InputProps, type InputRef } from 'antd';
import { ProFormText } from '@ant-design/pro-components';
import { type ProFormFieldItemProps } from '@ant-design/pro-components/es/form/typing';
import { omit } from '@rc-component/util';
import { NanoidUtils, StringUtils } from '@unikue/ts-lang-utils';
import { useEventListener } from 'ahooks';
import classnames from 'classnames';
import { type ClickHoverType } from '@/type/declaration';
import { useFieldStyle } from './styles';


export type StretchInputProps = Omit<ProFormFieldItemProps<InputProps, InputRef>, 'children'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-stretch-input'
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
     * @description The instead DOM when the input box is collapsed (lost focus)
     * @description.zh-CN 文本框折叠（失去焦点）时的替代节点内容
     * @description.zh-TW 文本框折疊（失去焦點）時的替代節點內容
     */
    miniature?: React.ReactNode;

    /**
     * @description The CSS class name when stretched
     * @description.zh-CN 拉伸状态时的 CSS 类名
     * @description.zh-TW 拉伸狀態時的 CSS 類名
     */
    stretchClazz?: string;

    /**
     * @description The CSS style when stretched
     * @description.zh-CN 拉伸状态时的 CSS 样式
     * @description.zh-TW 拉伸狀態時的 CSS 樣式
     */
    stretchStyle?: React.CSSProperties;

    /**
     * @description The trigger type when stretch the collapsed DOM
     * @description.zh-CN 当需要拉伸已折叠的 DOM 时的触发方式
     * @description.zh-TW 當需要拉伸已折疊的 DOM 時的觸發方式
     * @default 'click'
     */
    triggerType?: ClickHoverType;

    /**
     * @description Whether to use ProFormField instead of Antd
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     */
    proField?: boolean;

    /**
     * @description The callback function when stretch changed
     * @description.zh-CN 拉伸状态变化时的回调函数
     * @description.zh-TW 拉伸狀態變化時的回調函數
     */
    onStretchChange?: (stretch?: boolean) => void;
};


/**
 * Component for displaying a text input box with stretch capability when focus it
 *
 * @author David Hsing
 */
export const StretchInput: React.FC<StretchInputProps> = (props?: StretchInputProps) => {
    const form = Form.useFormInstance();
    const clazzPrefix = props?.clazzPrefix ?? 'abp-stretch-input';

    // Initialize the default props
    const {
        triggerType = 'click',
    } = props ?? {};

    const [stretched, setStretched] = React.useState<boolean>(false);

    const [fieldId] = React.useState<string>(NanoidUtils.getPopularId());
    const fieldStyle = useFieldStyle(clazzPrefix);

    const restoreLayout = (event: any) => {
        if (!props?.miniature || !stretched) {
            return;
        }
        const inspect = document.querySelector<HTMLInputElement>(`[data-stretch-input-id='${fieldId}']`);
        if (!inspect?.contains(event.target)) {
            setStretched(false);
        }
    };

    useEventListener(['keydown', 'mousedown'], restoreLayout);

    const handleInputFocus = (event: any) => {
        setStretched(true);
        props?.fieldProps?.onFocus?.(event);
    };

    const handleInputBlur = (event: any) => {
        setStretched(false);
        props?.fieldProps?.onBlur?.(event);
    };

    const buildInnerDom = () => {
        if (!stretched && props?.miniature) {
            return (
                <span
                    className={`${clazzPrefix}-miniature`}
                    onClick={triggerType !== 'click' ? undefined : () => setStretched(true)}
                    onMouseOver={triggerType !== 'hover' ? undefined : () => setStretched(true)}
                >
                    {props.miniature}
                </span>
            );
        }

        const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['className', 'style', 'onFocus', 'onBlur']);
        if (props?.proField) {
            const restProps = !props ? {} : omit(props, ['fieldProps', 'clazzPrefix', 'miniature', 'stretchClazz', 'stretchStyle', 'triggerType', 'proField']);
            return (
                <ProFormText
                    {...restProps}
                    fieldProps={{
                        className: classnames(props?.className ?? props?.fieldProps?.className, !stretched ? undefined : props?.stretchClazz),
                        style: stretched ? props?.stretchStyle : props?.fieldProps?.style,
                        onFocus: handleInputFocus,
                        onBlur: handleInputBlur,
                        ...omitFieldProps,
                        'data-stretch-input-id': fieldId,
                    }}
                />
            );
        } else {
            const restProps = omit(omitFieldProps, ['placeholder', 'onChange']);
            return (
                <Input
                    className={classnames(props?.className ?? props?.fieldProps?.className, !stretched ? undefined : props?.stretchClazz)}
                    placeholder={StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    style={stretched ? props?.stretchStyle : props?.fieldProps?.style}
                    onChange={(event: any) => {
                        if (props?.name) {
                            form?.setFieldValue(props.name, event.target.value);
                        }
                        props?.fieldProps?.onChange?.(event);
                    }}
                    {...restProps}
                    data-stretch-input-id={fieldId}
                />
            );
        }
    };

    const innerDom = buildInnerDom();

    return (
        <div
            className={classnames(clazzPrefix, fieldStyle.hashId, props?.containerClazz)}
            style={props?.containerStyle}
        >
            {innerDom}
        </div>
    );
};
