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
import {Input, type TabsProps, type FormRule} from 'antd';
import {type TextAreaProps, type TextAreaRef} from 'antd/es/input/TextArea';
import {ProFormTextArea} from '@ant-design/pro-form';
import {type ProFormFieldItemProps} from '@ant-design/pro-form/es/typing';
import {EditOrReadOnlyContext} from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import {useIntl} from '@ant-design/pro-provider';
import {If} from '@yookue/react-condition';
import {NanoidUtils, ObjectUtils, StringUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {type WithFalse, type ReadonlyTabsType, type RuleValidateScope} from '@/type/declaration';
import {CardTabs, type CardTabsProps} from '@/layout/CardTabs';
import {PropUtils} from '@/util/PropUtils';
import {intlLocales} from './intl-locales';
import {useFieldStyle} from './style';


export type MixinTabsProps = Omit<CardTabsProps, 'activeKey' | 'addIcon' | 'defaultActiveKey' | 'hideAdd' | 'items' | 'onEdit' | 'children'> & {
    /**
     * @description The type of the tabs
     * @description.zh-CN 标签页的类型
     * @description.zh-TW 標簽頁的類型
     */
    type?: ReadonlyTabsType;
};


export type SwitchTextareaProps = ProFormFieldItemProps<TextAreaProps, TextAreaRef> & {
    /**
     * @description The locale language tag
     * @description.zh-CN 语言标签
     * @description.zh-TW 語言標簽
     */
    tag: string;
};


export type SwitchCloneProps = {
    /**
     * @description Whether to use the same placeholder as the entry field for the locale items
     * @description.zh-CN 语言输入项使用与默认输入项相同的占位符
     * @description.zh-TW 語言輸入項使用與默認輸入項相同的占位符
     */
    placeholder?: boolean;

    /**
     * @description Whether to use the same rows as the entry field for the locale items
     * @description.zh-CN 语言输入项使用与默认输入项相同的行数
     * @description.zh-TW 語言輸入項使用與默認輸入項相同的行數
     */
    rows?: boolean;

    /**
     * @description Whether to use the same allowClear as the entry field for the locale items
     * @description.zh-CN 语言输入项使用与默认输入项相同的允许清除
     * @description.zh-TW 語言輸入項使用與默認輸入項相同的允許清除
     */
    allowClear?: boolean;

    /**
     * @description Whether to use the same autoSize as the entry field for the locale items
     * @description.zh-CN 语言输入项使用与默认输入项相同的自动大小
     * @description.zh-TW 語言輸入項使用與默認輸入項相同的自動大小
     */
    autoSize?: boolean;

    /**
     * @description Whether to use the same variant as the entry field for the locale items
     * @description.zh-CN 语言输入项使用与默认输入项相同的允许边框
     * @description.zh-TW 語言輸入項使用與默認輸入項相同的允許邊框
     */
    variant?: boolean;

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
     * @description The validate rules of the locale items from the entry field
     * @description.zh-CN 语言输入项使用的默认输入项的校验规则范围
     * @description.zh-TW 語言輸入項使用的默認輸入項的校驗規則範圍
     */
    rules?: WithFalse<RuleValidateScope>;
};


export type SwitchShareProps = {
    /**
     * @description The validation rules for locales
     * @description.zh-CN 语言输入项的校验规则
     * @description.zh-TW 語言輸入項的校驗規則
     */
    rules?: FormRule[];
} & Pick<TextAreaProps, 'placeholder' | 'rows' | 'allowClear' | 'autoSize' | 'variant' | 'maxLength' | 'showCount'>;


export type IntlLocaleProps = {
    /**
     * @description Default
     * @description.zh-CN 默认
     * @description.zh-TW 搜索
     */
    default?: string;
};


export type LocaleTextareaProps = Omit<ProFormFieldItemProps<TextAreaProps, TextAreaRef>, 'children'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-locale-textarea'
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
     * @description The properties of the tabs
     * @description.zh-CN 标签页的属性
     * @description.zh-TW 標簽頁的屬性
     */
    tabsProps?: MixinTabsProps;

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
     * @description The props of locale
     * @description.zh-CN 多语言属性
     * @description.zh-TW 多語言屬性
     */
    localeProps?: IntlLocaleProps;

    /**
     * @description The properties of locale items (Higher priority than `switchQuickTags`, more customizations)
     * @description.zh-CN 多语言输入项的属性(比 `switchQuickTags` 优先级高，更多自定义)
     * @description.zh-TW 多語言輸入項的屬性(比 `switchQuickTags` 優先級高，更多自定義)
     */
    switchTextareaProps?: SwitchTextareaProps[];

    /**
     * @description The tag of locale items (Lower priority than `popupTextAreaProps`, more convenient)
     * @description.zh-CN 多语言输入项的名称(比 `popupTextAreaProps` 优先级低，更简单快捷)
     * @description.zh-TW 多語言輸入項的名稱(比 `popupTextAreaProps` 優先級低，更簡單快捷)
     */
    switchQuickTags?: string[];

    /**
     * @description The sharing properties of the locale items
     * @description.zh-CN 语言输入项的通用属性
     * @description.zh-TW 語言輸入項的通用屬性
     */
    switchShareProps?: SwitchShareProps;

    /**
     * @description The clone properties of the locale items
     * @description.zh-CN 语言输入项的克隆属性
     * @description.zh-TW 語言輸入項的克隆屬性
     */
    switchCloneProps?: SwitchCloneProps;

    /**
     * @description Whether to use ProFormField instead of Antd for the locale items
     * @description.zh-CN 语言输入项是否使用 ProFormField 控件
     * @description.zh-TW 語言輸入項是否使用 ProFormField 控件
     * @default true
     */
    switchProField?: boolean;
};


/**
 * Component for displaying a textarea with a tabs that can switch different locales
 *
 * @author David Hsing
 */
export const LocaleTextarea: React.FC<LocaleTextareaProps> = (props?: LocaleTextareaProps) => {
    const editContext = React.useContext(EditOrReadOnlyContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-locale-textarea';
    const subClazzPrefix = props?.tabsProps?.clazzPrefix ?? 'abp-card-tabs';
    const intlType = useIntl();

    // Initialize the default props
    const {
        multilingual = true,
        proField = true,
        locale = intlType.locale,
        switchCloneProps = {
            placeholder: true,
            rows: true,
            allowClear: true,
            autoSize: true,
            variant: true,
            maxLength: true,
            showCount: true,
            rules: 'optional',
        },
        switchProField = true,
    } = props ?? {};

    const [fieldId] = React.useState<string>(NanoidUtils.getPopularId());
    const fieldStyle = useFieldStyle(clazzPrefix, subClazzPrefix);

    const buildEntryDom = () => {
        const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['className']);
        if (proField) {
            const restProps = !props ? {} : omit(props, ['fieldProps', 'clazzPrefix', 'containerClazz', 'containerStyle', 'tabsProps', 'multilingual', 'proField', 'locale', 'localeProps', 'switchTextareaProps', 'switchQuickTags', 'switchShareProps', 'switchCloneProps', 'switchProField']);
            return (
                <ProFormTextArea
                    {...restProps}
                    fieldProps={{
                        className: classNames(clazzPrefix, `${clazzPrefix}-pro-field`, props?.fieldProps?.className),
                        ...omitFieldProps,
                        // @ts-ignore
                        'data-locale-textarea-id': fieldId,
                    }}
                />
            )
        } else {
            const restProps = PropUtils.pickForwardProps(props);
            return (
                <Input.TextArea
                    className={classNames(clazzPrefix, props?.fieldProps?.className)}
                    {...restProps}
                    {...omitFieldProps}
                    data-locale-textarea-id={fieldId}
                />
            );
        }
    };

    if (!multilingual || (!props?.switchTextareaProps && !props?.switchQuickTags)) {
        return buildEntryDom();
    }

    const cloneItemRules = () => {
        if (!props?.rules || !switchCloneProps.rules) {
            return [];
        }
        switch (switchCloneProps.rules) {
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

    const buildSwitchItems = () => {
        const rawName = props?.name ?? props?.fieldProps?.name;
        const rawId = props?.id ?? props?.fieldProps?.id;
        const clonedRules = cloneItemRules();
        const result: TabsProps['items'] = [];
        if (props?.switchTextareaProps) {
            for (const itemProp of props.switchTextareaProps) {
                if (!itemProp || !itemProp?.tag) {
                    continue;
                }
                const {tag, fieldProps, rules} = itemProp;
                const restProps = omit(itemProp, ['tag', 'name', 'fieldProps', 'rules']);
                const omitFieldProps = !fieldProps ? {} : omit(fieldProps, ['className', 'name', 'id', 'placeholder', 'allowClear', 'autoSize', 'variant', 'maxLength', 'showCount', 'disabled', 'readOnly']);
                const itemDom = (
                    <If condition={switchProField} validation={false}>
                        <If.Then>
                            <ProFormTextArea
                                name={rawName ? `${rawName}[${tag}]` : undefined}
                                {...restProps}
                                fieldProps={{
                                    className: classNames(`${clazzPrefix}-item`, `${clazzPrefix}-item-pro-field`, fieldProps?.className),
                                    id: rawId ? `${rawId}[${tag}]` : (rawName ? `${rawName}[${tag}]` : undefined),
                                    placeholder: StringUtils.join(itemProp?.placeholder) || fieldProps?.placeholder || props?.switchShareProps?.placeholder || (switchCloneProps.placeholder ? (StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder) : undefined),
                                    rows: fieldProps?.rows || props?.switchShareProps?.rows || (switchCloneProps.rows ? props?.fieldProps?.rows : undefined),
                                    allowClear: fieldProps?.allowClear || props?.switchShareProps?.allowClear || (switchCloneProps.allowClear ? props?.fieldProps?.allowClear : undefined),
                                    autoSize: fieldProps?.autoSize || props?.switchShareProps?.autoSize || (switchCloneProps.autoSize ? props?.fieldProps?.autoSize : undefined),
                                    maxLength: fieldProps?.maxLength || props?.switchShareProps?.maxLength || (switchCloneProps.maxLength ? props?.fieldProps?.maxLength : undefined),
                                    showCount: fieldProps?.showCount || props?.switchShareProps?.showCount || (switchCloneProps.showCount ? props?.fieldProps?.showCount : undefined),
                                    disabled: props.disabled || props?.fieldProps?.disabled || fieldProps?.disabled,
                                    readOnly: props.readonly || props?.fieldProps?.readOnly || fieldProps?.readOnly,
                                    variant: fieldProps?.variant || props?.switchShareProps?.variant || (switchCloneProps.variant ? props?.fieldProps?.variant : undefined),
                                    ...omitFieldProps,
                                }}
                                rules={[
                                    ...(props?.switchShareProps?.rules ?? []),
                                    ...clonedRules,
                                    ...(rules ?? []),
                                ]}
                            />
                        </If.Then>
                        <If.Else>
                            <Input.TextArea
                                className={classNames(`${clazzPrefix}-item`, fieldProps?.className)}
                                name={rawName ? `${rawName}[${tag}]` : undefined}
                                id={rawId ? `${rawId}[${tag}]` : (rawName ? `${rawName}[${tag}]` : undefined)}
                                placeholder={StringUtils.join(itemProp?.placeholder) || fieldProps?.placeholder || props?.switchShareProps?.placeholder || (switchCloneProps.placeholder ? (StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder) : undefined)}
                                rows={fieldProps?.rows || props?.switchShareProps?.rows || (switchCloneProps.rows ? props?.fieldProps?.rows : undefined)}
                                allowClear={fieldProps?.allowClear || props?.switchShareProps?.allowClear || (switchCloneProps.allowClear ? props?.fieldProps?.allowClear : undefined)}
                                autoSize={fieldProps?.autoSize || props?.switchShareProps?.autoSize || (switchCloneProps.autoSize ? props?.fieldProps?.autoSize : undefined)}
                                maxLength={fieldProps?.maxLength || props?.switchShareProps?.maxLength || (switchCloneProps.maxLength ? props?.fieldProps?.maxLength : undefined)}
                                showCount={fieldProps?.showCount || props?.switchShareProps?.showCount || (switchCloneProps.showCount ? props?.fieldProps?.showCount : undefined)}
                                disabled={props.disabled || props?.fieldProps?.disabled || fieldProps?.disabled}
                                readOnly={props.readonly || props?.fieldProps?.readOnly || fieldProps?.readOnly}
                                variant={fieldProps?.variant || props?.switchShareProps?.variant || (switchCloneProps.variant ? props?.fieldProps?.variant : undefined)}
                                {...omitFieldProps}
                            />
                        </If.Else>
                    </If>
                );
                result.push({
                    key: itemProp.tag,
                    label: itemProp.tag,
                    children: itemDom,
                });
            }
        } else if (!props?.switchTextareaProps && props?.switchQuickTags) {
            for (const tag of props.switchQuickTags) {
                if (!tag) {
                    continue;
                }
                const itemDom = (
                    <If condition={switchProField} validation={false}>
                        <If.Then>
                            <ProFormTextArea
                                name={rawName ? `${rawName}[${tag}]` : undefined}
                                fieldProps={{
                                    className: classNames(`${clazzPrefix}-item`, `${clazzPrefix}-item-pro-field`),
                                    id: rawId ? `${rawId}[${tag}]` : (rawName ? `${rawName}[${tag}]` : undefined),
                                    placeholder: props?.switchShareProps?.placeholder || (switchCloneProps.placeholder ? (StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder) : undefined),
                                    rows: props?.switchShareProps?.rows || (switchCloneProps.rows ? props?.fieldProps?.rows : undefined),
                                    allowClear: props?.switchShareProps?.allowClear || (switchCloneProps.allowClear ? props?.fieldProps?.allowClear : undefined),
                                    autoSize: props?.switchShareProps?.autoSize || (switchCloneProps.autoSize ? props?.fieldProps?.autoSize : undefined),
                                    maxLength: props?.switchShareProps?.maxLength || (switchCloneProps.maxLength ? props?.fieldProps?.maxLength : undefined),
                                    showCount: props?.switchShareProps?.showCount || (switchCloneProps.showCount ? props?.fieldProps?.showCount : undefined),
                                    disabled: props.disabled || props?.fieldProps?.disabled,
                                    readOnly: props.readonly || props?.fieldProps?.readOnly,
                                    variant: props?.switchShareProps?.variant || (switchCloneProps.variant ? props?.fieldProps?.variant : undefined),
                                }}
                                rules={[
                                    ...(props?.switchShareProps?.rules || []),
                                    ...clonedRules,
                                ]}
                            />
                        </If.Then>
                        <If.Else>
                            <Input.TextArea
                                className={`${clazzPrefix}-item`}
                                name={rawName ? `${rawName}[${tag}]` : undefined}
                                id={rawId ? `${rawId}[${tag}]` : (rawName ? `${rawName}[${tag}]` : undefined)}
                                placeholder={props?.switchShareProps?.placeholder || (switchCloneProps.placeholder ? (StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder) : undefined)}
                                rows={props?.switchShareProps?.rows || (switchCloneProps.rows ? props?.fieldProps?.rows : undefined)}
                                allowClear={props?.switchShareProps?.allowClear || (switchCloneProps.allowClear ? props?.fieldProps?.allowClear : undefined)}
                                autoSize={props?.switchShareProps?.autoSize || (switchCloneProps.autoSize ? props?.fieldProps?.autoSize : undefined)}
                                maxLength={props?.switchShareProps?.maxLength || (switchCloneProps.maxLength ? props?.fieldProps?.maxLength : undefined)}
                                showCount={props?.switchShareProps?.showCount || (switchCloneProps.showCount ? props?.fieldProps?.showCount : undefined)}
                                disabled={props.disabled || props?.fieldProps?.disabled}
                                readOnly={props.readonly || props?.fieldProps?.readOnly}
                                variant={props?.switchShareProps?.variant || (switchCloneProps.variant ? props?.fieldProps?.variant : undefined)}
                            />
                        </If.Else>
                    </If>
                );
                result.push({
                    key: tag,
                    label: tag,
                    children: itemDom,
                });
            }
        }
        return result;
    };

    const entryImmutable = editContext.mode === 'read' || props?.disabled || props?.fieldProps?.disabled || props?.fieldProps?.readOnly || props?.proFieldProps?.mode === 'read' || props?.readonly || props?.proFieldProps?.readonly;
    const omitTabsProps = !props?.tabsProps ? {} : omit(props.tabsProps, ['contentBorder', 'size', 'presetStyle']);

    return (
        <div
            className={classNames(`${clazzPrefix}-container`, fieldStyle.hashId, (entryImmutable ? `${clazzPrefix}-immutable` : undefined), props?.containerClazz)}
            style={props?.containerStyle}
        >
            <CardTabs
                items={[
                    {
                        key: 'default',
                        label: ObjectUtils.firstNotNil(props?.localeProps?.default, intlLocales.get([locale, 'default']), intlLocales.get(['en_US', 'default'])),
                        children: buildEntryDom(),
                    },
                    ...buildSwitchItems(),
                ]}
                size={props?.tabsProps?.size ?? 'extra-small'}
                contentBorder={props?.tabsProps?.contentBorder ?? false}
                presetStyle={props?.tabsProps?.presetStyle ?? 'padding-0'}
                {...omitTabsProps}
            />
        </div>
    );
};
