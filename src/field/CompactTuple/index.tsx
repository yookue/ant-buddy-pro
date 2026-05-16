/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
 *
 * Licensed under the MIT License.
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
import { Space } from 'antd';
import { SpaceCompactProps } from 'antd/es/space/Compact';
import { EditOrReadOnlyContext } from '@ant-design/pro-components/es/form/BaseForm/EditOrReadOnlyContext';
import { css } from '@emotion/css';
import classnames from 'classnames';
import { type WithFalse, type BeforeAfterType } from '@/type/declaration';
import { useFieldStyle } from './styles';


export type TuplePresetStyle = WithFalse<'field-prior' | 'addon-prior'>;


export type CompactTupleProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-compact-tuple'
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
     * @description The props of the compact space
     * @description.zh-CN 紧凑间距的属性
     * @description.zh-TW 緊湊間距的屬性
     * @default {block: true}
     */
    spaceCompactProps?: SpaceCompactProps;

    /**
     * @description The field element
     * @description.zh-CN 字段节点
     * @description.zh-TW 字段節點
     */
    field?: React.ReactNode | (() => React.ReactNode | undefined);

    /**
     * @description The CSS class name of the field wrapper div
     * @description.zh-CN 包裹字段节点 div 的 CSS 类名
     * @description.zh-TW 包裹字段節點 div 的 CSS 類名
     */
    fieldClazz?: string;

    /**
     * @description The CSS style of the field wrapper div
     * @description.zh-CN 包裹字段节点 div 的 CSS 样式
     * @description.zh-TW 包裹字段節點 div 的 CSS 樣式
     */
    fieldStyle?: React.CSSProperties;

    /**
     * @description Whether to border the field element or not
     * @description.zh-CN 字段节点是否有边框
     * @description.zh-TW 字段節點是否有邊框
     */
    fieldBorder?: boolean;

    /**
     * @description The addon element
     * @description.zh-CN 附加节点
     * @description.zh-TW 附加節點
     */
    addon?: React.ReactNode | (() => React.ReactNode | undefined);

    /**
     *
     * @description The CSS class name of the addon div
     * @description.zh-CN 包裹附加节点 div 的 CSS 类名
     * @description.zh-TW 包裹附加節點 div 的 CSS 類名
     */
    addonClazz?: string;

    /**
     * @description The CSS style of the addon div
     * @description.zh-CN 包裹附加节点 div 的 CSS 样式
     * @description.zh-TW 包裹附加節點 div 的 CSS 樣式
     */
    addonStyle?: React.CSSProperties;

    /**
     * @description Whether to border the addon element or not
     * @description.zh-CN 附加节点是否有边框
     * @description.zh-TW 附加節點是否有邊框
     */
    addonBorder?: boolean;

    /**
     * @description The margin left of the addon element
     * @description.zh-CN 附加节点的左外边距
     * @description.zh-TW 附加節點的左外邊距
     */
    addonMarginLeft?: boolean | number;

    /**
     * @description The margin right of the addon element
     * @description.zh-CN 附加节点的右外边距
     * @description.zh-TW 附加節點的右外邊距
     */
    addonMarginRight?: boolean | number;

    /**
     * @description The position of addon
     * @description.zh-CN 附属节点位置
     * @description.zh-TW 附属節點位置
     * @default 'after'
     */
    addonPos?: WithFalse<BeforeAfterType>;

    /**
     * @description Whether to render borders when under readonly mode
     * @description.zh-CN 只读模式下是否渲染边框
     * @description.zh-TW 只讀模式下是否渲染邊框
     * @default false
     */
    readonlyBorder?: boolean;

    /**
     * @description Whether to match the width of parent element or not
     * @description.zh-CN 是否匹配父节点的宽度
     * @description.zh-TW 是否匹配父節點的寬度
     */
    widthBlock?: boolean;

    /**
     * @description The preset style of the component
     * @description.zh-CN 预设样式
     * @description.zh-TW 預設樣式
     * @default 'field-prior'
     */
    presetStyle?: TuplePresetStyle;
};


/**
 * Component for displaying a field and an addon under a compact space
 *
 * @author David Hsing
 */
export const CompactTuple: React.FC<CompactTupleProps> = (props?: CompactTupleProps) => {
    const editContext = React.useContext(EditOrReadOnlyContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-compact-tuple';

    // Initialize the default props
    const {
        spaceCompactProps = { block: true },
        addonPos = 'after',
        readonlyBorder = false,
        presetStyle = 'field-prior',
    } = props ?? {};

    const fieldStyle = useFieldStyle(clazzPrefix);

    const buildFieldDom = () => {
        if (!props?.field) {
            return undefined;
        }
        return (
            <div className={classnames(`${clazzPrefix}-field`, (!props?.fieldBorder ? undefined : `${clazzPrefix}-field-border`), props?.fieldClazz)} style={props?.fieldStyle}>
                {(typeof props.field === 'function') ? props.field() : props.field}
            </div>
        );
    };

    const buildAddonDom = () => {
        if (!props?.addon) {
            return undefined;
        }
        const marginClazz = css({
            marginLeft: !props?.addonMarginLeft ? undefined : (typeof props.addonMarginLeft === 'boolean' ? '-1' : props.addonMarginLeft),
            marginRight: !props?.addonMarginRight ? undefined : (typeof props.addonMarginRight === 'boolean' ? '-1' : props.addonMarginRight),
        });
        return (
            <div className={classnames(`${clazzPrefix}-addon`, (!props?.addonBorder ? undefined : `${clazzPrefix}-addon-border`), marginClazz, props?.addonClazz)} style={props?.addonStyle}>
                {(typeof props.addon === 'function') ? props.addon() : props.addon}
            </div>
        );
    };

    return (
        <div
            className={classnames(clazzPrefix, fieldStyle.hashId, (!props?.widthBlock ? undefined : `${clazzPrefix}-width-block`), (addonPos ? `${clazzPrefix}-addon-${addonPos}` : undefined), (editContext.mode === 'read' ? `${clazzPrefix}-readonly` : undefined), ((editContext.mode === 'read' && !readonlyBorder) ? `${clazzPrefix}-readonly-borderless` : undefined), (presetStyle ? `${clazzPrefix}-${presetStyle}` : undefined), props?.containerClazz)}
            style={props?.containerStyle}
        >
            <Space.Compact {...spaceCompactProps}>
                {addonPos === 'before' && buildAddonDom()}
                {buildFieldDom()}
                {addonPos === 'after' && buildAddonDom()}
            </Space.Compact>
        </div>
    );
};
