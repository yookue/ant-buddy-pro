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
import {FormContext} from 'antd/es/form/context';
import {ElementUtils, NanoidUtils, RegexUtils} from '@unikue/ts-lang-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {AddonInput, type AddonInputProps} from '@/form/AddonInput';
import {ConsoleUtils} from '@/util/ConsoleUtils';


export type MaskInputProps = Omit<AddonInputProps, 'clazzPrefix'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-mask-input'
     */
    clazzPrefix?: string;

    /**
     * @description The allowed regex pattern, either is considered as valid
     * @description.zh-CN 允许值的正则表达式，满足任意一个即视为有效
     * @description.zh-TW 允許值的正則表達式，滿足任意一個即視爲有效
     */
    pattern?: RegExp | RegExp[];
};


/**
 * Component for displaying a text input box with regular expression validation capability
 *
 * @author David Hsing
 */
export const MaskInput: React.FC<MaskInputProps> = (props?: MaskInputProps) => {
    const formContext = React.useContext(FormContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-mask-input';

    ConsoleUtils.warn(!!formContext?.form, true, 'MaskInput', `Field '${props?.name ?? props?.fieldProps?.name}' needs a Form instance`);

    // Initialize the default props
    const {
        proField = true,
    } = props ?? {};

    const [fieldId] = React.useState<string>(NanoidUtils.getPopularId());
    const compositionRef = React.useRef<boolean>(false);
    const previousRef = React.useRef<string>(formContext?.form?.getFieldValue(props?.name ?? props?.fieldProps?.name));
    const webkitBrowser = navigator.userAgent.indexOf('WebKit') !== -1;

    const processValue = (value: string, passAction?: () => void, failAction?: () => void) => {
        if (value && props?.pattern && (Array.isArray(props.pattern) ? !props.pattern.some(item => RegexUtils.testResetting(item, value)) : !props.pattern.test(value))) {
            // formContext?.form?.setFieldValue(props?.name ?? props?.fieldProps?.name, previousRef.current);
            const inspect = document.querySelector<HTMLInputElement>(`[data-mask-input-id='${fieldId}']`);
            ElementUtils.setElementValue(inspect, previousRef.current);
            if (props?.name && !proField) {
                formContext?.form?.setFieldValue(props.name, previousRef.current);
            }
            failAction?.();
        } else {
            previousRef.current = value;
            if (props?.name && !proField) {
                formContext?.form?.setFieldValue(props.name, value);
            }
            passAction?.();
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (compositionRef.current) {
            return;
        }
        processValue(event.target.value, () => {
            props?.fieldProps?.onChange?.(event);
        });
    };

    const handleCompositionStart = (event: React.CompositionEvent<HTMLInputElement>) => {
        compositionRef.current = true;
        props?.fieldProps?.onCompositionStart?.(event);
    };

    const handleCompositionEnd = (event: React.CompositionEvent<HTMLInputElement>) => {
        compositionRef.current = false;
        props?.fieldProps?.onCompositionEnd?.(event);
        // WebKit browser (especially Chrome) triggers the `onCompositionEnd` event after `onChange` event
        if (webkitBrowser) {
            processValue(event.currentTarget.value);
        }
    };

    const restProps = !props ? {} : omit(props, ['fieldProps', 'clazzPrefix', 'pattern', 'proField']);
    const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['className', 'name', 'id', 'placeholder', 'onChange', 'onCompositionStart', 'onCompositionEnd']);
    return (
        <AddonInput
            clazzPrefix={clazzPrefix}
            fieldProps={{
                className: classNames(clazzPrefix, props?.fieldProps?.className),
                onChange: handleChange,
                onCompositionStart: handleCompositionStart,
                onCompositionEnd: handleCompositionEnd,
                ...omitFieldProps,
                'data-mask-input-id': fieldId,
            }}
            proField={proField}
            {...restProps}
        />
    );
};
