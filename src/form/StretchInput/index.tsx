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
import {ProFormText} from '@ant-design/pro-form';
import {type ProFormFieldItemProps} from '@ant-design/pro-form/es/interface';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {PropsUtils} from '@/util/PropsUtils';


export type StretchInputProps = ProFormFieldItemProps<InputProps, InputRef> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-stretch-input'
     */
    clazzPrefix?: string;

    /**
     * @description The instead DOM when the input box is collapsed (lost focus)
     * @description.zh-CN 文本框折叠（失去焦点）时的替代节点内容
     * @description.zh-TW 文本框折疊（失去焦點）時的替代節點內容
     */
    collapseDom?: React.ReactNode;

    /**
     * @description The trigger method when stretch the collapsed DOM
     * @description.zh-CN 当需要拉伸已折叠的 DOM 时的触发方式
     * @description.zh-TW 當需要拉伸已折疊的 DOM 時的觸發方式
     * @default 'click'
     */
    collapseTrigger?: 'click' | 'hover';

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
     * @description Whether to use ProFormField instead of Antd
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     */
    proField?: boolean;
};


/**
 * Component for displaying a text input box with stretch capability when focus it
 *
 * @author David Hsing
 */
export const StretchInput: React.ForwardRefExoticComponent<StretchInputProps & React.RefAttributes<any>> = React.forwardRef((props?: StretchInputProps, ref?: any) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-stretch-input');

    // Initialize the default props
    const {
        collapseTrigger = 'click',
    } = props ?? {};

    const fieldRef = React.useRef<InputRef>(null);
    React.useImperativeHandle(ref, () => fieldRef.current);

    const [stretchMe, setStretchMe] = React.useState<boolean>(false);

    const ensureStretch = (ev: any) => {
        if (props?.collapseDom && stretchMe && !fieldRef.current?.input?.contains(ev.target)) {
            setStretchMe(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('keydown', ensureStretch);
        document.addEventListener('mousedown', ensureStretch);
        return () => {
            document.removeEventListener('keydown', ensureStretch);
            document.removeEventListener('mousedown', ensureStretch);
        }
    });

    const handleFocus = (ev: React.FocusEvent<HTMLInputElement>) => {
        setStretchMe(true);
        if (typeof props?.fieldProps?.onFocus === 'function') {
            props.fieldProps.onFocus(ev);
        }
    };

    const handleBlur = (ev: React.FocusEvent<HTMLInputElement>) => {
        setStretchMe(false);
        if (typeof props?.fieldProps?.onBlur === 'function') {
            props.fieldProps.onBlur(ev);
        }
    };

    if (props?.collapseDom && !stretchMe) {
        return (
            <span
                className={`${clazzPrefix}-collapsed`}
                onClick={collapseTrigger !== 'click' ? undefined : () => setStretchMe(true)}
                onMouseOver={collapseTrigger !== 'hover' ? undefined : () => setStretchMe(true)}
            >
                {props.collapseDom}
            </span>
        );
    }

    const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['ref', 'className', 'style', 'onFocus', 'onBlur']);

    if (props?.proField) {
        const restProps = !props ? {} : omit(props, ['fieldProps', 'clazzPrefix', 'collapseDom', 'collapseTrigger', 'stretchClazz', 'stretchStyle', 'proField']);
        return (
            <ProFormText
                {...restProps}
                fieldProps={{
                    ref: fieldRef,
                    className: classNames(clazzPrefix, (stretchMe ? props?.stretchClazz : props?.fieldProps?.className)),
                    ...omitFieldProps,
                    onFocus: handleFocus,
                    onBlur: handleBlur,
                    style: stretchMe ? props?.stretchStyle : props?.fieldProps?.style,
                }}
            />
        );
    } else {
        const restProps = PropsUtils.pickForwardProps(props);
        return (
            <Input
                ref={fieldRef}
                className={classNames(clazzPrefix, (stretchMe ? props?.stretchClazz : props?.fieldProps?.className))}
                {...restProps}
                {...omitFieldProps}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={stretchMe ? props?.stretchStyle : props?.fieldProps?.style}
            />
        );
    }
});