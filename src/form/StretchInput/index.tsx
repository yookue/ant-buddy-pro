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
import {nanoid} from '@ant-design/pro-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {PropsUtils} from '@/util/PropsUtils';
import './index.less';


export type StretchTriggerType = 'click' | 'hover';


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
    triggerType?: StretchTriggerType;

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
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-stretch-input');

    // Initialize the default props
    const {
        triggerType = 'click',
    } = props ?? {};

    const entryId = nanoid();
    const [stretch, setStretch] = React.useState<boolean>(false);

    const restoreMiniature = (event: any) => {
        if (!props?.miniature || !stretch) {
            return;
        }
        const entry = document.querySelector<HTMLInputElement>(`input[data-stretch-input-id='${entryId}']`);
        if (entry && !entry.contains(event.target)) {
            setStretch(false);
        }
    };

    React.useEffect(() => {
        if (stretch && props?.miniature) {
            document.querySelector<HTMLInputElement>(`input[data-stretch-input-id='${entryId}']`)?.focus();
        }
        props?.onStretchChange?.(stretch);
    }, [stretch]);

    React.useLayoutEffect(() => {
        document.addEventListener('keydown', restoreMiniature);
        document.addEventListener('mousedown', restoreMiniature);
        return () => {
            document.removeEventListener('keydown', restoreMiniature);
            document.removeEventListener('mousedown', restoreMiniature);
        }
    }, []);

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setStretch(true);
        props?.fieldProps?.onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setStretch(false);
        props?.fieldProps?.onBlur?.(event);
    };

    if (props?.miniature && !stretch) {
        return (
            <span
                className={`${clazzPrefix}-miniature`}
                onClick={triggerType !== 'click' ? undefined : () => setStretch(true)}
                onMouseOver={triggerType !== 'hover' ? undefined : () => setStretch(true)}
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
                    className: classNames(clazzPrefix, (stretch ? props?.stretchClazz : props?.fieldProps?.className)),
                    ...omitFieldProps,
                    onFocus: handleFocus,
                    onBlur: handleBlur,
                    style: stretch ? props?.stretchStyle : props?.fieldProps?.style,
                    'data-stretch-input-id': entryId,
                }}
            />
        );
    } else {
        const restProps = PropsUtils.pickForwardProps(props);
        return (
            <Input
                className={classNames(clazzPrefix, (stretch ? props?.stretchClazz : props?.fieldProps?.className))}
                {...restProps}
                {...omitFieldProps}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={stretch ? props?.stretchStyle : props?.fieldProps?.style}
                data-stretch-input-id={entryId}
            />
        );
    }
};
