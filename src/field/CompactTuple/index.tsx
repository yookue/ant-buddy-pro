/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
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
import {ConfigProvider, Space} from 'antd';
import {SpaceCompactProps} from 'antd/es/space/Compact';
import {EditOrReadOnlyContext} from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import classNames from 'classnames';
import {type WithFalse, type BeforeAfterType} from '@/type/declaration';
import './index.less';


export type TuplePresetStyle = WithFalse<'field-prior' | 'addon-prior'>;


export type TupleBorderProps = {
    /**
     * @description Whether to border top or not
     * @description.zh-CN 顶部是否有边框
     * @description.zh-TW 頂部是否有邊框
     */
    borderTop?: boolean;

    /**
     * @description Whether to border right or not
     * @description.zh-CN 右侧是否有边框
     * @description.zh-TW 右側是否有邊框
     */
    borderRight?: boolean;

    /**
     * @description Whether to border bottom or not
     * @description.zh-CN 底部是否有边框
     * @description.zh-TW 底部是否有邊框
     */
    borderBottom?: boolean;

    /**
     * @description Whether to border left or not
     * @description.zh-CN 左侧是否有边框
     * @description.zh-TW 左側是否有邊框
     */
    borderLeft?: boolean;
};


export type CompactTupleProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-compact-tuple'
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
     * @description The border props for the field element
     * @description.zh-CN 字段节点的边框属性
     * @description.zh-TW 字段節點的邊框屬性
     */
    fieldBorderProps?: TupleBorderProps;

    /**
     * @description The addon element
     * @description.zh-CN 附加节点
     * @description.zh-TW 附加節點
     */
    addon?: React.ReactNode | (() => React.ReactNode | undefined);

    /**
     * @description The CSS class name of the addon addon div
     * @description.zh-CN 包裹附加节点 div 的 CSS 类名
     * @description.zh-TW 包裹附加節點 div 的 CSS 類名
     */
    addonClazz?: string;

    /**
     * @description The CSS style of the addon addon div
     * @description.zh-CN 包裹附加节点 div 的 CSS 样式
     * @description.zh-TW 包裹附加節點 div 的 CSS 樣式
     */
    addonStyle?: React.CSSProperties;

    /**
     * @description The border props for the field element
     * @description.zh-CN 附加节点的边框属性
     * @description.zh-TW 附加節點的邊框屬性
     */
    addonBorderProps?: TupleBorderProps;

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
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const editContext = React.useContext(EditOrReadOnlyContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-compact-tuple');

    // Initialize the default props
    const {
        spaceCompactProps = {block: true},
        addonPos = 'after',
        readonlyBorder = false,
        presetStyle = 'field-prior',
    } = props ?? {};

    const buildFieldDom = () => {
        if (!props?.field) {
            return undefined;
        }
        const borderClazz = classNames((!props?.fieldBorderProps?.borderTop ? undefined : `${clazzPrefix}-field-border-top`), (!props?.fieldBorderProps?.borderRight ? undefined : `${clazzPrefix}-field-border-right`), (!props?.fieldBorderProps?.borderBottom ? undefined : `${clazzPrefix}-field-border-bottom`), (!props?.fieldBorderProps?.borderLeft ? undefined : `${clazzPrefix}-field-border-left`));
        return (
            <div className={classNames(`${clazzPrefix}-field`, borderClazz, props?.fieldClazz)} style={props?.fieldStyle}>
                {typeof props.field === 'function' ? props.field() : props.field}
            </div>
        );
    };

    const buildAddonDom = () => {
        if (!props?.addon) {
            return undefined;
        }
        const borderClazz = classNames((!props?.addonBorderProps?.borderTop ? undefined : `${clazzPrefix}-addon-border-top`), (!props?.addonBorderProps?.borderRight ? undefined : `${clazzPrefix}-addon-border-right`), (!props?.addonBorderProps?.borderBottom ? undefined : `${clazzPrefix}-addon-border-bottom`), (!props?.addonBorderProps?.borderLeft ? undefined : `${clazzPrefix}-addon-border-left`));
        return (
            <div className={classNames(`${clazzPrefix}-addon`, borderClazz, props?.addonClazz)} style={props?.addonStyle}>
                {typeof props.addon === 'function' ? props.addon() : props.addon}
            </div>
        );
    };

    return (
        <div
            className={classNames(clazzPrefix, (editContext.mode === 'read' ? `${clazzPrefix}-readonly` : undefined), ((editContext.mode === 'read' && !readonlyBorder) ? `${clazzPrefix}-readonly-borderless` : undefined), (presetStyle ? `${clazzPrefix}-${presetStyle}` : undefined), props?.containerClazz)}
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
