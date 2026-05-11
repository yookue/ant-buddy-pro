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
import {Checkbox, Form, type CheckboxProps, type TooltipProps} from 'antd';
import {useIntl} from '@ant-design/pro-components';
import {omit} from '@rc-component/util';
import {ObjectUtils} from '@unikue/ts-lang-utils';
import {type WithFalse, type BeforeAfterType} from '@/type/declaration';
import {TooltipRender} from '@/render/TooltipRender';
import {AddonInput, type AddonInputProps} from '@/form/AddonInput';
import {intlLocales} from './intl-locales';


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


export type ExactInputProps = Omit<AddonInputProps, 'clazzPrefix' | 'addonBefore' | 'addonAfter' | 'cursorBefore' | 'cursorAfter' | 'paddingBefore' | 'paddingAfter'> & {
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
     * @description Whether to show the checkbox or not
     * @description.zh-CN 是否显示复选框
     * @description.zh-TW 是否顯示復選框
     * @default true
     */
    checkable?: boolean;

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
    const form = Form.useFormInstance();
    const clazzPrefix = props?.clazzPrefix ?? 'abp-exact-input';
    const intlType = useIntl();

    // Initialize the default props
    const {
        addonPos = 'after',
        compactAddon = true,
        checkable = true,
        checkProps = {
            nameSuffix: 'Exact',
        },
        locale = intlType.locale,
    } = props ?? {};

    const [checked, setChecked] = React.useState<boolean>(props?.checkProps?.defaultChecked ?? false);

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
        if (!checkable || (before && addonPos !== 'before') || (!before && addonPos !== 'after')) {
            return undefined;
        }
        const checkboxName = generateCheckName();
        const omitCheckProps = !checkProps ? {} : omit(checkProps, ['namePrefix', 'nameSuffix', 'name', 'title', 'value', 'checked', 'onChange']);
        const tooltipTitle: string = ObjectUtils.firstNotNil(props?.localeProps?.exactMatch, intlLocales.get([locale, 'exactMatch']), intlLocales.get(['en_US', 'exactMatch']));
        const innerDom = (
            <Checkbox
                title={props?.tooltipCtrl ? undefined : tooltipTitle}
                checked={checked}
                name={checkboxName}
                onChange={(ev) => {
                    ev.stopPropagation();
                    setChecked(ev.target.checked);
                    if (checkboxName) {
                        form?.setFieldValue(checkboxName, ev.target.checked);
                    }
                    checkProps?.onChange?.(ev);
                }}
                {...omitCheckProps}
            />
        );
        if (!props?.tooltipCtrl) {
            return innerDom;
        }
        return TooltipRender.renderTooltip(props?.tooltipCtrl, {
            title: tooltipTitle,
            ...props?.tooltipProps,
        }, innerDom);
    };

    const beforeDom = buildAddonDom(true);
    const afterDom = buildAddonDom(false);
    const restProps = !props ? {} : omit(props, ['clazzPrefix', 'addonPos', 'compactAddon', 'checkable', 'checkProps', 'tooltipCtrl', 'tooltipProps', 'locale', 'localeProps']);
    return (
        <div className={clazzPrefix}>
            <AddonInput
                addonBefore={beforeDom}
                addonAfter={afterDom}
                paddingBefore={compactAddon ? 8 : undefined}
                paddingAfter={compactAddon ? 8 : undefined}
                {...restProps}
            />
        </div>
    );
};
