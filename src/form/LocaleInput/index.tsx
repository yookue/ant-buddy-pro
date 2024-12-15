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
import {ConfigProvider, Input, List, Space, Popconfirm, type InputProps, type InputRef, type FormRule} from 'antd';
import {TranslationOutlined, SelectOutlined} from '@ant-design/icons';
import {ProFormText} from '@ant-design/pro-form';
import {type ProFormFieldItemProps} from '@ant-design/pro-form/es/interface';
import {useIntl} from '@ant-design/pro-provider';
import {nanoid} from '@ant-design/pro-utils';
import {If} from '@yookue/react-condition';
import {BooleanUtils, StringUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import Trigger, {type TriggerProps} from 'rc-trigger';
import 'rc-trigger/assets/index.less';
import omit from 'rc-util/es/omit';
import {type WithFalse, type BeforeAfterType, type RuleValidateScope} from '@/type/declaration';
import {ElementUtils} from '@/util/ElementUtils';
import {PropUtils} from '@/util/PropUtils';
import {TriggerUtils} from '@/util/TriggerUtils';
import {intlLocales} from './intl-locales';
import './index.less';


export type PopupInputProps = ProFormFieldItemProps<InputProps, InputRef> & {
    /**
     * @description The locale language tag
     * @description.zh-CN 语言标签
     * @description.zh-TW 語言標簽
     */
    tag: string;
};


export type PopupCloneProps = {
    /**
     * @description Whether to use the same placeholder as the entry field for the locale items
     * @description.zh-CN 语言输入项使用与默认输入项相同的占位符
     * @description.zh-TW 語言輸入項使用與默認輸入項相同的占位符
     */
    placeholder?: boolean;

    /**
     * @description Whether to use the same allowClear as the entry field for the locale items
     * @description.zh-CN 语言输入项使用与默认输入项相同的允许清除
     * @description.zh-TW 語言輸入項使用與默認輸入項相同的允許清除
     */
    allowClear?: boolean;

    /**
     * @description Whether to use the same bordered as the entry field for the locale items
     * @description.zh-CN 语言输入项使用与默认输入项相同的允许边框
     * @description.zh-TW 語言輸入項使用與默認輸入項相同的允許邊框
     */
    bordered?: boolean;

    /**
     * @description Whether to use the same maxLength as the entry field for the locale items
     * @description.zh-CN 语言输入项使用与默认输入项相同的长度
     * @description.zh-TW 語言輸入項使用與默認輸入項相同的長度
     */
    maxLength?: boolean;

    /**
     * @description Whether to use the same showCount as the entry field for the locale items
     * @description.zh-CN 语言输入项使用与默认输入项相同的显示字数
     * @description.zh-TW 語言輸入項使用與默認輸入項相同的顯示字數
     */
    showCount?: boolean;

    /**
     * @description Whether to use the same size as the entry field for the locale items
     * @description.zh-CN 语言输入项使用与默认输入项相同的大小
     * @description.zh-TW 語言輸入項使用與默認輸入項相同的大小
     */
    size?: boolean;

    /**
     * @description The validate rules of the locale items from the entry field
     * @description.zh-CN 语言输入项使用的默认输入项的校验规则范围
     * @description.zh-TW 語言輸入項使用的默認輸入項的校驗規則範圍
     */
    rules?: WithFalse<RuleValidateScope>;
};


export type PopupShareProps = {
    /**
     * @description The validation rules for locales
     * @description.zh-CN 语言输入项的校验规则
     * @description.zh-TW 語言輸入項的校驗規則
     */
    rules?: FormRule[];
} & Pick<InputProps, 'placeholder' | 'allowClear' | 'bordered' | 'maxLength' | 'showCount' | 'size'>;


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


export type LocaleInputProps = ProFormFieldItemProps<InputProps, InputRef> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-locale-input'
     */
    clazzPrefix?: string;

    /**
     * @description The DOM of the addon for the entry field
     * @description.zh-CN 默认文本框的附属节点内容
     * @description.zh-TW 默認文本框的標簽節點內容
     * @default <TranslationOutlined/>
     */
    addon?: React.ReactNode;

    /**
     * @description The position of the addon for the entry field
     * @description.zh-CN 默认文本框的附属节点位置
     * @description.zh-TW 默認文本框的附属節點位置
     * @default 'after'
     */
    addonPos?: WithFalse<BeforeAfterType>;

    /**
     * @description Whether the dropdown div is default open or not
     * @description.zh-CN 弹出层是否默认展开
     * @description.zh-TW 彈出層是否默認展開
     * @default false
     */
    defaultOpen?: boolean;

    /**
     * @description The properties of the dropdown div
     * @description.zh-CN 弹出层的属性
     * @description.zh-TW 彈出層的屬性
     */
    triggerProps?: Omit<TriggerProps, 'popup' | 'popupVisible' | 'children'>;

    /**
     * @description Whether to enable multilingual or not
     * @description.zh-CN 是否启用多语言
     * @description.zh-TW 是否啓用多語言
     * @default true
     */
    multilingual?: boolean;

    /**
     * @description Whether to use ProFormField instead of Antd for the entry field
     * @description.zh-CN 默认文本框是否使用 ProFormField 控件
     * @description.zh-TW 默認文本框是否使用 ProFormField 控件
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
    popupTagPos?: WithFalse<BeforeAfterType>;

    /**
     * @description The DOM of language addon for the locale items
     * @description.zh-CN 语言输入项的附属节点内容
     * @description.zh-TW 語言輸入項的附屬節點內容
     * @default <SelectOutlined/>
     */
    popupAddon?: React.ReactNode;

    /**
     * @description The position of language addons for the locale items
     * @description.zh-CN 语言输入项的附属节点位置
     * @description.zh-TW 語言輸入項的附屬節點位置
     * @default 'after'
     */
    popupAddonPos?: WithFalse<BeforeAfterType>;

    /**
     * @description The share properties of the locale items
     * @description.zh-CN 语言输入项的通用属性
     * @description.zh-TW 語言輸入項的通用屬性
     */
    popupShareProps?: PopupShareProps;

    /**
     * @description The clone properties of the locale items
     * @description.zh-CN 语言输入项的克隆属性
     * @description.zh-TW 語言輸入項的克隆屬性
     */
    popupCloneProps?: PopupCloneProps;

    /**
     * @description The confirm properties of the locale items
     * @description.zh-CN 语言输入项的动作确认属性
     * @description.zh-TW 語言輸入項的動作確認屬性
     */
    popupConfirmProps?: PopupConfirmProps;

    /**
     * @description Whether to use ProFormField instead of Antd for the locale items
     * @description.zh-CN 语言输入项是否使用 ProFormField 控件
     * @description.zh-TW 語言輸入項是否使用 ProFormField 控件
     * @default true
     */
    popupProField?: boolean;
};


/**
 * Component for displaying a text input box with a dropdown div that contains input boxes with different locales
 *
 * @author David Hsing
 */
export const LocaleInput: React.FC<LocaleInputProps> = (props?: LocaleInputProps) => {
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-locale-input');
    const intlType = useIntl();

    // Initialize the default props
    const {
        addon = <TranslationOutlined/>,
        addonPos = 'after',
        defaultOpen = false,
        multilingual = true,
        proField = true,
        popupTagPos = 'before',
        popupAddon = <SelectOutlined/>,
        popupAddonPos = 'after',
        popupCloneProps = {
            placeholder: true,
            allowClear: true,
            bordered: true,
            maxLength: true,
            showCount: false,
            size: true,
            rules: 'optional',
        },
        popupConfirmProps = {
            enabled: true,
        },
        popupProField = true,
        locale = intlType.locale,
    } = props ?? {};

    const [fieldId] = React.useState<string>(nanoid().replace(/-/g, ''));
    const compositionRef = React.useRef<boolean>(false);

    const buildEntryAddonDom = (before: boolean) => {
        if (before && !props?.fieldProps?.addonBefore && addonPos === 'before' && !addon) {
            return undefined;
        }
        if (!before && !props?.fieldProps?.addonAfter && addonPos === 'after' && !addon) {
            return undefined;
        }
        const nodeCount = [(before && props?.fieldProps?.addonBefore), (!before && props?.fieldProps?.addonAfter), (multilingual && addon && ((before && addonPos === 'before') || (!before && addonPos === 'after')))].filter(object => !!object).length;
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
                <If condition={multilingual && addon && ((before && addonPos === 'before') || (!before && addonPos === 'after'))} validation={false}>
                    {addon}
                </If>
            </>
        );
        return (nodeCount === 1) ? combineDom : <Space>{combineDom}</Space>;
    };

    // noinspection DuplicatedCode
    const renderEntryReadonly = (dom: React.ReactNode) => (
        <div className={classNames(clazzPrefix, `${clazzPrefix}-entry-readonly`, (addonPos ? `${clazzPrefix}-entry-readonly-${addonPos}` : undefined))}>
            <If condition={addonPos === 'before'} validation={false}>
                <span className={`${clazzPrefix}-entry-readonly-addon`}>
                    {addon}
                </span>
            </If>
            <div className={`${clazzPrefix}-entry-readonly-content`}>
                {dom || props?.proFieldProps?.emptyText || '-'}
            </div>
            <If condition={addonPos === 'after'} validation={false}>
                <span className={`${clazzPrefix}-entry-readonly-addon`}>
                    {addon}
                </span>
            </If>
        </div>
    );

    const buildEntryDom = () => {
        const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['className', 'addonBefore', 'addonAfter']);
        if (proField) {
            const restProps = !props ? {} : omit(props, ['fieldProps', 'proFieldProps', 'clazzPrefix', 'addon', 'addonPos', 'defaultOpen', 'triggerProps', 'multilingual', 'proField', 'locale', 'popupInputProps', 'popupQuickTags', 'popupTagPos', 'popupAddon', 'popupAddonPos', 'popupShareProps', 'popupCloneProps', 'popupConfirmProps', 'popupProField']);
            return (
                <ProFormText
                    {...restProps}
                    fieldProps={{
                        className: classNames(clazzPrefix, props?.fieldProps?.className),
                        addonBefore: buildEntryAddonDom(true),
                        addonAfter: buildEntryAddonDom(false),
                        ...omitFieldProps,
                        'data-locale-input-id': fieldId,
                    }}
                    proFieldProps={{
                        render: (dom: React.ReactNode) => props?.proFieldProps?.render(dom) ?? renderEntryReadonly(dom),
                        ...(!props?.proFieldProps ? {} : omit(props.proFieldProps, ['render']))
                    }}
                />
            )
        } else {
            const restProps = PropUtils.pickForwardProps(props);
            return (
                <Input
                    className={classNames(clazzPrefix, props?.fieldProps?.className)}
                    addonBefore={buildEntryAddonDom(true)}
                    addonAfter={buildEntryAddonDom(false)}
                    {...restProps}
                    {...omitFieldProps}
                    data-locale-input-id={fieldId}
                />
            );
        }
    };

    if (!multilingual || (!props?.popupInputProps && !props?.popupQuickTags)) {
        return buildEntryDom();
    }

    const [confirmOpen, setConfirmOpen] = React.useState<boolean>();

    const handleSetAsDefault = (tagId: string) => {
        const inspect = document.querySelector<HTMLInputElement>(`[data-locale-input-id='${fieldId}']`);
        const sponsor = document.querySelector<HTMLInputElement>(`[data-locale-input-tag='${tagId}']`);
        ElementUtils.setElementValue(inspect, sponsor?.value);
    };

    const buildItemAddonDom = (tag: string, before: boolean, elementId: string, inputProps?: PopupInputProps) => {
        if (before && popupTagPos !== 'before' && !inputProps?.fieldProps?.addonBefore && popupAddonPos === 'before' && !popupAddon) {
            return undefined;
        }
        if (!before && popupTagPos !== 'after' && !inputProps?.fieldProps?.addonAfter && popupAddonPos === 'after' && !popupAddon) {
            return undefined;
        }
        const itemDisabled = props?.fieldProps?.disabled || inputProps?.fieldProps?.disabled;
        const itemReadonly = props?.fieldProps?.readOnly || props?.proFieldProps?.readonly || inputProps?.fieldProps?.readOnly || inputProps?.proFieldProps?.readonly;

        const tagDom = ((before && popupTagPos === 'before') || (!before && popupTagPos === 'after')) ? (
            <span className={classNames(`${clazzPrefix}-tag-${popupTagPos}`, ((itemDisabled || itemReadonly) ? `${clazzPrefix}-popup-disabled` : undefined))}>
                {tag}
            </span>
        ) : undefined;

        const actionClazz = classNames(`${clazzPrefix}-action-${popupAddonPos}`, ((itemDisabled || itemReadonly) ? `${clazzPrefix}-popup-disabled` : undefined));
        const addon = (popupAddon && ((before && popupAddonPos === 'before') || (!before && popupAddonPos === 'after'))) ? (
            <If condition={BooleanUtils.isNotFalse(popupConfirmProps?.enabled)} validation={false}>
                <If.Then>
                    <Popconfirm
                        title={popupConfirmProps?.message || intlLocales.get([locale, 'setAsDefault']) || intlLocales.get(['en_US', 'setAsDefault'])}
                        okText={popupConfirmProps?.ok || intlLocales.get([locale, 'ok'])}
                        cancelText={popupConfirmProps?.cancel || intlLocales.get([locale, 'cancel'])}
                        disabled={itemDisabled || itemReadonly}
                        onConfirm={() => handleSetAsDefault(elementId)}
                        onOpenChange={setConfirmOpen}
                    >
                        <span className={actionClazz}>
                            {popupAddon}
                        </span>
                    </Popconfirm>
                </If.Then>
                <If.Else>
                    <span className={actionClazz} onClick={() => handleSetAsDefault(elementId)}>
                        {popupAddon}
                    </span>
                </If.Else>
            </If>
        ) : undefined;

        const nodeCount = [(before && inputProps?.fieldProps?.addonBefore), (!before && inputProps?.fieldProps?.addonAfter), tagDom, addon].filter(object => !!object).length;
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
                {addon}
            </>
        );
        return (nodeCount === 1) ? combineDom : <Space>{combineDom}</Space>;
    };

    const renderItemReadonly = (tag: string, dom: React.ReactNode) => (
        <div className={classNames(`${clazzPrefix}-item-readonly`, (popupTagPos ? `${clazzPrefix}-item-readonly-${popupTagPos}` : undefined))}>
            <If condition={popupTagPos === 'before'} validation={false}>
                <span className={`${clazzPrefix}-item-readonly-tag`}>
                    {tag}
                </span>
            </If>
            <div className={`${clazzPrefix}-item-readonly-content`}>
                {dom || props?.proFieldProps?.emptyText || '-'}
            </div>
            <If condition={popupTagPos === 'after'} validation={false}>
                <span className={`${clazzPrefix}-item-readonly-tag`}>
                    {tag}
                </span>
            </If>
        </div>
    );

    const cloneItemRules = () => {
        if (!props?.rules || !popupCloneProps?.rules) {
            return [];
        }
        switch (popupCloneProps.rules) {
            case 'all':
                return props.rules;
            case 'required':
                return props.rules.filter((item: any) => item?.required);
            case 'optional':
                return props.rules.filter((item: any) => !item?.required);
            default:
                return [];
        }
    };

    const buildPopupDom = () => {
        const clonedRules = cloneItemRules();
        const tagInputs: React.ReactNode[] = [];
        if (props?.popupInputProps) {
            for (const itemProp of props.popupInputProps) {
                if (!itemProp || !itemProp?.tag) {
                    continue;
                }
                const {tag, fieldProps, rules} = itemProp;
                const restProps = omit(itemProp, ['tag', 'name', 'fieldProps', 'proFieldProps', 'rules']);
                const omitFieldProps = !fieldProps ? {} : omit(fieldProps, ['className', 'name', 'id', 'placeholder', 'autoComplete', 'addonBefore', 'addonAfter', 'allowClear', 'bordered', 'maxLength', 'showCount', 'size', 'disabled', 'readOnly', 'onCompositionStart', 'onCompositionEnd']);
                const tagId = nanoid().replace(/-/g, '');
                const beforeDom = buildItemAddonDom(tag, true, tagId, itemProp);
                const afterDom = buildItemAddonDom(tag, false, tagId, itemProp);
                const itemDom = (
                    <If condition={popupProField} validation={false}>
                        <If.Then>
                            <ProFormText
                                key={tag}
                                name={props?.name ? `${props.name}[${tag}]` : undefined}
                                {...restProps}
                                fieldProps={{
                                    className: classNames(`${clazzPrefix}-item`, fieldProps?.className),
                                    id: props?.id ? `${props.id}[${tag}]` : (props?.name ? `${props.name}[${tag}]` : undefined),
                                    placeholder: StringUtils.join(itemProp?.placeholder) || fieldProps?.placeholder || props?.popupShareProps?.placeholder || (popupCloneProps.placeholder ? (StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder) : undefined),
                                    autoComplete: 'off',
                                    addonBefore: beforeDom,
                                    addonAfter: afterDom,
                                    allowClear: fieldProps?.allowClear || props?.popupShareProps?.allowClear || (popupCloneProps.allowClear ? props?.fieldProps?.allowClear : undefined),
                                    bordered: fieldProps?.bordered || props?.popupShareProps?.bordered || (popupCloneProps.bordered ? props?.fieldProps?.bordered : undefined),
                                    maxLength: fieldProps?.maxLength || props?.popupShareProps?.maxLength || (popupCloneProps.maxLength ? props?.fieldProps?.maxLength : undefined),
                                    showCount: fieldProps?.showCount || props?.popupShareProps?.showCount || (popupCloneProps.showCount ? props?.fieldProps?.showCount : undefined),
                                    size: fieldProps?.size || props?.popupShareProps?.size || (popupCloneProps.size ? props?.fieldProps?.size : undefined),
                                    disabled: props.disabled || props?.fieldProps?.disabled || fieldProps?.disabled,
                                    readOnly: props.readonly || props?.fieldProps?.readOnly || fieldProps?.readOnly,
                                    onCompositionStart: (event: React.CompositionEvent<HTMLInputElement>) => {
                                        compositionRef.current = true;
                                        fieldProps?.onCompositionStart?.(event);
                                    },
                                    onCompositionEnd: (event: React.CompositionEvent<HTMLInputElement>) => {
                                        compositionRef.current = false;
                                        fieldProps?.onCompositionEnd?.(event);
                                    },
                                    ...omitFieldProps,
                                    'data-locale-input-tag': tagId,
                                }}
                                proFieldProps={{
                                    render: (dom: React.ReactNode) => itemProp?.proFieldProps?.render?.(dom) ?? renderItemReadonly(tag, dom),
                                    ...(!itemProp?.proFieldProps ? {} : omit(itemProp.proFieldProps, ['render']))
                                }}
                                rules={[
                                    ...(props?.popupShareProps?.rules ?? []),
                                    ...clonedRules,
                                    ...(rules ?? []),
                                ]}
                            />
                        </If.Then>
                        <If.Else>
                            <Input
                                key={tag}
                                className={classNames(`${clazzPrefix}-item`, fieldProps?.className)}
                                name={props?.name ? `${props.name}[${tag}]` : undefined}
                                id={props?.id ? `${props.id}[${tag}]` : (props?.name ? `${props.name}[${tag}]` : undefined)}
                                placeholder={StringUtils.join(itemProp?.placeholder) || fieldProps?.placeholder || props?.popupShareProps?.placeholder || (popupCloneProps.placeholder ? (StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder) : undefined)}
                                autoComplete={'off'}
                                addonBefore={beforeDom}
                                addonAfter={afterDom}
                                allowClear={fieldProps?.allowClear || props?.popupShareProps?.allowClear || (popupCloneProps.allowClear ? props?.fieldProps?.allowClear : undefined)}
                                bordered={fieldProps?.bordered || props?.popupShareProps?.bordered || (popupCloneProps.bordered ? props?.fieldProps?.bordered : undefined)}
                                maxLength={fieldProps?.maxLength || props?.popupShareProps?.maxLength || (popupCloneProps.maxLength ? props?.fieldProps?.maxLength : undefined)}
                                showCount={fieldProps?.showCount || props?.popupShareProps?.showCount || (popupCloneProps.showCount ? props?.fieldProps?.showCount : undefined)}
                                size={fieldProps?.size || props?.popupShareProps?.size || (popupCloneProps.size ? props?.fieldProps?.size : undefined)}
                                disabled={props.disabled || props?.fieldProps?.disabled || fieldProps?.disabled}
                                readOnly={props.readonly || props?.fieldProps?.readOnly || fieldProps?.readOnly}
                                onCompositionStart={(event: React.CompositionEvent<HTMLInputElement>) => {
                                    compositionRef.current = true;
                                    fieldProps?.onCompositionStart?.(event);
                                }}
                                onCompositionEnd={(event: React.CompositionEvent<HTMLInputElement>) => {
                                    compositionRef.current = false;
                                    fieldProps?.onCompositionEnd?.(event);
                                }}
                                {...omitFieldProps}
                                data-locale-input-tag={tagId}
                            />
                        </If.Else>
                    </If>
                );
                tagInputs.push(itemDom);
            }
        } else if (!props?.popupInputProps && props?.popupQuickTags) {
            for (const tag of props.popupQuickTags) {
                if (!tag) {
                    continue;
                }
                const tagId = nanoid().replace(/-/g, '');
                const beforeDom = buildItemAddonDom(tag, true, tagId);
                const afterDom = buildItemAddonDom(tag, false, tagId);
                const itemDom = (
                    <If condition={popupProField} validation={false}>
                        <If.Then>
                            <ProFormText
                                key={tag}
                                name={props?.name ? `${props.name}[${tag}]` : undefined}
                                fieldProps={{
                                    className: `${clazzPrefix}-item`,
                                    id: props?.id ? `${props.id}[${tag}]` : (props?.name ? `${props.name}[${tag}]` : undefined),
                                    placeholder: props?.popupShareProps?.placeholder || (popupCloneProps.placeholder ? (StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder) : undefined),
                                    autoComplete: 'off',
                                    addonBefore: beforeDom,
                                    addonAfter: afterDom,
                                    allowClear: props?.popupShareProps?.allowClear || (popupCloneProps.allowClear ? props?.fieldProps?.allowClear : undefined),
                                    bordered: props?.popupShareProps?.bordered || (popupCloneProps.bordered ? props?.fieldProps?.bordered : undefined),
                                    maxLength: props?.popupShareProps?.maxLength || (popupCloneProps.maxLength ? props?.fieldProps?.maxLength : undefined),
                                    showCount: props?.popupShareProps?.showCount || (popupCloneProps.showCount ? props?.fieldProps?.showCount : undefined),
                                    size: props?.popupShareProps?.size || (popupCloneProps.size ? props?.fieldProps?.size : undefined),
                                    disabled: props.disabled || props?.fieldProps?.disabled,
                                    readOnly: props.readonly || props?.fieldProps?.readOnly,
                                    onCompositionStart: () => {
                                        compositionRef.current = true;
                                    },
                                    onCompositionEnd: () => {
                                        compositionRef.current = false;
                                    },
                                    'data-locale-input-tag': tagId,
                                }}
                                proFieldProps={{
                                    render: (dom: React.ReactNode) => renderItemReadonly(tag, dom),
                                }}
                                rules={[
                                    ...(props?.popupShareProps?.rules || []),
                                    ...clonedRules,
                                ]}
                            />
                        </If.Then>
                        <If.Else>
                            <Input
                                key={tag}
                                className={`${clazzPrefix}-item`}
                                name={props?.name ? `${props.name}[${tag}]` : undefined}
                                id={props?.id ? `${props.id}[${tag}]` : (props?.name ? `${props.name}[${tag}]` : undefined)}
                                placeholder={props?.popupShareProps?.placeholder || (popupCloneProps.placeholder ? (StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder) : undefined)}
                                autoComplete={'off'}
                                addonBefore={beforeDom}
                                addonAfter={afterDom}
                                allowClear={props?.popupShareProps?.allowClear || (popupCloneProps.allowClear ? props?.fieldProps?.allowClear : undefined)}
                                bordered={props?.popupShareProps?.bordered || (popupCloneProps.bordered ? props?.fieldProps?.bordered : undefined)}
                                maxLength={props?.popupShareProps?.maxLength || (popupCloneProps.maxLength ? props?.fieldProps?.maxLength : undefined)}
                                showCount={props?.popupShareProps?.showCount || (popupCloneProps.showCount ? props?.fieldProps?.showCount : undefined)}
                                size={props?.popupShareProps?.size || (popupCloneProps.size ? props?.fieldProps?.size : undefined)}
                                disabled={props.disabled || props?.fieldProps?.disabled}
                                readOnly={props.readonly || props?.fieldProps?.readOnly}
                                onCompositionStart={() => {
                                    compositionRef.current = true;
                                }}
                                onCompositionEnd={() => {
                                    compositionRef.current = false;
                                }}
                                data-locale-input-tag={tagId}
                            />
                        </If.Else>
                    </If>
                );
                tagInputs.push(itemDom);
            }
        }
        return (
            <List
                className={`${clazzPrefix}-popup-list`}
                dataSource={tagInputs}
                bordered={true}
                size='small'
                renderItem={item => (
                    <List.Item className={`${clazzPrefix}-popup-list-item`}>
                        {item}
                    </List.Item>
                )}
            />
        );
    };

    const [triggerOpen, setTriggerOpen] = React.useState<boolean>(defaultOpen);
    const omitTriggerProps = !props?.triggerProps ? {} : omit(props?.triggerProps, ['className', 'action', 'builtinPlacements', 'getPopupContainer', 'getTriggerDOMNode', 'popupAlign', 'popupClassName', 'stretch', 'onPopupVisibleChange']);

    return (
        <Trigger
            className={classNames(`${clazzPrefix}-trigger`, props?.triggerProps?.className)}
            action={props?.triggerProps?.action ?? ['hover']}
            builtinPlacements={props?.triggerProps?.builtinPlacements ?? TriggerUtils.buildPlacements()}
            getPopupContainer={(trigger: HTMLElement) => {
                const income = props?.triggerProps?.getPopupContainer?.(trigger);
                return income || trigger?.parentElement || document.body;
            }}
            getTriggerDOMNode={(instance: React.ReactInstance) => {
                return props?.triggerProps?.getTriggerDOMNode?.(instance) || document.querySelector<HTMLElement>(`[data-locale-input-entry='${fieldId}'] .${clazzPrefix}`) || document.body;
            }}
            popup={buildPopupDom()}
            popupAlign={(props?.triggerProps?.popupPlacement || props?.triggerProps?.popupAlign) ? props?.triggerProps?.popupAlign : {
                points: ['tl', 'bl'],
                offset: [0, 4],
            }}
            popupClassName={classNames(`${clazzPrefix}-popup`, `${clazzPrefix}-popup-${fieldId}`, (popupProField ? `${clazzPrefix}-popup-pro-field` : undefined), props?.triggerProps?.popupClassName)}
            popupVisible={triggerOpen}
            stretch={props?.triggerProps?.stretch ?? 'width'}
            onPopupVisibleChange={(open: boolean) => {
                if (!open && (compositionRef.current || confirmOpen)) {
                    return;
                }
                setTriggerOpen(open);
                props?.triggerProps?.onPopupVisibleChange?.(open);
            }}
            {...omitTriggerProps}
        >
            <div data-locale-input-entry={fieldId}>
                {buildEntryDom()}
            </div>
        </Trigger>
    );
};
