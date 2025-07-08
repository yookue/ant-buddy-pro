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
import {Input, Checkbox, Space, type InputProps, type InputRef, type CheckboxProps, type TooltipProps} from 'antd';
import {FormContext} from 'antd/es/form/context';
import {ProFormText} from '@ant-design/pro-form';
import {type ProFormFieldItemProps} from '@ant-design/pro-form/es/typing';
import {useIntl} from '@ant-design/pro-provider';
import {If} from '@yookue/react-condition';
import {ObjectUtils, StringUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {type WithFalse, type BeforeAfterType} from '@/type/declaration';
import {TooltipRender} from '@/render/TooltipRender';
import {intlLocales} from './intl-locales';
import {useFieldStyle} from './style';


export type AddonCheckProps = CheckboxProps & React.PropsWithChildren<{
    /**
     * @description The prefix of name for the checkbox
     * @description.zh-CN 复选框的名称前缀
     * @description.zh-TW 複選框的名稱前綴
     */
    namePrefix?: string;

    /**
     * @description The suffix of name for the checkbox
     * @description.zh-CN 复选框的名称后缀
     * @description.zh-TW 複選框的名稱后綴
     * @default 'Exact'
     */
    nameSuffix?: string;
}>;


export type IntlLocaleProps = {
    /**
     * @description Match Exactly
     * @description.zh-CN 全字匹配
     * @description.zh-TW 全字匹配
     */
    exactMatch?: React.ReactNode;
};


export type ExactInputProps = Omit<ProFormFieldItemProps<InputProps, InputRef>, 'children'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-exact-input'
     */
    clazzPrefix?: string;

    /**
     * @description The position of the addon
     * @description.zh-CN 文本框的附属节点位置
     * @description.zh-TW 文本框的附属節點位置
     * @default 'after'
     */
    addonPos?: WithFalse<BeforeAfterType>;

    /**
     * @description Whether to use compact mode for the addon
     * @description.zh-CN 文本框的附属节点是否使用紧凑模式
     * @description.zh-TW 文本框的附属節點是否使用緊凑模式
     * @default true
     */
    compactAddon?: boolean;

    /**
     * @description The properties of checkbox for addon
     * @description.zh-CN 复选框的属性
     * @description.zh-TW 複選框的屬性
     */
    checkProps?: AddonCheckProps;

    /**
     * @description Whether to use Tooltip
     * @description.zh-CN 是否使用 Tooltip
     * @description.zh-TW 是否使用 Tooltip
     */
    tooltipCtrl?: boolean;

    /**
     * @description The props of Antd Tooltip
     * @description.zh-CN Tooltip 属性
     * @description.zh-TW Tooltip 屬性
     */
    tooltipProps?: Omit<TooltipProps, 'title'>;

    /**
     * @description Whether to use ProFormField instead of Antd
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     * @default true
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
};


/**
 * Component for displaying a text input box with a checkbox which aiming to support exact capability for enquiries
 *
 * @author David Hsing
 */
export const ExactInput: React.FC<ExactInputProps> = (props?: ExactInputProps) => {
    const formContext = React.useContext(FormContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-exact-input';
    const intlType = useIntl();

    // Initialize the default props
    const {
        addonPos = 'after',
        compactAddon = true,
        checkProps = {
            nameSuffix: 'Exact',
        },
        proField = true,
        locale = intlType.locale,
    } = props ?? {};

    const fieldStyle = useFieldStyle(clazzPrefix);

    const generateCheckName = () => {
        if (checkProps.name) {
            return checkProps.name;
        }
        if (props?.name) {
            return (checkProps.namePrefix ?? '') + (props.name ?? '') + (checkProps.nameSuffix ?? 'Exact');
        }
        return undefined;
    };

    const buildAddonDom = (before: boolean) => {
        if (((before && addonPos !== 'before') || (!before && addonPos !== 'after')) && ((before && !props?.fieldProps?.addonBefore) || (!before && !props?.fieldProps?.addonAfter))) {
            return undefined;
        }
        const checkboxName = generateCheckName();
        const omitCheckProps = !checkProps ? {} : omit(checkProps, ['namePrefix', 'nameSuffix', 'name', 'onChange']);
        const nodeCount = [(before && props?.fieldProps?.addonBefore), (!before && props?.fieldProps?.addonAfter), ((before && addonPos === 'before') || (!before && addonPos === 'after'))].filter(object => !!object).length;
        if (nodeCount === 0) {
            return undefined;
        }
        const innerDom = (
            <Checkbox
                id={(!formContext?.name ? '' : `${formContext.name}_`) + checkboxName}
                onChange={(event: any) => {
                    if (checkboxName) {
                        formContext?.form?.setFieldValue(checkboxName, event.target.checked);
                    }
                    checkProps?.onChange?.(event);
                }}
                {...omitCheckProps}
            >
                {checkProps?.children}
            </Checkbox>
        );
        const combineDom = (
            <>
                <If condition={before && props?.fieldProps?.addonBefore} validation={false}>
                    {props?.fieldProps?.addonBefore}
                </If>
                <If condition={!before && props?.fieldProps?.addonAfter} validation={false}>
                    {props?.fieldProps?.addonAfter}
                </If>
                <If condition={(before && addonPos === 'before') || (!before && addonPos === 'after')} validation={false}>
                    {TooltipRender.renderTooltip(props?.tooltipCtrl, {
                        title: ObjectUtils.firstNotNil(props?.localeProps?.exactMatch, intlLocales.get([locale, 'exactMatch']), intlLocales.get(['en_US', 'exactMatch'])),
                        ...props?.tooltipProps,
                    }, innerDom)}
                </If>
            </>
        );
        return (nodeCount === 1) ? combineDom : (
            <Space className={`${clazzPrefix}-addon-space`}>
                {combineDom}
            </Space>
        );
    };

    const beforeDom = buildAddonDom(true);
    const afterDom = buildAddonDom(false);
    const posClazz = !addonPos ? undefined : `${clazzPrefix}-addon-${addonPos}`;
    const compactClazz = !compactAddon ? undefined : `${clazzPrefix}-compact`;
    const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['className', 'id', 'addonBefore', 'addonAfter']);

    if (proField) {
        const restProps = !props ? {} : omit(props, ['fieldProps', 'clazzPrefix', 'addonPos', 'checkProps', 'tooltipCtrl', 'tooltipProps', 'proField', 'locale', 'localeProps']);
        return (
            <ProFormText
                {...restProps}
                fieldProps={{
                    className: classNames(clazzPrefix, fieldStyle.hashId, (!addonPos ? undefined : `${clazzPrefix}-addon`), posClazz, compactClazz, props?.fieldProps?.className),
                    addonBefore: beforeDom,
                    addonAfter: afterDom,
                    ...omitFieldProps,
                }}
            />
        );
    } else {
        const restProps = omit(omitFieldProps, ['placeholder', 'onChange']);
        return (
            <Input
                className={classNames(clazzPrefix, fieldStyle.hashId, (!addonPos ? undefined : `${clazzPrefix}-addon`), posClazz, compactClazz, props?.fieldProps?.className)}
                id={(!formContext?.name ? '' : `${formContext.name}_`) + (props?.name ?? '')}
                placeholder={StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder}
                addonBefore={beforeDom}
                addonAfter={afterDom}
                onChange={(event: any) => {
                    if (props?.name) {
                        formContext?.form?.setFieldValue(props.name, event.target.value);
                    }
                    props?.fieldProps?.onChange?.(event);
                }}
                {...restProps}
            />
        );
    }
};
