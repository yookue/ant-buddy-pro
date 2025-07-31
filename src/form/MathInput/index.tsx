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
import {Form} from 'antd';
import {FormContext} from 'antd/es/form/context';
import {ProForm} from '@ant-design/pro-form';
import {EditOrReadOnlyContext} from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import {type ProFormFieldItemProps} from '@ant-design/pro-form/es/typing';
import {useIntl} from '@ant-design/pro-provider';
import {NanoidUtils, ObjectUtils, StringUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import {MathfieldElement, type MathfieldOptions} from 'mathlive';
import omit from 'rc-util/es/omit';
import 'mathlive';
import {PropUtils} from '@/util/PropUtils';
import {intlLocales} from './intl-locales';
import {useFieldStyle} from './style';


export type IntlLocaleProps = {
    /**
     * @description Invalid Formula
     * @description.zh-CN 无效的数学公式
     * @description.zh-TW 無效的數學公式
     */
    invalidFormula?: string;
};


export type MathInputProps = Omit<ProFormFieldItemProps, 'children' | 'fieldRef' | 'fieldProps'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-math-input'
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
     * @description The options of the math field
     * @description.zh-CN Mathfield 的选项
     * @description.zh-TW Mathfield 的選項
     * @see "https://mathlive.io/mathfield/guides/customizing/#math-display-options"
     */
    mathOptions?: Partial<MathfieldOptions>;

    /**
     * @description Whether to use validate value by rules
     * @description.zh-CN 是否增加公式校验规则
     * @description.zh-TW 是否增加公式校驗規則
     */
    validation?: boolean;

    /**
     * @description The callback function when the value changed
     * @description.zh-CN 值更改后的回调函数
     * @description.zh-TW 值更改後的回調函數
     */
    onChange?: (value?: string) => void;

    /**
     * @description Whether to use ProFormField instead of Antd
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     */
    proField?: boolean;

    /**
     * @description The locale of the component, e.g. 'en_US'
     * @description.zh-CN 组件的语言, e.g. 'zh_CN'
     * @description.zh-TW 組件的語言, e.g. 'zh_TW'
     */
    locale?: string;

    /**
     * @description The props of locale
     * @description.zh-CN 多语言属性
     * @description.zh-TW 多語言屬性
     */
    localeProps?: IntlLocaleProps;
} & Pick<React.InputHTMLAttributes<HTMLInputElement>, 'value'>;


/**
 * Component for displaying a text input-alike box with math capability
 *
 * @author David Hsing
 */
export const MathInput: React.FC<MathInputProps> = (props?: MathInputProps) => {
    const formContext = React.useContext(FormContext);
    const editContext = React.useContext(EditOrReadOnlyContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-math-input';
    const intlType = useIntl();

    // Initialize the default props
    const {
        mathOptions = {
            virtualKeyboardMode: 'auto',
            smartMode: true,
        },
        validation = true,
        proField = true,
        locale = intlType.locale,
    } = props ?? {};

    const [fieldId] = React.useState<string>(NanoidUtils.getPopularId());
    const containerRef = React.useRef<HTMLDivElement>(null);
    const fieldRef = React.useRef<MathfieldElement>(null);
    const fieldStyle = useFieldStyle(clazzPrefix);

    // const loadMathLiveStyles = async () => {
    //     try {
    //         await import('mathlive/mathlive-fonts.css');
    //     } catch (error) {
    //         console.warn('Failed to load mathlive styles:', error);
    //     }
    // };

    // React.useEffect(() => {
    //     loadMathLiveStyles().then();
    // }, []);

    const entryImmutable = editContext.mode === 'read' || props?.proFieldProps?.mode === 'read' || props?.proFieldProps?.readonly;

    const handleInputChange = React.useCallback(() => {
        if (fieldRef.current) {
            const value = fieldRef.current.value;
            if (props?.name) {
                formContext?.form?.setFieldValue(props.name, value);
            }
            props?.onChange?.(value);
        }
    }, [props?.name, props?.onChange, formContext?.form]);

    React.useEffect(() => {
        if (containerRef.current && !fieldRef.current && window.MathfieldElement) {
            const mathField = new window.MathfieldElement();
            if (mathOptions) {
                Object.entries(mathOptions).forEach(([key, value]) => {
                    if (value !== undefined) {
                        const attrName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
                        mathField.setAttribute(attrName, String(value));
                    }
                });
            }
            mathField.addEventListener('input', handleInputChange);
            if (containerRef.current) {
                while (containerRef.current.firstChild) {
                    containerRef.current.removeChild(containerRef.current.firstChild);
                }
                containerRef.current.appendChild(mathField);
                // @ts-ignore
                fieldRef.current = mathField;
            }
        }
        if (fieldRef.current) {
            try {
                if (props?.value) {
                    fieldRef.current.value = StringUtils.join(props?.value) ?? '';
                }
                if (props?.placeholder) {
                    fieldRef.current.placeholder = `\\text{${StringUtils.join(props.placeholder) ?? ''}}`;
                }
                fieldRef.current.disabled = props?.disabled || entryImmutable || false;
                fieldRef.current.readOnly = props?.readonly || entryImmutable || false;
            } catch {
            }
        }

        return () => {
            if (fieldRef.current) {
                try {
                    fieldRef.current.removeEventListener('input', handleInputChange);
                    // @ts-ignore
                    fieldRef.current = null;
                } catch {
                }
            }
        };
    }, [fieldId]);

    const fieldDom = React.useMemo(() => {
        return (
            <div
                ref={containerRef}
                className={classNames(clazzPrefix, fieldStyle.hashId, (!entryImmutable ? undefined : `${clazzPrefix}-immutable`), props?.containerClazz)}
                style={props?.containerStyle}
                data-math-input-id={fieldId}
            />
        );
    }, [props]);

    const internalRules = !validation ? [] : [
        {
            validator: async (_rule: any, value: string) => {
                if (!value) {
                    return;
                }
                let result = false;
                try {
                    fieldRef.current?.getValue('latex-expanded');
                    result = true;
                } catch {
                }
                if (!result) {
                    return Promise.reject(ObjectUtils.firstNotNil(props?.localeProps?.invalidFormula, intlLocales.get([locale, 'invalidFormula']), intlLocales.get(['en_US', 'invalidFormula'])));
                }
            }
        }
    ];

    const omitProps = !props? {} : omit(props, ['rules', 'clazzPrefix', 'containerClazz', 'containerStyle', 'mathOptions', 'validation', 'onChange', 'proField', 'locale', 'localeProps']);

    if (!proField) {
        const itemProps = !omitProps ? {} : PropUtils.omitProProps(omitProps);
        return (
            <Form.Item
                rules={[
                    ...internalRules,
                    ...(props?.rules ?? [])
                ]}
                {...itemProps}
            >
                {fieldDom}
            </Form.Item>
        );
    }
    return (
        <ProForm.Item
            rules={[
                ...internalRules,
                ...(props?.rules ?? [])
            ]}
            {...omitProps}
        >
            {fieldDom}
        </ProForm.Item>
    );
};
