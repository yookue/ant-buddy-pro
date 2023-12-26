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
import {ConfigProvider, Select} from 'antd';
import {ProFormSelect} from '@ant-design/pro-form';
import {type ProFormSelectProps} from '@ant-design/pro-form/es/components/Select';
import {useDebounceFn} from '@ant-design/pro-utils';
import {If} from '@yookue/react-condition';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {DesignConst} from '@/constant/DesignConst';
import './index.less';


export type DivideSelectProps = ProFormSelectProps & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-divide-select'
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
    optionBeforeContent?: 'label' | 'value' | false;

    /**
     * @description The render of the option item before
     * @description.zh-CN 下拉选项左侧 span 的渲染方法
     * @description.zh-TW 下拉選項左側 span 的渲染方法
     */
    optionBeforeRender?: (origin: React.ReactNode) => React.ReactNode;

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
    optionAfterContent?: 'label' | 'value' | false;

    /**
     * @description The render of the option item after
     * @description.zh-CN 下拉选项右侧 span 的渲染方法
     * @description.zh-TW 下拉選項右側 span 的渲染方法
     */
    optionAfterRender?: (origin: React.ReactNode) => React.ReactNode;

    /**
     * @description Whether to use the original label when `optionLabelProp` is 'label' and `proField` is false
     * @description.zh-CN 当 `optionLabelProp` 为 'label' 且 `proField` 为 false 时，是否使用原始的标签值
     * @description.zh-TW 當 `optionLabelProp` 為 'label' 且 `proField` 為 false 時，是否使用原始的標簽值
     * @default true
     */
    selectOriginLabel?: boolean;

    /**
     * @description Whether to use ProFormField instead of Input
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     * @default true
     */
    proField?: boolean;

    /**
     * @description Whether to use the preset style for the component
     * @description.zh-CN 组件是否使用预设样式
     * @description.zh-TW 組件是否使用預設樣式
     * @default 'before-prior'
     */
    usePresetStyle?: 'before-prior' | 'after-prior' | '10-90' | '20-80' | '30-70' | '40-60' | '50-50' | '60-40' | '70-30' | '80-20' | '90-10' | false;
};


export const DivideSelect: React.FC<DivideSelectProps> = (props?: DivideSelectProps) => {
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix || 'buddy-divide-select');

    const emptyRequest = async () => [];
    const {run: fetchRequestData} = useDebounceFn(props?.request || emptyRequest, props?.debounceTime || 0);

    const renderContent = (item: any, before: boolean) => {
        if (!item) {
            return undefined;
        }
        if (before) {
            const content: React.ReactNode = (props?.optionBeforeContent === 'value') ? item?.value : item?.label;
            return props?.optionBeforeRender ? props?.optionBeforeRender(content) : content;
        } else {
            const content: React.ReactNode = (props?.optionAfterContent === 'value') ? item?.value : item?.label;
            return props?.optionAfterRender ? props?.optionAfterRender(content) : content;
        }
    };

    const renderOption = (item: any, key?: string) => {
        return !item ? undefined : (
            <div key={key || item?.value} className={classNames(`${clazzPrefix}-option`, props?.optionClazz, (props?.usePresetStyle ? `${clazzPrefix}-${props?.usePresetStyle}` : undefined))} style={props?.optionStyle}>
                <If condition={props?.optionBeforeContent} validation={false}>
                    <span key={`${key || item?.value}-before`} className={classNames(`${clazzPrefix}-option-before`, props?.optionBeforeClazz)} style={props?.optionBeforeStyle}>
                        {renderContent(item, true)}
                    </span>
                </If>
                <If condition={props?.optionAfterContent} validation={false}>
                    <span key={`${key || item?.value}-after`} className={classNames(`${clazzPrefix}-option-after`, props?.optionAfterClazz)} style={props?.optionAfterStyle}>
                        {renderContent(item, false)}
                    </span>
                </If>
            </div>
        )
    };

    if (props?.proField) {
        const restProps = props ? omit(props, ['clazzPrefix', 'className', 'optionClazz', 'optionStyle', 'optionBeforeClazz', 'optionBeforeStyle', 'optionBeforeContent', 'optionAfterClazz', 'optionAfterStyle', 'optionAfterContent', 'fieldProps', 'selectOriginLabel', 'proField', 'usePresetStyle', 'mode']) : {};
        const omitFieldProps = props?.fieldProps ? omit(props?.fieldProps, ['className', 'optionItemRender']) : {};

        return (
            <ProFormSelect
                {...restProps}
                fieldProps={{
                    className: classNames(clazzPrefix, props?.className),
                    ...omitFieldProps,
                    optionItemRender: (item) => renderOption(item),
                }}
            />
        );
    } else {
        const [optionItems, setOptionItems] = React.useState<any[]>();

        React.useEffect(() => {
            if (props?.fieldProps?.options) {
                setOptionItems(props?.fieldProps?.options);
            } else {
                if (props?.request) {
                    fetchRequestData(props?.params).then(resolve => {
                        setOptionItems(resolve);
                    });
                }
            }
        }, []);

        const rebuildOptions = () => {
            if (!optionItems) {
                return [];
            }
            if (!props?.usePresetStyle) {
                return optionItems;
            }
            return optionItems.map((item: any, index: number) => {
                if (!item) {
                    return undefined;
                }
                if (item?.options && Array.isArray(item?.options)) {
                    return {
                        labelOrigin: item?.label,
                        options: item?.options?.map((subItem: any, subIndex: number) => {
                            return !subItem ? undefined : {
                                label: renderOption(subItem, `group-${index}-option-${subIndex}`),
                                labelOrigin: subItem?.label,
                                value: subItem?.value,
                            };
                        }),
                        ...(omit(item, ['options']) || {})
                    };
                }
                return {
                    label: renderOption(item, `option-${index}`),
                    ...(omit(item, ['label']) || {})
                };
            });
        };

        // @ts-ignore
        const restProps = props ? omit(props, ['clazzPrefix', 'className', 'optionClazz', 'optionStyle', 'optionBeforeClazz', 'optionBeforeStyle', 'optionBeforeContent', 'optionAfterClazz', 'optionAfterStyle', 'optionAfterContent', 'fieldProps', 'selectOriginLabel', 'proField', 'usePresetStyle', 'mode', 'showSearch', 'request', 'params', 'debounceTime', 'valueEnum', ...DesignConst.ProFormFieldItemProps, ...DesignConst.ProFieldSelectProps]) : {};
        const omitFieldProps = props?.fieldProps ? omit(props?.fieldProps, ['className', 'options', 'optionLabelProp', 'searchOnFocus', 'resetAfterSelect', 'fetchDataOnSearch', 'optionItemRender']) : {};

        return (
            <Select
                className={classNames(clazzPrefix, props?.className)}
                {...restProps}
                {...omitFieldProps}
                options={rebuildOptions()}
                optionLabelProp={(props?.selectOriginLabel && props?.fieldProps?.optionLabelProp === 'label') ? 'labelOrigin' : (props?.fieldProps?.optionLabelProp || 'value')}
            />
        );
    }
};


DivideSelect.defaultProps = {
    optionBeforeContent: 'label',
    optionAfterContent: 'value',
    selectOriginLabel: true,
    proField: true,
    usePresetStyle: 'before-prior',
};
