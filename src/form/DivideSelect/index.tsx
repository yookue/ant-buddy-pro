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
import {Select} from 'antd';
import {FormContext} from 'antd/es/form/context';
import {ProFormSelect} from '@ant-design/pro-form';
import {type ProFormSelectProps} from '@ant-design/pro-form/es/components/Select';
import {type RequestOptionsType} from '@ant-design/pro-utils';
import {useDebounceFn} from '@ant-design/pro-utils';
import {If} from '@unikue/react-condition';
import {ObjectUtils, StringUtils} from '@unikue/ts-lang-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {type WithFalse, type LabelMixinType, type RequestOptionPlace} from '@/type/declaration';
import {FieldUtils} from '@/util/FieldUtils';
import {useFieldStyle} from './style';


export type DividePresetStyle = WithFalse<'before-prior' | 'after-prior'>;


export type DivideSelectProps = Omit<ProFormSelectProps, 'children'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-divide-select'
     */
    clazzPrefix?: string;

    /**
     * @description The CSS class name of the select option div
     * @description.zh-CN 下拉选项 div 的 CSS 类名
     * @description.zh-TW 下拉選項 div 的 CSS 類名
     */
    optionClazz?: string;

    /**
     * @description The CSS style of the option item div
     * @description.zh-CN 下拉选项 div 的 CSS 样式
     * @description.zh-TW 下拉選項 div 的 CSS 樣式
     */
    optionStyle?: React.CSSProperties;

    /**
     * @description The CSS class name of the option item before
     * @description.zh-CN 下拉选项左侧 span 的 CSS 类名
     * @description.zh-TW 下拉選項左側 span 的 CSS 類名
     */
    optionBeforeClazz?: string;

    /**
     * @description The CSS style of the option item before
     * @description.zh-CN 下拉选项左侧 span 的 CSS 样式
     * @description.zh-TW 下拉選項左側 span 的 CSS 樣式
     */
    optionBeforeStyle?: React.CSSProperties;

    /**
     * @description The content of the option item before
     * @description.zh-CN 下拉选项左侧 span 的内容
     * @description.zh-TW 下拉選項左側 span 的内容
     * @default 'label'
     */
    optionBeforeContent?: WithFalse<LabelMixinType>;

    /**
     * @description The render of the option item before
     * @description.zh-CN 下拉选项左侧 span 的渲染方法
     * @description.zh-TW 下拉選項左側 span 的渲染方法
     */
    optionBeforeRender?: (dom?: React.ReactNode) => React.ReactNode | undefined;

    /**
     * @description The CSS class name of the option item after
     * @description.zh-CN 下拉选项右侧 span 的 CSS 类名
     * @description.zh-TW 下拉選項右側 span 的 CSS 類名
     */
    optionAfterClazz?: string;

    /**
     * @description The CSS style of the option item after
     * @description.zh-CN 下拉选项右侧 span 的 CSS 样式
     * @description.zh-TW 下拉選項右側 span 的 CSS 樣式
     */
    optionAfterStyle?: React.CSSProperties;

    /**
     * @description The content of the option item after
     * @description.zh-CN 下拉选项右侧 span 的内容
     * @description.zh-TW 下拉選項右側 span 的内容
     * @default 'value'
     */
    optionAfterContent?: WithFalse<LabelMixinType>;

    /**
     * @description The render of the option item after
     * @description.zh-CN 下拉选项右侧 span 的渲染方法
     * @description.zh-TW 下拉選項右側 span 的渲染方法
     */
    optionAfterRender?: (dom?: React.ReactNode) => React.ReactNode | undefined;

    /**
     * @description Whether to keep the `options` or `valueEnum` data when using the `request` data
     * @description.zh-CN 使用 `request` 数据的同时，是否保留 `options` 或 `valueEnum` 数据
     * @description.zh-TW 使用 `request` 數據的同時，是否保留 `options` 或 `valueEnum` 數據
     */
    requestOptionPlace?: WithFalse<RequestOptionPlace>;

    /**
     * @description Whether to use ProFormField instead of Antd
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     * @default true
     */
    proField?: boolean;

    /**
     * @description The preset style of the component
     * @description.zh-CN 预设样式
     * @description.zh-TW 預設樣式
     * @default 'before-prior'
     */
    presetStyle?: DividePresetStyle;
};


/**
 * Component for displaying a select box with the capability that displaying the label and value of options into two parts
 *
 * @author David Hsing
 */
export const DivideSelect: React.FC<DivideSelectProps> = (props?: DivideSelectProps) => {
    const formContext = React.useContext(FormContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-divide-select';

    // Initialize the default props
    const {
        optionBeforeContent = 'label',
        optionAfterContent = 'value',
        proField = true,
        presetStyle = 'before-prior',
    } = props ?? {};

    const fieldStyle = useFieldStyle(clazzPrefix);

    // noinspection DuplicatedCode
    const [optionItems, setOptionItems] = React.useState<any[] | undefined>(() => {
        const rawOptions = props?.fieldProps?.options ?? [];
        const enumOptions = FieldUtils.valueEnumToSelectOptions(props?.valueEnum) ?? [];
        return [...rawOptions, ...enumOptions];
    });

    if (props?.request && props?.requestOptionPlace !== false) {
        const {run} = useDebounceFn(props.request, props?.debounceTime ?? 0);
        React.useEffect(() => {
            run(props?.params).then((values?: RequestOptionsType[]) => {
                // noinspection DuplicatedCode
                if (!values) {
                    if (props?.requestOptionPlace === 'override') {
                        setOptionItems(undefined);
                    }
                    return;
                }
                if (props?.requestOptionPlace === undefined || props?.requestOptionPlace === 'override') {
                    setOptionItems(values);
                } else if (props?.requestOptionPlace === 'before') {
                    setOptionItems([...values, ...(optionItems ?? [])]);
                } else if (props?.requestOptionPlace === 'after') {
                    setOptionItems([...(optionItems ?? []), ...values]);
                }
            }).catch(() => {});
        }, []);
    }

    const renderContent = (item: any, before: boolean) => {
        if (!item) {
            return undefined;
        }
        const label = ObjectUtils.getProp(item, props?.fieldProps?.fieldNames?.label) ?? item?.data?.label;
        const value = ObjectUtils.getProp(item, props?.fieldProps?.fieldNames?.value) ?? item?.data?.value;
        const code = ObjectUtils.getProp(item?.data, 'code');
        if (before) {
            if (optionBeforeContent !== 'label' && item?.optionType === 'optGroup') {
                return undefined;
            }
            // const content: React.ReactNode = (optionBeforeContent === 'value') ? value : label;
            let content: React.ReactNode = undefined;
            switch (optionBeforeContent) {
                case 'label':
                    content = label;
                    break;
                case 'value':
                    content = value;
                    break;
                case 'code':
                    content = code;
                    break;
                default:
                    break;
            }
            return props?.optionBeforeRender ? props?.optionBeforeRender(content) : content;
        } else {
            if (optionAfterContent !== 'label' && item?.optionType === 'optGroup') {
                return undefined;
            }
            // const content: React.ReactNode = (optionAfterContent === 'value') ? value : label;
            let content: React.ReactNode = undefined;
            switch (optionAfterContent) {
                case 'label':
                    content = label;
                    break;
                case 'value':
                    content = value;
                    break;
                case 'code':
                    content = code;
                    break;
                default:
                    break;
            }
            return props?.optionAfterRender ? props?.optionAfterRender(content) : content;
        }
    };

    const renderOption = (item: any, key?: string) => {
        return !item ? undefined : (
            <div key={key ?? item?.data?.value} className={classNames(`${clazzPrefix}-option`, props?.optionClazz, (presetStyle ? `${clazzPrefix}-${presetStyle}` : undefined))} style={props?.optionStyle}>
                <If condition={optionBeforeContent} validation={false}>
                    <span key={`${key ?? item?.data?.value}-before`} className={classNames(`${clazzPrefix}-option-before`, props?.optionBeforeClazz)} style={props?.optionBeforeStyle}>
                        {renderContent(item, true)}
                    </span>
                </If>
                <If condition={optionAfterContent} validation={false}>
                    <span key={`${key ?? item?.data?.value}-after`} className={classNames(`${clazzPrefix}-option-after`, props?.optionAfterClazz)} style={props?.optionAfterStyle}>
                        {renderContent(item, false)}
                    </span>
                </If>
            </div>
        )
    };

    if (proField) {
        const restProps = !props ? {} : omit(props, ['fieldProps', 'proFieldProps', 'request', 'valueEnum', 'clazzPrefix', 'optionClazz', 'optionStyle', 'optionBeforeClazz', 'optionBeforeStyle', 'optionBeforeContent', 'optionAfterClazz', 'optionAfterStyle', 'optionAfterContent', 'requestOptionPlace', 'proField', 'presetStyle']);
        const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['classNames', 'options', 'optionRender', 'optionLabelProp']);
        return (
            <ProFormSelect
                {...restProps}
                fieldProps={{
                    classNames: {
                        root: classNames(clazzPrefix, props?.fieldProps?.classNames?.root),
                        popup: {
                            root: classNames(`${clazzPrefix}-popup`, fieldStyle.hashId, props?.fieldProps?.classNames?.popup?.root),
                        }
                    },
                    options: optionItems,
                    optionRender: (item) => renderOption(item),
                    optionLabelProp: props?.fieldProps?.optionLabelProp ?? 'label',
                    ...omitFieldProps,
                }}
                proFieldProps={{
                    ...((props?.fieldProps?.optionLabelProp === (props?.fieldProps?.fieldNames?.value ?? 'value')) ? {
                        render: props?.proFieldProps?.render ?? ((dom: any) => {
                            return (<>{dom || props?.proFieldProps?.emptyText || '-'}</>);
                        })
                    } : (!props?.proFieldProps?.render ? {} : {render: props?.proFieldProps?.render})),
                    ...(!props?.proFieldProps ? {} : omit(props?.proFieldProps, ['render'])),
                }}
            />
        );
    } else {
        const rebuildOptions = () => {
            if (!optionItems) {
                return undefined;
            }
            return optionItems.map((item: any, index: number) => {
                if (!item) {
                    return undefined;
                }
                const itemOptions = ObjectUtils.getProp(item, props?.fieldProps?.fieldNames?.options) ?? item?.options;
                if (itemOptions && Array.isArray(itemOptions)) {
                    const newOptions = itemOptions.map((subItem: any, subIndex: number) => {
                        if (!subItem) {
                            return undefined;
                        }
                        const subOptions = {};
                        ObjectUtils.setProp(subOptions, (props?.fieldProps?.fieldNames?.label ?? 'label'), renderOption(subItem, `group-${index}-option-${subIndex}`));
                        ObjectUtils.setProp(subOptions, `${props?.fieldProps?.fieldNames?.label ?? 'label'}Origin`, (ObjectUtils.getProp(subItem, props?.fieldProps?.fieldNames?.label) ?? subItem?.label));
                        ObjectUtils.setProp(subOptions, (props?.fieldProps?.fieldNames?.value ?? 'value'), (ObjectUtils.getProp(subItem, props?.fieldProps?.fieldNames?.value) ?? subItem?.value));
                        return subOptions;
                    });
                    const result = {
                        ...omit(item, (item?.optionType === 'optGroup') ? ['options', 'value', 'optionType', 'children'] : ['options']),
                    };
                    ObjectUtils.setProp(result, `${props?.fieldProps?.fieldNames?.label ?? 'label'}Origin`, (ObjectUtils.getProp(item, props?.fieldProps?.fieldNames?.label) ?? item?.label));
                    ObjectUtils.setProp(result, (props?.fieldProps?.fieldNames?.options ?? 'options'), newOptions);
                    return result;
                }
                const result = {
                    ...omit(item, (item?.optionType === 'optGroup') ? ['label', 'value', 'optionType', 'children'] : ['label']),
                };
                ObjectUtils.setProp(result, (props?.fieldProps?.fieldNames?.label ?? 'label'), renderOption(item, `option-${index}`));
                ObjectUtils.setProp(result, `${props?.fieldProps?.fieldNames?.label ?? 'label'}Origin`, (ObjectUtils.getProp(item, props?.fieldProps?.fieldNames?.label) ?? item?.label));
                if (item?.optionType === 'optGroup' && item?.children) {
                    ObjectUtils.setProp(result, 'options', item.children);
                }
                return result;
            });
        };

        const omitFieldProps = !props?.fieldProps ? {} : omit(props.fieldProps, ['classNames', 'id', 'placeholder', 'options', 'optionLabelProp', 'searchOnFocus', 'resetAfterSelect', 'fetchDataOnSearch', 'optionRender', 'onChange']);

        return (
            <Select
                classNames={{
                    root: classNames(clazzPrefix, props?.fieldProps?.classNames?.root),
                    popup: {
                        root: classNames(`${clazzPrefix}-popup`, fieldStyle.hashId, props?.fieldProps?.classNames?.popup?.root),
                    }
                }}
                id={(!formContext?.name ? '' : `${formContext.name}_`) + (props?.name ?? '')}
                placeholder={StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder}
                options={(!presetStyle ? optionItems : rebuildOptions()) ?? []}
                optionLabelProp={(!props?.fieldProps?.optionLabelProp || props.fieldProps.optionLabelProp === 'label') ? 'labelOrigin' : (props?.fieldProps?.optionLabelProp ?? 'value')}
                onChange={(event: any) => {
                    if (props?.name) {
                        formContext?.form?.setFieldValue(props.name, event.target.value);
                    }
                    props?.fieldProps?.onChange?.(event);
                }}
                {...omitFieldProps}
            />
        );
    }
};
