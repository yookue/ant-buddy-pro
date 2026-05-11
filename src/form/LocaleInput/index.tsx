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
import {ConfigProvider, Form, List, Popconfirm, Space, Tooltip, type InputProps, type FormRule} from 'antd';
import {TranslationOutlined, SelectOutlined} from '@ant-design/icons';
import {useIntl} from '@ant-design/pro-components';
import {EditOrReadOnlyContext} from '@ant-design/pro-components/es/form/BaseForm/EditOrReadOnlyContext';
import Trigger, {type TriggerProps} from '@rc-component/trigger';
import '@rc-component/trigger/assets/index.less';
import {omit} from '@rc-component/util';
import {If} from '@unikue/react-condition';
import {BooleanUtils, ElementUtils, NanoidUtils, ObjectUtils, StringUtils} from '@unikue/ts-lang-utils';
import {useEventListener, useMutationObserver} from 'ahooks';
import classnames from 'classnames';
import {type WithFalse, type BeforeAfterType, type RuleValidateScope} from '@/type/declaration';
import {AddonInput, type AddonInputProps} from '@/form/AddonInput';
import {DesignUtils} from '@/util/DesignUtils';
import {StyleUtils} from '@/util/StyleUtils';
import {TriggerUtils} from '@/util/TriggerUtils';
import {intlLocales} from './intl-locales';
import {useFieldStyle} from './style';


export type PopupInputProps = Omit<AddonInputProps, 'clazzPrefix' | 'addonBefore' | 'addonAfter' | 'cursorBefore' | 'cursorAfter' | 'paddingBefore' | 'paddingAfter'> & {
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
     * @description Whether to use the same variant as the entry field for the locale items
     * @description.zh-CN 语言输入项使用与默认输入项相同的形态变体
     * @description.zh-TW 語言輸入項使用與默認輸入項相同的形態變體
     */
    variant?: boolean;

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
} & Pick<InputProps, 'placeholder' | 'allowClear' | 'variant' | 'maxLength' | 'showCount' | 'size'>;


export type PopupConfirmProps = {
    /**
     * @description Whether to enable the popup confirmation
     * @description.zh-CN 是否使用弹出确认框
     * @description.zh-TW 是否使用彈出確認框
     * @default true
     */
    enabled?: boolean;

    /**
     * @description Set as default
     * @description.zh-CN 设为默认
     * @description.zh-TW 設爲默認
     */
    setAsDefault?: string;

    /**
     * @description Set as default?
     * @description.zh-CN 设为默认吗？
     * @description.zh-TW 設爲默認嗎？
     */
    sureSetAsDefault?: string;

    /**
     * @description OK
     * @description.zh-CN 确定
     * @description.zh-TW 確定
     */
    ok?: string;

    /**
     * @description Cancel
     * @description.zh-CN 取消
     * @description.zh-TW 取消
     */
    cancel?: string;
};


export type LocaleInputProps = Omit<AddonInputProps, 'clazzPrefix' | 'addonBefore' | 'addonAfter' | 'cursorBefore' | 'cursorAfter' | 'paddingBefore' | 'paddingAfter'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-locale-input'
     */
    clazzPrefix?: string;

    /**
     * @description The DOM of the addon for the entry field
     * @description.zh-CN 默认文本框的附属节点内容
     * @description.zh-TW 默認文本框的標簽節點內容
     * @default <TranslationOutlined/>
     */
    addon?: React.ReactNode | (() => React.ReactNode | undefined);

    /**
     * @description The position of the addon for the entry field
     * @description.zh-CN 默认文本框的附属节点位置
     * @description.zh-TW 默認文本框的附属節點位置
     * @default 'after'
     */
    addonPos?: WithFalse<BeforeAfterType>;

    /**
     * @description Whether the dropdown div is default open or not
     * @description.zh-CN 是否默认展开弹出层
     * @description.zh-TW 是否默認展開彈出層
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
    popupAddon?: React.ReactNode | (() => React.ReactNode | undefined);

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
    const form = Form.useFormInstance();
    const editContext = React.useContext(EditOrReadOnlyContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-locale-input';
    const intlType = useIntl();

    // Initialize the default props
    const {
        addon = <TranslationOutlined/>,
        addonPos = 'after',
        multilingual = true,
        proField = true,
        popupTagPos = 'before',
        popupAddon = <SelectOutlined/>,
        popupAddonPos = 'after',
        popupCloneProps = {
            placeholder: true,
            allowClear: true,
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

    const [fieldId] = React.useState<string>(NanoidUtils.getPopularId());
    const [triggerOpen, setTriggerOpen] = React.useState<boolean>(props?.defaultOpen ?? false);
    const [triggerOffset, setTriggerOffset] = React.useState<number>(4);
    const compositionRef = React.useRef<boolean>(false);
    const closeTimerRef = React.useRef<NodeJS.Timeout | null>(null);
    // noinspection DuplicatedCode
    const fieldStyle = useFieldStyle(clazzPrefix);

    // Monitor ant-form-item-additional changes and update offset
    // noinspection DuplicatedCode
    const entryElementRef = React.useRef<HTMLDivElement>(null);
    const updateTriggerOffset = React.useCallback(() => {
        if (!entryElementRef.current) {
            return;
        }
        const prefixCls = configContext?.getPrefixCls('') ?? 'ant';
        const additionalHeight = DesignUtils.getFormAdditionalHeight(entryElementRef.current, prefixCls);
        setTriggerOffset(4 - additionalHeight);
    }, []);
    useMutationObserver(updateTriggerOffset, entryElementRef, {childList: true, subtree: true});

    React.useEffect(() => {
        const element = document.querySelector<HTMLDivElement>(`.${clazzPrefix}-entry-${fieldId}`);
        if (!element) {
            return;
        }
        entryElementRef.current = element;
        updateTriggerOffset();
    }, [clazzPrefix, fieldId]);

    // noinspection DuplicatedCode
    const handleWindowResize = () => {
        const inspect = document.querySelector<HTMLDivElement>(`.${clazzPrefix}-entry-${fieldId}`);
        const sponsor = document.querySelector<HTMLDivElement>(`.${clazzPrefix}-popup-${fieldId}`);
        if (inspect && sponsor) {
            StyleUtils.addStyle(sponsor, 'width', `${inspect.offsetWidth}px`);
            StyleUtils.addStyle(sponsor, 'min-width', `${inspect.offsetWidth}px`);
        }
    };
    useEventListener('resize', handleWindowResize);

    const addonEntryDom = (typeof addon === 'function') ? addon() : addon;
    const buildEntryAddonDom = (before: boolean) => {
        return ((before && addonPos === 'before') || (!before && addonPos === 'after')) ? addonEntryDom : undefined;
    };

    // noinspection DuplicatedCode
    const renderEntryReadonly = (dom: React.ReactNode) => (
        <div className={classnames(clazzPrefix, fieldStyle.hashId, `${clazzPrefix}-entry-readonly`, (addonPos ? `${clazzPrefix}-entry-readonly-${addonPos}` : undefined))}>
            <If condition={addonPos === 'before'} validation={false}>
                <span className={`${clazzPrefix}-entry-readonly-addon`}>
                    {addonEntryDom}
                </span>
            </If>
            <div className={`${clazzPrefix}-entry-readonly-content`}>
                {dom || props?.proFieldProps?.emptyText || '-'}
            </div>
            <If condition={addonPos === 'after'} validation={false}>
                <span className={`${clazzPrefix}-entry-readonly-addon`}>
                    {addonEntryDom}
                </span>
            </If>
        </div>
    );

    const buildEntryDom = () => {
        const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['className', 'allowClear', 'addonBefore', 'addonAfter']);
        if (proField) {
            const restProps = !props ? {} : omit(props, ['allowClear', 'fieldProps', 'proFieldProps', 'clazzPrefix', 'addon', 'addonPos', 'defaultOpen', 'triggerProps', 'multilingual', 'proField', 'locale', 'popupInputProps', 'popupQuickTags', 'popupTagPos', 'popupAddon', 'popupAddonPos', 'popupShareProps', 'popupCloneProps', 'popupConfirmProps', 'popupProField']);
            return (
                <div className={clazzPrefix}>
                    <AddonInput
                        addonBefore={buildEntryAddonDom(true)}
                        addonAfter={buildEntryAddonDom(false)}
                        cursorBefore={addonPos === 'before' ? 'pointer' : undefined}
                        cursorAfter={addonPos === 'after' ? 'pointer' : undefined}
                        fieldProps={{
                            className: classnames(`${clazzPrefix}-entry-${fieldId}`, props?.className ?? props?.fieldProps?.className),
                            allowClear: props?.allowClear || props?.fieldProps?.allowClear,
                            ...omitFieldProps,
                            'data-locale-input-id': fieldId,
                        }}
                        proField={proField}
                        proFieldProps={{
                            render: (dom: React.ReactNode) => props?.proFieldProps?.render(dom) ?? (!multilingual ? dom : renderEntryReadonly(dom)),
                            ...(!props?.proFieldProps ? {} : omit(props.proFieldProps, ['render']))
                        }}
                        {...restProps}
                    />
                </div>
            )
        } else {
            const restProps = omit(omitFieldProps, ['name', 'id', 'placeholder', 'onChange']);
            return (
                <div className={clazzPrefix}>
                    <AddonInput
                        className={classnames(`${clazzPrefix}-entry-${fieldId}`, props?.className ?? props?.fieldProps?.className)}
                        placeholder={StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder}
                        addonBefore={buildEntryAddonDom(true)}
                        addonAfter={buildEntryAddonDom(false)}
                        cursorBefore={addonPos === 'before' ? 'pointer' : undefined}
                        cursorAfter={addonPos === 'after' ? 'pointer' : undefined}
                        proField={proField}
                        // @ts-ignore
                        onChange={(event: any) => {
                            if (props?.name) {
                                form?.setFieldValue(props.name, event.target.value);
                            }
                            props?.fieldProps?.onChange?.(event);
                        }}
                        data-locale-input-id={fieldId}
                        {...restProps}
                    />
                </div>
            );
        }
    };

    if (!multilingual || (!props?.popupInputProps && !props?.popupQuickTags)) {
        return buildEntryDom();
    }

    const [confirmOpen, setConfirmOpen] = React.useState<boolean>();

    const entryImmutable = editContext.mode === 'read' || props?.proFieldProps?.mode === 'read' || props?.fieldProps?.readOnly || props?.proFieldProps?.readonly || props?.disabled || props?.fieldProps?.disabled;

    const handleSetAsDefault = (tagId: string) => {
        const inspect = document.querySelector<HTMLInputElement>(`[data-locale-input-id='${fieldId}']`);
        const sponsor = document.querySelector<HTMLInputElement>(`[data-locale-input-tag='${tagId}']`);
        ElementUtils.setElementValue(inspect, sponsor?.value);
    };

    const itemAddonDom = entryImmutable ?
        (typeof popupAddon === 'function' ? popupAddon() : popupAddon)
    : (
        <Tooltip title={ObjectUtils.firstNotNil(popupConfirmProps?.setAsDefault, intlLocales.get([locale, 'setAsDefault']), intlLocales.get(['en_US', 'setAsDefault']))}>
            {(typeof popupAddon === 'function') ? popupAddon() : popupAddon}
        </Tooltip>
    );
    const buildItemAddonDom = (tag: string, before: boolean, elementId: string) => {
        if (before && popupTagPos !== 'before' && popupAddonPos === 'before' && !itemAddonDom) {
            return undefined;
        }
        if (!before && popupTagPos !== 'after' && popupAddonPos === 'after' && !itemAddonDom) {
            return undefined;
        }

        const tagDom = ((before && popupTagPos === 'before') || (!before && popupTagPos === 'after')) ? (
            <span className={classnames(`${clazzPrefix}-locale-tag`, `${clazzPrefix}-locale-tag-${popupTagPos}`)}>
                {tag}
            </span>
        ) : undefined;

        const addon = (!!itemAddonDom && ((before && popupAddonPos === 'before') || (!before && popupAddonPos === 'after'))) ? (
            <If condition={BooleanUtils.isNotFalse(popupConfirmProps?.enabled)} validation={false}>
                <If.Then>
                    <Popconfirm
                        title={ObjectUtils.firstNotNil(popupConfirmProps?.sureSetAsDefault, intlLocales.get([locale, 'sureSetAsDefault']), intlLocales.get(['en_US', 'sureSetAsDefault']))}
                        okText={popupConfirmProps?.ok ?? intlLocales.get([locale, 'ok'])}
                        cancelText={popupConfirmProps?.cancel ?? intlLocales.get([locale, 'cancel'])}
                        disabled={entryImmutable}
                        onConfirm={() => handleSetAsDefault(elementId)}
                        onOpenChange={setConfirmOpen}
                    >
                        <span
                            className={classnames(`${clazzPrefix}-locale-action`, `${clazzPrefix}-locale-action-${popupAddonPos}`)}
                            style={{
                                cursor: entryImmutable ? 'default' : 'pointer',
                            }}
                        >
                            {itemAddonDom}
                        </span>
                    </Popconfirm>
                </If.Then>
                <If.Else>
                    <span
                        className={classnames(`${clazzPrefix}-locale-action`, `${clazzPrefix}-locale-action-${popupAddonPos}`)}
                        style={{
                            cursor: entryImmutable ? 'default' : 'pointer',
                        }}
                        onClick={() => handleSetAsDefault(elementId)}
                    >
                        {itemAddonDom}
                    </span>
                </If.Else>
            </If>
        ) : undefined;

        const nodeCount = [tagDom, addon].filter(object => !!object).length;
        if (nodeCount === 0) {
            return undefined;
        }
        return (
            <Space>
                {tagDom}
                {addon}
            </Space>
        );
    };

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
        const rawName = props?.name ?? props?.fieldProps?.name;
        const clonedRules = cloneItemRules();
        const tagInputs: React.ReactNode[] = [];
        if (props?.popupInputProps) {
            for (const itemProp of props.popupInputProps) {
                if (!itemProp || !itemProp?.tag) {
                    continue;
                }
                const {tag, fieldProps, rules} = itemProp;
                const restProps = omit(itemProp, ['tag', 'name', 'fieldProps', 'proFieldProps', 'rules']);
                const omitFieldProps = !fieldProps ? {} : omit(fieldProps, ['className', 'name', 'id', 'placeholder', 'autoComplete', 'addonBefore', 'addonAfter', 'allowClear', 'variant', 'maxLength', 'showCount', 'size', 'disabled', 'readOnly', 'onCompositionStart', 'onCompositionEnd']);
                const tagId = NanoidUtils.getPopularId();
                const beforeDom = buildItemAddonDom(tag, true, tagId);
                const afterDom = buildItemAddonDom(tag, false, tagId);
                const itemDom = (
                    <AddonInput
                        key={tag}
                        name={rawName ? `${rawName}[${tag}]` : undefined}
                        addonBefore={beforeDom}
                        addonAfter={afterDom}
                        {...restProps}
                        fieldProps={{
                            className: classnames(`${clazzPrefix}-locale-item`, fieldProps?.className),
                            placeholder: StringUtils.join(itemProp?.placeholder) || fieldProps?.placeholder || props?.popupShareProps?.placeholder || (popupCloneProps.placeholder ? (StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder) : undefined),
                            autoComplete: 'off',
                            allowClear: fieldProps?.allowClear || props?.popupShareProps?.allowClear || (popupCloneProps.allowClear ? props?.fieldProps?.allowClear : undefined),
                            maxLength: fieldProps?.maxLength || props?.popupShareProps?.maxLength || (popupCloneProps.maxLength ? props?.fieldProps?.maxLength : undefined),
                            showCount: fieldProps?.showCount || props?.popupShareProps?.showCount || (popupCloneProps.showCount ? props?.fieldProps?.showCount : undefined),
                            size: fieldProps?.size || props?.popupShareProps?.size || (popupCloneProps.size ? props?.fieldProps?.size : undefined),
                            variant: fieldProps?.variant || props?.popupShareProps?.variant || (popupCloneProps.variant ? props?.fieldProps?.variant : undefined),
                            disabled: props.disabled || props?.fieldProps?.disabled || fieldProps?.disabled || entryImmutable,
                            readOnly: props.readonly || props?.fieldProps?.readOnly || fieldProps?.readOnly,
                            onChange: (event: any) => {
                                if (!popupProField && rawName) {
                                    form?.setFieldValue(`${rawName}[${tag}]`, event.target.value);
                                }
                                fieldProps?.onChange?.(event);
                            },
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
                        proField={popupProField}
                        rules={[
                            ...(props?.popupShareProps?.rules ?? []),
                            ...clonedRules,
                            ...(rules ?? []),
                        ]}
                    />
                );
                tagInputs.push(itemDom);
            }
        } else if (!props?.popupInputProps && props?.popupQuickTags) {
            for (const tag of props.popupQuickTags) {
                if (!tag) {
                    continue;
                }
                const tagId = NanoidUtils.getPopularId();
                const beforeDom = buildItemAddonDom(tag, true, tagId);
                const afterDom = buildItemAddonDom(tag, false, tagId);
                const itemDom = (
                    <AddonInput
                        key={tag}
                        name={rawName ? `${rawName}[${tag}]` : undefined}
                        addonBefore={beforeDom}
                        addonAfter={afterDom}
                        fieldProps={{
                            className: `${clazzPrefix}-locale-item`,
                            placeholder: props?.popupShareProps?.placeholder || (popupCloneProps.placeholder ? (StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder) : undefined),
                            autoComplete: 'off',
                            allowClear: props?.popupShareProps?.allowClear || (popupCloneProps.allowClear ? props?.fieldProps?.allowClear : undefined),
                            maxLength: props?.popupShareProps?.maxLength || (popupCloneProps.maxLength ? props?.fieldProps?.maxLength : undefined),
                            showCount: props?.popupShareProps?.showCount || (popupCloneProps.showCount ? props?.fieldProps?.showCount : undefined),
                            size: props?.popupShareProps?.size || (popupCloneProps.size ? props?.fieldProps?.size : undefined),
                            variant: props?.popupShareProps?.variant || (popupCloneProps.variant ? props?.fieldProps?.variant : undefined),
                            disabled: props.disabled || props?.fieldProps?.disabled || entryImmutable,
                            readOnly: props.readonly || props?.fieldProps?.readOnly,
                            onChange: (event: any) => {
                                if (!popupProField && rawName) {
                                    form?.setFieldValue(`${rawName}[${tag}]`, event.target.value);
                                }
                            },
                            onCompositionStart: () => {
                                compositionRef.current = true;
                            },
                            onCompositionEnd: () => {
                                compositionRef.current = false;
                            },
                            'data-locale-input-tag': tagId,
                        }}
                        proField={popupProField}
                        rules={[
                            ...(props?.popupShareProps?.rules || []),
                            ...clonedRules,
                        ]}
                    />
                );
                tagInputs.push(itemDom);
            }
        }
        return (
            <div
                onMouseEnter={() => {
                    // Cancel close when mouse enters popup
                    if (closeTimerRef.current) {
                        clearTimeout(closeTimerRef.current);
                        closeTimerRef.current = null;
                    }
                }}
                onMouseLeave={() => {
                    // Delay close to allow mouse to move back to trigger
                    if (closeTimerRef.current) {
                        clearTimeout(closeTimerRef.current);
                    }
                    closeTimerRef.current = setTimeout(() => {
                        setTriggerOpen(false);
                        props?.triggerProps?.onOpenChange?.(false);
                    }, 200);
                }}
            >
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
            </div>
        );
    };

    const omitTriggerProps = !props?.triggerProps ? {} : omit(props?.triggerProps, ['action', 'builtinPlacements', 'getPopupContainer', 'popupAlign', 'popupClassName', 'stretch', 'onOpenChange']);

    return (
        <Trigger
            action={props?.triggerProps?.action ?? (entryImmutable ? ['hover'] : ['click'])}
            builtinPlacements={props?.triggerProps?.builtinPlacements ?? TriggerUtils.buildPlacements()}
            getPopupContainer={(trigger: HTMLElement) => {
                return props?.triggerProps?.getPopupContainer?.(trigger) || trigger?.parentElement || document.body;
            }}
            popup={buildPopupDom()}
            popupAlign={(props?.triggerProps?.popupPlacement || props?.triggerProps?.popupAlign) ? props?.triggerProps?.popupAlign : {
                points: ['tl', 'bl'],
                offset: [0, triggerOffset],
            }}
            popupClassName={classnames(`${clazzPrefix}-popup`, fieldStyle.hashId, `${clazzPrefix}-popup-${fieldId}`, (!entryImmutable ? undefined : `${clazzPrefix}-popup-immutable`), (popupProField ? `${clazzPrefix}-popup-pro-field` : undefined), props?.triggerProps?.popupClassName)}
            popupVisible={triggerOpen}
            stretch={props?.triggerProps?.stretch ?? 'width'}
            onOpenChange={(open: boolean) => {
                if (!open && (compositionRef.current || confirmOpen)) {
                    return;
                }
                setTriggerOpen(open);
                props?.triggerProps?.onOpenChange?.(open);
            }}
            {...omitTriggerProps}
        >
            <div data-locale-input-entry={fieldId}>
                {buildEntryDom()}
            </div>
        </Trigger>
    );
};
