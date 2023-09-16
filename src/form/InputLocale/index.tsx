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
import {ConfigProvider, Dropdown, Input, type FormRule, type InputProps, type MenuProps} from 'antd';
import {TranslationOutlined} from '@ant-design/icons';
import {ProFormText, type ProFormFieldProps} from '@ant-design/pro-form';
import {If} from '@yookue/react-condition';
import classNames from 'classnames';
import omit from 'rc-util/lib/omit';
import './index.less';


type OmitInputProps= Omit<InputProps, 'addonBefore' | 'addonAfter'>;

export type LocaleItemProps = ProFormFieldProps<OmitInputProps> & {
    /**
     * @description The locale language tag
     * @description.zh-CN 语言标签
     * @description.zh-TW 語言標簽
     */
    label: string,
}

export type InputLocaleProps = ProFormFieldProps<OmitInputProps> & {
    /**
     * @description The properties of locale items
     * @description.zh-CN 多语言输入项的属性
     * @description.zh-TW 多語言輸入項的屬性
     */
    localeProps: LocaleItemProps[];

    /**
     * @description The sharing validation rules for all the locale items
     * @description.zh-CN 全部语言输入项的通用校验规则
     * @description.zh-TW 全部語言輸入項的通用校驗規則
     */
    localeRules?: FormRule[];

    /**
     * @description The DOM of addon for the primary input box
     * @description.zh-CN 默认文本框的标签节点内容
     * @description.zh-TW 默認文本框的標簽節點內容
     * @default <TranslationOutlined/>
     */
    addonDom?: React.ReactNode;

    /**
     * @description The position of addon for the primary input box
     * @description.zh-CN 默认文本框的标签的标签位置
     * @description.zh-TW 默認文本框的標簽的標簽位置
     * @default after
     */
    addonPos?: 'before' | 'after' | false;

    /**
     * @description The CSS class name for the locales dropdown
     * @description.zh-CN 语言下拉框的 CSS 类名
     * @description.zh-TW 語言下拉框的 CSS 類名
     */
    overlayClazz?: string;

    /**
     * @description The CSS style for the locales dropdown
     * @description.zh-CN 语言下拉框的 CSS 样式
     * @description.zh-TW 語言下拉框的 CSS 樣式
     */
    overlayStyle?: React.CSSProperties;

    /**
     * @description The placement of the locales dropdown
     * @description.zh-CN 语言下拉框的弹出位置
     * @description.zh-TW 語言下拉框的彈出位置
     * @default bottomLeft
     */
    popupPlacement?: 'bottom' | 'bottomLeft' | 'bottomRight' | 'top' | 'topLeft' | 'topRight';

    /**
     * @description The position of addons for the locale items
     * @description.zh-CN 语言输入项的标签位置
     * @description.zh-TW 語言輸入項的標簽位置
     * @default before
     */
    popupAddonPos?: 'before' | 'after' | false;

    /**
     * @description Indicates whether to use Ant Design Pro text instead of Ant Design input for locale items
     * @description.zh-CN 语言输入项是否使用 Ant Design Pro 控件
     * @description.zh-TW 語言輸入項是否使用 Ant Design Pro 控件
     * @default false
     */
    popupProField?: boolean;
}

export const InputLocale: React.FC<InputLocaleProps> = (props?: InputLocaleProps) => {
    const context = React.useContext(ConfigProvider.ConfigContext);
    const clazzPrefix = context.getPrefixCls('buddy-input-locale');
    const popupClazz = classNames(clazzPrefix, props?.overlayClazz);
    const menuItems: MenuProps['items'] = [];
    if (props?.localeProps && Array.isArray(props?.localeProps)) {
        for (const itemProp of props?.localeProps) {
            if (!itemProp || !itemProp?.label) {
                continue;
            }
            const {label, fieldProps, rules, ...restProps} = itemProp;
            const antdInputProps = restProps as InputProps;
            const omitFieldProps = fieldProps ? omit(fieldProps, ['addonBefore', 'addonAfter']) : {};
            const labelDom = (
                <If condition={props?.popupProField}>
                    <If.Then>
                        <ProFormText
                            name={props?.name ? `${props?.name}[${label}]` : undefined}
                            id={props?.id ? `${props?.id}[${label}]` : (props?.name ? `${props?.name}[${label}]` : undefined)}
                            disabled={!!props?.disabled || !!itemProp.disabled}
                            readonly={!!props?.readonly || !!itemProp.readonly}
                            {...restProps}
                            fieldProps={{
                                addonBefore: (props?.popupAddonPos === 'before') ? label : undefined,
                                addonAfter: (props?.popupAddonPos === 'after') ? label : undefined,
                                ...omitFieldProps
                            }}
                            rules={[
                                ...props.localeRules || [],
                                ...rules || [],
                            ]}
                        />
                    </If.Then>
                    <If.Else>
                        <Input
                            name={props?.name ? `${props?.name}[${label}]` : undefined}
                            id={props?.id ? `${props?.id}[${label}]` : (props?.name ? `${props?.name}[${label}]` : undefined)}
                            disabled={!!props?.disabled || !!itemProp.disabled}
                            readOnly={!!props?.readonly || !!itemProp.readonly}
                            {...antdInputProps}
                            addonBefore={props?.popupAddonPos === 'before' ? label : undefined}
                            addonAfter={props?.popupAddonPos === 'after' ? label : undefined}
                            {...omitFieldProps}
                        />
                    </If.Else>
                </If>
            );
            menuItems.push({
                key: itemProp.label,
                label: labelDom,
            });
        }
    }

    const [open, setOpen] = React.useState(false);
    const onMenuClick: MenuProps['onClick'] = () => {
        setOpen(true);
    };
    const onOpenChange = (open: boolean) => {
        setOpen(open);
    };

    const hiddenRef = React.useRef<HTMLDivElement>(null);
    const restProps = props ? omit(props, ['addonDom', 'addonPos', 'overlayClazz', 'overlayStyle', 'popupAddonPos', 'popupPlacement', 'popupProField', 'localeProps', 'localeRules']) : {};
    const omitFieldProps = props?.fieldProps ? omit(props?.fieldProps, ['addonBefore', 'addonAfter']) : {};

    return (
        <Dropdown
            menu={{items: menuItems, onClick: onMenuClick}}
            placement={props?.popupPlacement}
            overlayClassName={popupClazz}
            overlayStyle={props?.overlayStyle}
            open={open}
            onOpenChange={onOpenChange}
            getPopupContainer={() => {
                return hiddenRef.current || document.body;
            }}
        >
            <Input.Group>
                <ProFormText
                    {...restProps}
                    fieldProps={{
                        addonBefore: (props?.addonPos === 'before') ? props?.addonDom : undefined,
                        addonAfter: (props?.addonPos === 'after') ? props?.addonDom : undefined,
                        ...omitFieldProps,
                    }}
                />
                <div ref={hiddenRef}/>
            </Input.Group>
        </Dropdown>
    );
};

InputLocale.defaultProps = {
    addonDom: <TranslationOutlined/>,
    addonPos: 'after',
    popupAddonPos: 'before',
    popupPlacement: 'bottomLeft',
    popupProField: false,
}
