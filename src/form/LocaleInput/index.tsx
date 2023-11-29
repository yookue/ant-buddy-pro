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
import {ConfigProvider, Dropdown, Input, Popconfirm, Space, type FormRule, type InputProps, type MenuProps} from 'antd';
import {TranslationOutlined, SelectOutlined} from '@ant-design/icons';
import {ProFormText, type ProFormFieldProps} from '@ant-design/pro-form';
import {EditOrReadOnlyContext} from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import {nanoid} from '@ant-design/pro-utils';
import {If} from '@yookue/react-condition';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {DesignConst} from '@/constant/DesignConst';
import {InputUtils} from '@/util/InputUtils';
import './index.less';


export type PopupConfirmProps = {
    /**
     * @description The message for confirm dialog when marks a locale item as default one
     * @description.zh-CN 当确认设置某个语言项为默认值时的消息文本
     * @description.zh-TW 當確認設置某個語言項為默認值時的消息文本
     */
    message?: string,

    /**
     * @description The ok button for confirm dialog when marks a locale item as default one
     * @description.zh-CN 当确认设置某个语言项为默认值时的确认按钮文本
     * @description.zh-TW 當確認設置某個語言項為默認值時的確認按鈕文本
     */
    ok?: string,

    /**
     * @description The cancel button for confirm dialog when marks a locale item as default one
     * @description.zh-CN 当确认设置某个语言项为默认值时的取消按钮文本
     * @description.zh-TW 當確認設置某個語言項為默認值時的取消按鈕文本
     */
    cancel?: string,
};

export type PopupInputProps = React.InputHTMLAttributes<HTMLInputElement> & ProFormFieldProps<InputProps> & {
    /**
     * @description The locale language tag
     * @description.zh-CN 语言标签
     * @description.zh-TW 語言標簽
     */
    tag: string,
};

export type PopupShareProps = {
    /**
     * @description The max length of locales
     * @description.zh-CN 语言输入项的最大长度
     * @description.zh-TW 語言輸入項的最大長度
     */
    maxLength?: number,

    /**
     * @description The placeholder of locales
     * @description.zh-CN 语言输入项的占位符
     * @description.zh-TW 語言輸入項的佔位符
     */
    placeholder?: string,

    /**
     * @description The validation rules for locales
     * @description.zh-CN 语言输入项的校验规则
     * @description.zh-TW 語言輸入項的校驗規則
     */
    rules?: FormRule[];
};

export type LocaleInputProps = React.InputHTMLAttributes<HTMLInputElement> & ProFormFieldProps<InputProps> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-locale-input'
     */
    clazzPrefix?: string;

    /**
     * @description The DOM of action for the primary input box
     * @description.zh-CN 默认文本框的附属节点内容
     * @description.zh-TW 默認文本框的標簽節點內容
     * @default <TranslationOutlined/>
     */
    actionDom?: React.ReactNode;

    /**
     * @description The position of action for the primary input box
     * @description.zh-CN 默认文本框的附属节点位置
     * @description.zh-TW 默認文本框的附属節點位置
     * @default 'after'
     */
    actionPos?: 'before' | 'after' | false;

    /**
     * @description Whether to use ProFormField instead of Input for the primary input box
     * @description.zh-CN 默认文本框是否使用 ProFormField 控件
     * @description.zh-TW 默認文本框是否使用 ProFormField 控件
     * @default true
     */
    proField?: boolean;

    /**
     * @description The CSS class name of the locales dropdown
     * @description.zh-CN 语言下拉框的 CSS 类名
     * @description.zh-TW 語言下拉框的 CSS 類名
     */
    popupClazz?: string;

    /**
     * @description The CSS style of the locales dropdown
     * @description.zh-CN 语言下拉框的 CSS 样式
     * @description.zh-TW 語言下拉框的 CSS 樣式
     */
    popupStyle?: React.CSSProperties;

    /**
     * @description The placement of the locales dropdown
     * @description.zh-CN 语言下拉框的弹出位置
     * @description.zh-TW 語言下拉框的彈出位置
     * @default 'bottomLeft'
     */
    popupPlacement?: 'bottom' | 'bottomLeft' | 'bottomRight' | 'top' | 'topLeft' | 'topRight';

    /**
     * @description The properties of locale items (Higher priority than `popupQuickTags`, more customizations)
     * @description.zh-CN 多语言输入项的属性(比 `popupQuickTags` 优先级高，更多自定义)
     * @description.zh-TW 多語言輸入項的屬性(比 `popupQuickTags` 優先級高，更多自定義)
     */
    popupInputProps?: PopupInputProps[];

    /**
     * @description The tag of locale items (Lower priority than `popupInputProps`, more convenient)
     * @description.zh-CN 多语言输入项的名称(比 `popupInputProps` 优先级低，更简单快捷)
     * @description.zh-TW 多語言輸入項的名稱(比 `popupInputProps` 優先級低，更簡單快捷)
     */
    popupQuickTags?: string[];

    /**
     * @description The position of language tags for the locale items
     * @description.zh-CN 语言输入项的标签位置
     * @description.zh-TW 語言輸入項的標簽位置
     * @default 'before'
     */
    popupTagPos?: 'before' | 'after' | false;

    /**
     * @description The DOM of language action for the primary input box
     * @description.zh-CN 语言输入项的附属节点内容
     * @description.zh-TW 語言輸入項的附屬節點內容
     * @default <SelectOutlined/>
     */
    popupActionDom?: React.ReactNode;

    /**
     * @description The position of language addons for the locale items
     * @description.zh-CN 语言输入项的附属节点位置
     * @description.zh-TW 語言輸入項的附屬節點位置
     * @default 'after'
     */
    popupActionPos?: 'before' | 'after' | false;

    /**
     * @description Use the same rules as entry field for the locale items
     * @description.zh-CN 语言输入项使用与默认输入项相同的校验规则
     * @description.zh-TW 語言輸入項使用與默認輸入項相同的校驗規則
     */
    popupCloneRules?: boolean;

    /**
     * @description The confirm properties of popup actions
     * @description.zh-CN 语言输入项的动作确认属性
     * @description.zh-TW 語言輸入項的動作確認屬性
     */
    popupConfirmProps?: PopupConfirmProps;

    /**
     * @description The sharing properties of the locale items
     * @description.zh-CN 语言输入项的通用属性
     * @description.zh-TW 語言輸入項的通用屬性
     */
    popupShareProps?: PopupShareProps;

    /**
     * @description Whether to use ProFormField instead of Input for locale items
     * @description.zh-CN 语言输入项是否使用 ProFormField 控件
     * @description.zh-TW 語言輸入項是否使用 ProFormField 控件
     * @default false
     */
    popupProField?: boolean;
};


export const LocaleInput: React.ForwardRefExoticComponent<LocaleInputProps & React.RefAttributes<any>> = React.forwardRef((props?: LocaleInputProps, ref?: any) => {
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const editContext = React.useContext(EditOrReadOnlyContext);
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix || 'buddy-locale-input');
    const entryId = nanoid();

    const handleClonePrimary = (tagId: string) => {
        const entry = document.querySelector(`input[data-buddy-locale-id="${entryId}"]`) as HTMLInputElement;
        const tag = document.querySelector(`input[data-buddy-locale-tag="${tagId}"]`) as HTMLInputElement;
        if (entry && tag) {
            InputUtils.setInputValue(entry, tag.value);
        }
    };

    const buildItemAddonDom = function(tag: string, before: boolean, elementId: string, inputProps?: PopupInputProps) {
        if (before && props?.popupTagPos !== 'before' && !inputProps?.fieldProps?.addonBefore && props?.popupActionPos === 'before' && !props?.popupActionDom) {
            return undefined;
        }
        if (!before && props?.popupTagPos !== 'after' && !inputProps?.fieldProps?.addonAfter && props?.popupActionPos === 'after' && !props?.popupActionDom) {
            return undefined;
        }
        const itemDisabled = props?.disabled || props?.fieldProps?.disabled || inputProps?.disabled || inputProps?.fieldProps?.disabled
        const itemReadonly = props?.readOnly || props?.fieldProps?.readonly || inputProps?.readOnly || inputProps?.fieldProps?.readonly;

        const tagDom = ((before && props?.popupTagPos === 'before') || (!before && props?.popupTagPos === 'after')) ? (
            <span className={classNames(`${clazzPrefix}-tag-${props?.popupTagPos}`, ((itemDisabled || itemReadonly) ? `${clazzPrefix}-disabled` : undefined))}>
                {tag}
            </span>
        ) : undefined;

        const actionClazz = classNames(`${clazzPrefix}-action-${props?.popupActionPos}`, ((itemDisabled || itemReadonly) ? `${clazzPrefix}-disabled` : undefined));
        const actionDom = (props?.popupActionDom && ((before && props?.popupActionPos === 'before') || (!before && props?.popupActionPos === 'after'))) ? (
            <If condition={props?.popupConfirmProps} validation={false}>
                <If.Then>
                    <Popconfirm
                        title={props?.popupConfirmProps?.message}
                        okText={props?.popupConfirmProps?.ok}
                        cancelText={props?.popupConfirmProps?.cancel}
                        disabled={itemDisabled || itemReadonly}
                        onConfirm={() => handleClonePrimary(elementId)}
                    >
                        <span className={actionClazz}>
                            {props?.popupActionDom}
                        </span>
                    </Popconfirm>
                </If.Then>
                <If.Else>
                    <span className={actionClazz} onClick={() => handleClonePrimary(elementId)}>
                        {props?.popupActionDom}
                    </span>
                </If.Else>
            </If>
        ) : undefined;

        const nodeCount = [(before && inputProps?.fieldProps?.addonBefore), (!before && inputProps?.fieldProps?.addonAfter), tagDom, actionDom].filter(object => !!object).length;
        if (nodeCount === 0) {
            return undefined;
        }
        const combineDom = (
            <>
                <If condition={before && inputProps?.fieldProps?.addonBefore} validation={false}>
                    {inputProps?.fieldProps?.addonBefore}
                </If>
                <If condition={!before && inputProps?.fieldProps?.addonAfter} validation={false}>
                    {inputProps?.fieldProps?.addonAfter}
                </If>
                {tagDom}
                {actionDom}
            </>
        );
        return (nodeCount === 1) ? combineDom : (<Space>{combineDom}</Space>);
    };

    const menuItems: MenuProps['items'] = [];
    if (props?.popupInputProps) {
        for (const itemProp of props?.popupInputProps) {
            if (!itemProp || !itemProp?.tag) {
                continue;
            }
            const {tag, fieldProps, rules} = itemProp;
            const restProps = omit(itemProp, ['tag', 'name', 'id', 'disabled', 'readonly', 'fieldProps', 'rules']);
            const antdInputProps = restProps as InputProps;
            const omitFieldProps = fieldProps ? omit(fieldProps, ['className', 'addonBefore', 'addonAfter', 'maxLength', 'placeholder']) : {};
            const elementId = nanoid();
            const beforeDom = buildItemAddonDom(tag, true, elementId, itemProp);
            const afterDom = buildItemAddonDom(tag, false, elementId, itemProp);
            const itemDom = (
                <If condition={props?.popupProField} validation={false}>
                    <If.Then>
                        <ProFormText
                            name={props?.name ? `${props?.name}[${tag}]` : undefined}
                            id={props?.id ? `${props?.id}[${tag}]` : (props?.name ? `${props?.name}[${tag}]` : undefined)}
                            disabled={props?.disabled || props?.fieldProps?.disabled || itemProp?.disabled || itemProp?.fieldProps?.disabled}
                            readonly={props?.readOnly || props?.fieldProps?.readonly || itemProp?.readOnly || itemProp?.fieldProps?.readonly}
                            {...restProps}
                            fieldProps={{
                                className: classNames(`${clazzPrefix}-item`, fieldProps?.className),
                                addonBefore: beforeDom,
                                addonAfter: afterDom,
                                maxLength: itemProp?.maxLength || itemProp?.fieldProps?.maxLength || props?.popupShareProps?.maxLength,
                                placeholder: itemProp?.placeholder || itemProp?.fieldProps?.placeholder || props?.popupShareProps?.placeholder,
                                ...omitFieldProps,
                                'data-buddy-locale-tag': elementId,
                            }}
                            rules={[
                                ...((props?.popupCloneRules && props?.rules) ? props?.rules : []),
                                ...(props?.popupShareProps?.rules || []),
                                ...(rules || []),
                            ]}
                        />
                    </If.Then>
                    <If.Else>
                        <Input
                            className={classNames(`${clazzPrefix}-item`, fieldProps?.className)}
                            name={props?.name ? `${props?.name}[${tag}]` : undefined}
                            id={props?.id ? `${props?.id}[${tag}]` : (props?.name ? `${props?.name}[${tag}]` : undefined)}
                            disabled={props?.disabled || props?.fieldProps?.disabled || itemProp.disabled || itemProp?.fieldProps?.disabled}
                            readOnly={props?.readOnly || props?.fieldProps?.readonly || itemProp.readOnly || itemProp?.fieldProps?.readonly}
                            maxLength={itemProp?.maxLength || itemProp?.fieldProps?.maxLength || props?.popupShareProps?.maxLength}
                            placeholder={itemProp?.placeholder || itemProp?.fieldProps?.placeholder || props?.popupShareProps?.placeholder}
                            {...antdInputProps}
                            addonBefore={beforeDom}
                            addonAfter={afterDom}
                            {...omitFieldProps}
                            data-buddy-locale-tag={elementId}
                        />
                    </If.Else>
                </If>
            );
            menuItems.push({
                key: itemProp.tag,
                label: itemDom,
            });
        }
    } else if (!props?.popupInputProps && props?.popupQuickTags) {
        for (const tag of props?.popupQuickTags) {
            if (!tag || tag.length === 0) {
                continue;
            }
            const elementId = nanoid();
            const beforeDom = buildItemAddonDom(tag, true, elementId);
            const afterDom = buildItemAddonDom(tag, false, elementId);
            const itemDom = (
                <If condition={props?.popupProField} validation={false}>
                    <If.Then>
                        <ProFormText
                            name={props?.name ? `${props?.name}[${tag}]` : undefined}
                            id={props?.id ? `${props?.id}[${tag}]` : (props?.name ? `${props?.name}[${tag}]` : undefined)}
                            disabled={props?.disabled || props?.fieldProps?.disabled}
                            readonly={props?.readOnly || props?.fieldProps?.readonly}
                            fieldProps={{
                                className: `${clazzPrefix}-item`,
                                addonBefore: beforeDom,
                                addonAfter: afterDom,
                                maxLength: props?.popupShareProps?.maxLength,
                                placeholder:  props?.popupShareProps?.placeholder,
                                'data-buddy-locale-tag': elementId,
                            }}
                            rules={[
                                ...((props?.popupCloneRules && props?.rules) ? props?.rules : []),
                                ...(props?.popupShareProps?.rules || []),
                            ]}
                        />
                    </If.Then>
                    <If.Else>
                        <Input
                            className={`${clazzPrefix}-item`}
                            name={props?.name ? `${props?.name}[${tag}]` : undefined}
                            id={props?.id ? `${props?.id}[${tag}]` : (props?.name ? `${props?.name}[${tag}]` : undefined)}
                            disabled={props?.disabled || props?.fieldProps?.disabled}
                            readOnly={props?.readOnly || props?.fieldProps?.readonly}
                            maxLength={props?.popupShareProps?.maxLength}
                            placeholder={props?.popupShareProps?.placeholder}
                            addonBefore={beforeDom}
                            addonAfter={afterDom}
                            data-buddy-locale-tag={elementId}
                        />
                    </If.Else>
                </If>
            );
            menuItems.push({
                key: tag,
                label: itemDom,
            });
        }
    }

    const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
    const handleMenuClick: MenuProps['onClick'] = () => {
        setMenuOpen(true);
    };
    const handleMenuOpen = (open: boolean) => {
        setMenuOpen(open);
    };

    const buildEntryAddonDom = function(before: boolean) {
        if (before && !props?.fieldProps?.addonBefore && props?.actionPos === 'before' && !props?.actionDom) {
            return undefined;
        }
        if (!before && !props?.fieldProps?.addonAfter && props?.actionPos === 'after' && !props?.actionDom) {
            return undefined;
        }
        const nodeCount = [(before && props?.fieldProps?.addonBefore), (!before && props?.fieldProps?.addonAfter), (props?.actionDom && ((before && props?.actionPos === 'before') || (!before && props?.actionPos === 'after')))].filter(object => !!object).length;
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
                <If condition={props?.actionDom && ((before && props?.actionPos === 'before') || (!before && props?.actionPos === 'after'))} validation={false}>
                    {props?.actionDom}
                </If>
            </>
        );
        return (nodeCount === 1) ? combineDom : (<Space>{combineDom}</Space>);
    };

    const beforeDom = buildEntryAddonDom(true);
    const afterDom = buildEntryAddonDom(false);

    const entryImmutable = (editContext.mode === 'read') || props?.disabled || props?.fieldProps?.disabled || props?.readOnly || props?.fieldProps?.readonly;
    const restProProps = props ? omit(props, ['clazzPrefix', 'actionDom', 'actionPos', 'popupClazz', 'popupStyle', 'popupPlacement', 'popupInputProps', 'popupQuickTags', 'popupTagPos', 'popupActionDom', 'popupActionPos', 'popupConfirmProps', 'popupShareProps', 'popupProField']) : {};
    // @ts-ignore
    const restAntProps = props ? omit(props, ['clazzPrefix', 'actionDom', 'actionPos', 'popupClazz', 'popupStyle', 'popupPlacement', 'popupInputProps', 'popupQuickTags', 'popupTagPos', 'popupActionDom', 'popupActionPos', 'popupConfirmProps', 'popupShareProps', 'popupProField', ...DesignConst.ProFormFieldItemProps]) : {};
    const omitFieldProps = props?.fieldProps ? omit(props?.fieldProps, ['className', 'addonBefore', 'addonAfter', 'getPopupContainer']) : {};

    return (
        <Dropdown
            menu={{
                items: menuItems,
                onClick: handleMenuClick,
            }}
            placement={props?.popupPlacement}
            overlayClassName={classNames(clazzPrefix + '-dropdown', (entryImmutable ? `${clazzPrefix}-immutable` : undefined), props?.popupClazz)}
            overlayStyle={props?.popupStyle}
            open={menuOpen}
            onOpenChange={handleMenuOpen}
            getPopupContainer={trigger => trigger.parentElement || document.body}
        >
            <Input.Group>
                <If condition={props?.proField} validation={false}>
                    <If.Then>
                        <ProFormText
                            ref={ref}
                            {...restProProps}
                            fieldProps={{
                                className: classNames(clazzPrefix, props?.fieldProps?.className),
                                ...omitFieldProps,
                                addonBefore: beforeDom,
                                addonAfter: afterDom,
                                'data-buddy-locale-id': entryId,
                            }}
                        />
                    </If.Then>
                    <If.Else>
                        <Input
                            ref={ref}
                            className={classNames(clazzPrefix, props?.fieldProps?.className)}
                            {...restAntProps}
                            {...omitFieldProps}
                            addonBefore={beforeDom}
                            addonAfter={afterDom}
                            data-buddy-locale-id={entryId}
                        />
                    </If.Else>
                </If>
            </Input.Group>
        </Dropdown>
    );
});


LocaleInput.defaultProps = {
    actionDom: <TranslationOutlined/>,
    actionPos: 'after',
    proField: true,
    popupPlacement: 'bottomLeft',
    popupTagPos: 'before',
    popupActionDom: <SelectOutlined/>,
    popupActionPos: 'after',
    popupProField: false,
};
