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
import {ConfigProvider, Input, Checkbox, Space, Tooltip, type InputProps, type InputRef, type CheckboxProps, type TooltipProps} from 'antd';
import {ProFormText} from '@ant-design/pro-form';
import {type ProFormFieldItemProps} from '@ant-design/pro-form/es/interface';
import {useIntl} from '@ant-design/pro-provider';
import {If} from '@yookue/react-condition';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {PropsUtils} from '@/util/PropsUtils';
import {intlLocales} from './intl-locales';
import './index.less';


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

    /**
     * @description The prefix of id for the checkbox
     * @description.zh-CN 复选框的 id 前缀
     * @description.zh-TW 複選框的 id 前綴
     */
    idPrefix?: string;

    /**
     * @description The suffix of id for the checkbox
     * @description.zh-CN 复选框的名称后缀
     * @description.zh-TW 複選框的名稱后綴
     * @default 'Exact'
     */
    idSuffix?: string;
}>;


export type ExactInputProps = ProFormFieldItemProps<InputProps, InputRef> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-exact-input'
     */
    clazzPrefix?: string;

    /**
     * @description The position of addon
     * @description.zh-CN 文本框的附属节点位置
     * @description.zh-TW 文本框的附属節點位置
     * @default 'after'
     */
    addonPos?: 'before' | 'after' | false;

    /**
     * @description Whether to use compact mode for the addon
     * @description.zh-CN 文本框的附属节点是否使用紧凑模式
     * @description.zh-TW 文本框的附属節點是否使用緊凑模式
     * @default true
     */
    addonCompact?: boolean;

    /**
     * @description The properties of checkbox for addon
     * @description.zh-CN 复选框的属性
     * @description.zh-TW 複選框的屬性
     */
    checkProps?: AddonCheckProps;

    /**
     * @description Whether to use tooltip instead of raw title
     * @description.zh-CN 是否使用 Tooltip 替代 title
     * @description.zh-TW 是否使用 Tooltip 替代 title
     * @default false
     */
    useTooltip?: boolean;

    /**
     * @description The properties of tooltip for checkbox
     * @description.zh-CN 复选框的 Tooltip 属性
     * @description.zh-TW 复选框的 Tooltip 屬性
     */
    tooltipProps?: TooltipProps;

    /**
     * @description Whether to use ProFormField instead of Antd
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     * @default true
     */
    proField?: boolean;
};


/**
 * Component for displaying a text input box with a checkbox which aiming to support exact capability for enquiries
 *
 * @author David Hsing
 */
export const ExactInput: React.FC<ExactInputProps> = (props?: ExactInputProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-exact-input');

    // Initialize the default props
    const {
        addonPos = 'after',
        addonCompact = true,
        checkProps = {
            nameSuffix: 'Exact',
            idSuffix: 'Exact',
        },
        useTooltip = false,
        proField = true,
    } = props ?? {};

    const intlType = useIntl();

    const omitCheckProps = !checkProps ? {} : omit(checkProps, ['namePrefix', 'nameSuffix', 'idPrefix', 'idSuffix', 'name', 'id']);

    const generateCheckName = () => {
        if (checkProps?.name) {
            return checkProps?.name;
        }
        if (props?.name) {
            return (checkProps?.namePrefix ?? '') + props?.name + (checkProps?.nameSuffix ?? '');
        }
        return undefined;
    };

    const generateCheckId = () => {
        if (checkProps?.id) {
            return checkProps?.id;
        }
        if (props?.id) {
            return (checkProps?.idPrefix ?? '') + props?.id + (checkProps?.idSuffix ?? '');
        }
        return undefined;
    };

    const buildTooltipDom = (actionDom: React.ReactNode) => {
        if (useTooltip) {
            const title = props?.tooltipProps?.title || intlLocales.get([intlType.locale, 'matchExactly']) || intlLocales.get(['en_US', 'matchExactly']);
            const restProps = !props?.tooltipProps ? {} : omit(props.tooltipProps, ['title']);
            return (
                <Tooltip title={title} {...restProps}>
                    {actionDom}
                </Tooltip>
            );
        }
        return (
            <span title={(typeof props?.tooltipProps?.title === 'string') ? props?.tooltipProps?.title : (intlLocales.get([intlType.locale, 'matchExactly']) || intlLocales.get(['en_US', 'matchExactly']))}>
                {actionDom}
            </span>
        );
    };

    const buildAddonDom = (before: boolean) => {
        if (((before && addonPos !== 'before') || (!before && addonPos !== 'after')) && ((before && !props?.fieldProps?.addonBefore) || (!before && !props?.fieldProps?.addonAfter))) {
            return undefined;
        }
        const checkboxName = generateCheckName();
        const checkboxId = generateCheckId();
        const actionDom = (
            <Checkbox
                name={checkboxName}
                id={checkboxId ?? checkboxName}
                {...omitCheckProps}
            >
                {checkProps?.children}
            </Checkbox>
        );
        const tooltipDom = buildTooltipDom(actionDom);

        const nodeCount = [(before && props?.fieldProps?.addonBefore), (!before && props?.fieldProps?.addonAfter), ((before && addonPos === 'before') || (!before && addonPos === 'after'))].filter(object => !!object).length;
        if (nodeCount === 0) {
            return undefined;
        }
        const combineDom = (
            <>
                <If condition={before && props?.fieldProps?.addonBefore} validation={false}>
                    {props?.fieldProps?.addonBefore}
                </If>
                <If condition={!before && props?.fieldProps?.addonAfter} validation={false}>
                    {props?.fieldProps?.addonAfter}
                </If>
                <If condition={(before && addonPos === 'before') || (!before && addonPos === 'after')} validation={false}>
                    {tooltipDom}
                </If>
            </>
        );
        return (nodeCount === 1) ? combineDom : (<Space>{combineDom}</Space>);
    };

    const beforeDom = buildAddonDom(true);
    const afterDom = buildAddonDom(false);

    const posClazz = !addonPos ? undefined : `${clazzPrefix}-addon-${addonPos}`;
    const compactClazz = !addonCompact ? undefined : `${clazzPrefix}-compact`;
    const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['className', 'addonBefore', 'addonAfter']);

    if (proField) {
        const restProps = !props ? {} : omit(props, ['fieldProps', 'clazzPrefix', 'addonPos', 'checkProps', 'useTooltip', 'tooltipProps', 'proField']);
        return (
            <ProFormText
                {...restProps}
                fieldProps={{
                    className: classNames(clazzPrefix, posClazz, compactClazz, props?.fieldProps?.className),
                    ...omitFieldProps,
                    addonBefore: beforeDom,
                    addonAfter: afterDom,
                }}
            />
        );
    } else {
        const restProps = PropsUtils.pickForwardProps(props);
        return (
            <Input
                className={classNames(clazzPrefix, posClazz, compactClazz, props?.fieldProps?.className)}
                {...restProps}
                {...omitFieldProps}
                addonBefore={beforeDom}
                addonAfter={afterDom}
            />
        );
    }
};
