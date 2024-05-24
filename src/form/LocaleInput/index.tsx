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
import {ConfigProvider, Dropdown, Input, Popconfirm, Space, type DropdownProps, type InputProps, type InputRef, type MenuProps, type FormRule} from 'antd';
import {TranslationOutlined, SelectOutlined} from '@ant-design/icons';
import {ProFormText} from '@ant-design/pro-form';
import {type ProFormFieldItemProps} from '@ant-design/pro-form/es/interface';
import {EditOrReadOnlyContext} from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import {useIntl} from '@ant-design/pro-provider';
import {nanoid} from '@ant-design/pro-utils';
import {If} from '@yookue/react-condition';
import {BooleanUtils, StringUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {ElementUtils} from '@/util/ElementUtils';
import {PropsUtils} from '@/util/PropsUtils';
import {intlLocales} from './intl-locales';
import './index.less';


export type PopupConfirmProps = {
    /**
     * @description Whether to enable the popup confirmation
     * @description.zh-CN 是否使用弹出确认框
     * @description.zh-TW 是否使用彈出確認框
     * @default true
     */
    enabled?: boolean;

    /**
     * @description The message for confirming a locale item sets as default one
     * @description.zh-CN 当确认设置某个语言项为默认值时的消息文本
     * @description.zh-TW 當確認設置某個語言項為默認值時的消息文本
     */
    message?: string;

    /**
     * @description The ok button for confirming a locale item sets as default one
     * @description.zh-CN 当确认设置某个语言项为默认值时的确认按钮文本
     * @description.zh-TW 當確認設置某個語言項為默認值時的確認按鈕文本
     */
    ok?: string;

    /**
     * @description The cancel button for confirming a locale item sets as default one
     * @description.zh-CN 当确认设置某个语言项为默认值时的取消按钮文本
     * @description.zh-TW 當確認設置某個語言項為默認值時的取消按鈕文本
     */
    cancel?: string;
};


export type PopupInputProps = ProFormFieldItemProps<InputProps, InputRef> & {
    /**
     * @description The locale language tag
     * @description.zh-CN 语言标签
     * @description.zh-TW 語言標簽
     */
    tag: string;
};


export type PopupShareProps = {
    /**
     * @description The max length of locales
     * @description.zh-CN 语言输入项的最大长度
     * @description.zh-TW 語言輸入項的最大長度
     */
    maxLength?: number;

    /**
     * @description The placeholder of locales
     * @description.zh-CN 语言输入项的占位符
     * @description.zh-TW 語言輸入項的佔位符
     */
    placeholder?: string;

    /**
     * @description The validation rules for locales
     * @description.zh-CN 语言输入项的校验规则
     * @description.zh-TW 語言輸入項的校驗規則
     */
    rules?: FormRule[];
};


export type LocaleInputProps = ProFormFieldItemProps<InputProps, InputRef> & {
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
     * @description The properties of the dropdown div
     * @description.zh-CN 下拉弹出层的属性
     * @description.zh-TW 下拉彈出層的屬性
     */
    dropdownProps?: Pick<DropdownProps, 'autoAdjustOverflow' | 'autoFocus' | 'destroyPopupOnHide' | 'getPopupContainer' | 'overlayClassName' | 'overlayStyle' | 'placement' | 'trigger' | 'onOpenChange'>;

    /**
     * @description Whether to enable the multilingual input
     * @description.zh-CN 是否启用多语言输入
     * @description.zh-TW 是否啓用多語言輸入
     * @default true
     */
    multilingualism?: boolean;

    /**
     * @description Whether to use ProFormField instead of Antd for the primary input box
     * @description.zh-CN 默认文本框是否使用 ProFormField 控件
     * @description.zh-TW 默認文本框是否使用 ProFormField 控件
     * @default true
     */
    proField?: boolean;

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
     * @description Whether to use the same max length as entry field for the locale items
     * @description.zh-CN 语言输入项使用与默认输入项相同的长度
     * @description.zh-TW 語言輸入項使用與默認輸入項相同的長度
     */
    popupCloneMaxLength?: boolean;

    /**
     * @description Whether to use the same placeholder as entry field for the locale items
     * @description.zh-CN 语言输入项使用与默认输入项相同的占位符
     * @description.zh-TW 語言輸入項使用與默認輸入項相同的占位符
     */
    popupClonePlaceholder?: boolean;

    /**
     * @description Whether to use the same rules as entry field for the locale items
     * @description.zh-CN 语言输入项使用与默认输入项相同的校验规则
     * @description.zh-TW 語言輸入項使用與默認輸入項相同的校驗規則
     */
    popupCloneRules?: 'all' | 'required' | 'optional' | false;

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
     * @description Whether to use ProFormField instead of Antd for the locale items
     * @description.zh-CN 语言输入项是否使用 ProFormField 控件
     * @description.zh-TW 語言輸入項是否使用 ProFormField 控件
     * @default true
     */
    popupProField?: boolean;
};


/**
 * Component for displaying a text input box with a dropdown div of locale input boxes
 *
 * @author David Hsing
 */
export const LocaleInput: React.ForwardRefExoticComponent<LocaleInputProps & React.RefAttributes<any>> = React.forwardRef((props?: LocaleInputProps, ref?: any) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const editContext = React.useContext(EditOrReadOnlyContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-locale-input');

    // Initialize the default props
    const {
        actionDom = <TranslationOutlined/>,
        actionPos = 'after',
        multilingualism = true,
        proField = true,
        popupTagPos = 'before',
        popupActionDom = <SelectOutlined/>,
        popupActionPos = 'after',
        popupConfirmProps = {
            enabled: true,
        },
        popupProField = true,
    } = props ?? {};

    const intlType = useIntl();

    const fieldRef = React.useRef<InputRef>(null);
    React.useImperativeHandle(ref, () => fieldRef.current);

    const handleSetAsDefault = (tagId: string) => {
        const element = document.querySelector<HTMLInputElement>(`input[data-locale-input-tag='${tagId}']`);
        if (element) {
            ElementUtils.setElementValue(fieldRef.current?.input, element.value);
        }
    };

    const buildItemAddonDom = (tag: string, before: boolean, elementId: string, inputProps?: PopupInputProps) => {
        if (before && popupTagPos !== 'before' && !inputProps?.fieldProps?.addonBefore && popupActionPos === 'before' && !popupActionDom) {
            return undefined;
        }
        if (!before && popupTagPos !== 'after' && !inputProps?.fieldProps?.addonAfter && popupActionPos === 'after' && !popupActionDom) {
            return undefined;
        }
        const itemDisabled = props?.fieldProps?.disabled || inputProps?.fieldProps?.disabled;
        const itemReadonly = props?.fieldProps?.readOnly || props?.proFieldProps?.readonly || inputProps?.fieldProps?.readOnly || inputProps?.proFieldProps?.readonly;

        const tagDom = ((before && popupTagPos === 'before') || (!before && popupTagPos === 'after')) ? (
            <span className={classNames(`${clazzPrefix}-tag-${popupTagPos}`, ((itemDisabled || itemReadonly) ? `${clazzPrefix}-disabled` : undefined))}>
                {tag}
            </span>
        ) : undefined;

        const actionClazz = classNames(`${clazzPrefix}-action-${popupActionPos}`, ((itemDisabled || itemReadonly) ? `${clazzPrefix}-disabled` : undefined));
        const actionDom = (popupActionDom && ((before && popupActionPos === 'before') || (!before && popupActionPos === 'after'))) ? (
            <If condition={BooleanUtils.isNotFalse(popupConfirmProps?.enabled)} validation={false}>
                <If.Then>
                    <Popconfirm
                        title={popupConfirmProps?.message || intlLocales.get([intlType.locale, 'setAsDefault']) || intlLocales.get(['en_US', 'setAsDefault'])}
                        okText={popupConfirmProps?.ok}
                        cancelText={popupConfirmProps?.cancel}
                        disabled={itemDisabled || itemReadonly}
                        onConfirm={() => handleSetAsDefault(elementId)}
                    >
                        <span className={actionClazz}>
                            {popupActionDom}
                        </span>
                    </Popconfirm>
                </If.Then>
                <If.Else>
                    <span className={actionClazz} onClick={() => handleSetAsDefault(elementId)}>
                        {popupActionDom}
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

    const renderItemReadonly = (tag: string, dom: React.ReactNode) => (
        <div className={classNames(`${clazzPrefix}-item-readonly`, (popupTagPos ? `${clazzPrefix}-item-readonly-${popupTagPos}` : undefined))}>
            <If condition={popupTagPos === 'before'} validation={false}>
                <span className={`${clazzPrefix}-item-readonly-tag`}>{tag}</span>
            </If>
            <div className={`${clazzPrefix}-item-readonly-content`}>
                {dom || props?.proFieldProps?.emptyText || '-'}
            </div>
            <If condition={popupTagPos === 'after'} validation={false}>
                <span className={`${clazzPrefix}-item-readonly-tag`}>{tag}</span>
            </If>
        </div>
    );

    const cloneItemRules = () => {
        if (!props?.rules || !props?.popupCloneRules) {
            return [];
        }
        if (props.popupCloneRules === 'all') {
            return props.rules;
        } else if (props.popupCloneRules === 'required') {
            return props.rules.filter((item: any) => item?.required);
        } else if (props.popupCloneRules === 'optional') {
            return props.rules.filter((item: any) => !item?.required);
        }
        return [];
    };
    const itemClonedRules = cloneItemRules();

    const menuItems: MenuProps['items'] = [];
    if (props?.popupInputProps) {
        for (const itemProp of props.popupInputProps) {
            if (!itemProp || !itemProp?.tag) {
                continue;
            }
            const {tag, fieldProps, rules} = itemProp;
            const restProps = omit(itemProp, ['tag', 'name', 'id', 'disabled', 'readonly', 'fieldProps', 'proFieldProps', 'rules']);
            const antdInputProps = restProps as InputProps;
            const omitFieldProps = !fieldProps ? {} : omit(fieldProps, ['className', 'addonBefore', 'addonAfter', 'maxLength', 'placeholder']);
            const elementId = nanoid();
            const beforeDom = buildItemAddonDom(tag, true, elementId, itemProp);
            const afterDom = buildItemAddonDom(tag, false, elementId, itemProp);
            const itemDom = (
                <If condition={popupProField} validation={false}>
                    <If.Then>
                        <ProFormText
                            name={props?.name ? `${props?.name}[${tag}]` : undefined}
                            id={props?.id ? `${props?.id}[${tag}]` : (props?.name ? `${props?.name}[${tag}]` : undefined)}
                            {...restProps}
                            fieldProps={{
                                className: classNames(`${clazzPrefix}-item`, fieldProps?.className),
                                addonBefore: beforeDom,
                                addonAfter: afterDom,
                                placeholder: StringUtils.joinWith(itemProp?.placeholder) || itemProp?.fieldProps?.placeholder || props?.popupShareProps?.placeholder || (props?.popupClonePlaceholder ? (StringUtils.joinWith(props?.placeholder) ?? props?.fieldProps?.placeholder) : undefined),
                                maxLength: itemProp?.fieldProps?.maxLength || props?.popupShareProps?.maxLength || (props?.popupCloneMaxLength ? props?.fieldProps?.maxLength : undefined),
                                disabled: props?.fieldProps?.disabled || itemProp?.fieldProps?.disabled,
                                readOnly: props?.fieldProps?.readOnly || props?.proFieldProps?.readonly || itemProp?.fieldProps?.readOnly || itemProp?.proFieldProps?.readonly,
                                ...omitFieldProps,
                                'data-locale-input-tag': elementId,
                            }}
                            proFieldProps={{
                                render: (dom: React.ReactNode) => renderItemReadonly(tag, dom),
                                ...(!itemProp?.proFieldProps ? {} : omit(itemProp?.proFieldProps, ['render']))
                            }}
                            rules={[
                                ...itemClonedRules,
                                ...(props?.popupShareProps?.rules ?? []),
                                ...(rules ?? []),
                            ]}
                        />
                    </If.Then>
                    <If.Else>
                        <Input
                            className={classNames(`${clazzPrefix}-item`, fieldProps?.className)}
                            name={props?.name ? `${props?.name}[${tag}]` : undefined}
                            id={props?.id ? `${props?.id}[${tag}]` : (props?.name ? `${props?.name}[${tag}]` : undefined)}
                            addonBefore={beforeDom}
                            addonAfter={afterDom}
                            placeholder={StringUtils.joinWith(itemProp?.placeholder) || itemProp?.fieldProps?.placeholder || props?.popupShareProps?.placeholder || (props?.popupClonePlaceholder ? (StringUtils.joinWith(props?.placeholder) ?? props?.fieldProps?.placeholder) : undefined)}
                            maxLength={itemProp?.fieldProps?.maxLength || props?.popupShareProps?.maxLength || (props?.popupCloneMaxLength ? props?.fieldProps?.maxLength : undefined)}
                            disabled={props?.fieldProps?.disabled || itemProp?.fieldProps?.disabled}
                            readOnly={props?.fieldProps?.readOnly || props?.proFieldProps?.readonly || itemProp?.fieldProps?.readOnly || itemProp?.proFieldProps?.readonly}
                            {...antdInputProps}
                            {...omitFieldProps}
                            data-locale-input-tag={elementId}
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
        for (const tag of props.popupQuickTags) {
            if (!tag || tag.length === 0) {
                continue;
            }
            const elementId = nanoid();
            const beforeDom = buildItemAddonDom(tag, true, elementId);
            const afterDom = buildItemAddonDom(tag, false, elementId);
            const itemDom = (
                <If condition={popupProField} validation={false}>
                    <If.Then>
                        <ProFormText
                            name={props?.name ? `${props?.name}[${tag}]` : undefined}
                            id={props?.id ? `${props?.id}[${tag}]` : (props?.name ? `${props?.name}[${tag}]` : undefined)}
                            fieldProps={{
                                className: `${clazzPrefix}-item`,
                                addonBefore: beforeDom,
                                addonAfter: afterDom,
                                placeholder: props?.popupShareProps?.placeholder || (props?.popupClonePlaceholder ? (StringUtils.joinWith(props?.placeholder) ?? props?.fieldProps?.placeholder) : undefined),
                                disabled: props?.fieldProps?.disabled,
                                readOnly: props?.fieldProps?.readOnly || props?.proFieldProps?.readonly,
                                maxLength: props?.popupShareProps?.maxLength || (props?.popupCloneMaxLength ? props?.fieldProps?.maxLength : undefined),
                                'data-locale-input-tag': elementId,
                            }}
                            proFieldProps={{
                                render: (dom: React.ReactNode) => renderItemReadonly(tag, dom),
                            }}
                            rules={[
                                ...itemClonedRules,
                                ...(props?.popupShareProps?.rules || []),
                            ]}
                        />
                    </If.Then>
                    <If.Else>
                        <Input
                            className={`${clazzPrefix}-item`}
                            name={props?.name ? `${props?.name}[${tag}]` : undefined}
                            id={props?.id ? `${props?.id}[${tag}]` : (props?.name ? `${props?.name}[${tag}]` : undefined)}
                            addonBefore={beforeDom}
                            addonAfter={afterDom}
                            placeholder={props?.popupShareProps?.placeholder || (props?.popupClonePlaceholder ? (StringUtils.joinWith(props?.placeholder) ?? props?.fieldProps?.placeholder) : undefined)}
                            disabled={ props?.fieldProps?.disabled}
                            readOnly={props?.fieldProps?.readOnly || props?.proFieldProps?.readonly}
                            maxLength={props?.popupShareProps?.maxLength || (props?.popupCloneMaxLength ? props?.fieldProps?.maxLength : undefined)}
                            data-locale-input-tag={elementId}
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

    const buildEntryAddonDom = (before: boolean) => {
        if (before && !props?.fieldProps?.addonBefore && actionPos === 'before' && !actionDom) {
            return undefined;
        }
        if (!before && !props?.fieldProps?.addonAfter && actionPos === 'after' && !actionDom) {
            return undefined;
        }
        const nodeCount = [(before && props?.fieldProps?.addonBefore), (!before && props?.fieldProps?.addonAfter), (multilingualism && actionDom && ((before && actionPos === 'before') || (!before && actionPos === 'after')))].filter(object => !!object).length;
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
                <If condition={multilingualism && actionDom && ((before && actionPos === 'before') || (!before && actionPos === 'after'))} validation={false}>
                    {actionDom}
                </If>
            </>
        );
        return (nodeCount === 1) ? combineDom : (<Space>{combineDom}</Space>);
    };

    const beforeDom = buildEntryAddonDom(true);
    const afterDom = buildEntryAddonDom(false);
    const entryImmutable = (editContext.mode === 'read') || (props?.proFieldProps?.mode === 'read') || props?.fieldProps?.disabled || props?.fieldProps?.readOnly || props?.proFieldProps?.readonly;
    const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['ref', 'className', 'addonBefore', 'addonAfter']);

    const buildEntryDom = () => {
        if (proField) {
            const restProps = !props ? {} : omit(props, ['className', 'fieldProps', 'clazzPrefix', 'actionDom', 'actionPos', 'dropdownProps', 'multilingualism', 'proField', 'popupInputProps', 'popupQuickTags', 'popupTagPos', 'popupActionDom', 'popupActionPos', 'popupCloneMaxLength', 'popupClonePlaceholder', 'popupCloneRules', 'popupConfirmProps', 'popupShareProps', 'popupProField']);
            return (
                <ProFormText
                    {...restProps}
                    fieldProps={{
                        ref: fieldRef,
                        className: classNames(clazzPrefix, props?.fieldProps?.className),
                        addonBefore: beforeDom,
                        addonAfter: afterDom,
                        ...omitFieldProps,
                    }}
                />
            )
        } else {
            const restProps = PropsUtils.pickForwardProps(props);
            return (
                <Input
                    ref={fieldRef}
                    className={classNames(clazzPrefix, props?.fieldProps?.className)}
                    addonBefore={beforeDom}
                    addonAfter={afterDom}
                    {...restProps}
                    {...omitFieldProps}
                />
            );
        }
    };

    if (!multilingualism) {
        return buildEntryDom();
    }

    const [menuOpen, setMenuOpen] = React.useState(false);
    const handleMenuClick = () => {
        setMenuOpen(true);
    };
    const handleMenuOpen = (open: boolean) => {
        setMenuOpen(open);
    };

    return (
        <Dropdown
            menu={{
                items: menuItems,
                onClick: handleMenuClick,
            }}
            getPopupContainer={trigger => {
                const container = (typeof props?.dropdownProps?.getPopupContainer === 'function') ? props.dropdownProps.getPopupContainer(trigger) : undefined;
                return container || trigger?.parentElement || document.body;
            }}
            overlayClassName={classNames(`${clazzPrefix}-dropdown`, (entryImmutable ? `${clazzPrefix}-immutable` : undefined), props?.dropdownProps?.overlayClassName)}
            open={menuOpen}
            onOpenChange={(open: boolean) => {
                handleMenuOpen(open);
                if (typeof props?.dropdownProps?.onOpenChange === 'function') {
                    props.dropdownProps.onOpenChange(open);
                }
            }}
            {...(!props?.dropdownProps ? {} : omit(props?.dropdownProps, ['getPopupContainer', 'overlayClassName', 'onOpenChange']))}
        >
            <Input.Group>
                {buildEntryDom()}
            </Input.Group>
        </Dropdown>
    );
});
