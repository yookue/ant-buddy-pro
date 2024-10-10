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
import {ConfigProvider, Badge, Space, Tooltip, type BadgeProps, type TooltipProps} from 'antd';
import {type SpaceSize} from 'antd/es/space';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {type AxisDirectionType} from '@/type/declaration';
import {ConsoleUtils} from '@/util/ConsoleUtils';
import {NodeUtils} from '@/util/NodeUtils';
import './index.less';


export type CountFieldRef = {
    getCount: () => number;
    setCount: (count: number) => void;
    increaseCount: () => void;
    decreaseCount: () => void;
};


export type CountFieldProps = React.PropsWithChildren<{
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-count-field'
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
     * @description The field element
     * @description.zh-CN 字段节点
     * @description.zh-TW 字段節點
     */
    field?: React.ReactNode | (() => React.ReactNode);

    /**
     * @description The thumbs count
     * @description.zh-CN 计数
     * @description.zh-TW 計數
     * @default 0
     */
    count?: number;

    /**
     * @description The props for the count
     * @description.zh-CN 计数的属性
     * @description.zh-TW 計數的屬性
     */
    countProps?: Omit<BadgeProps, 'color' | 'count' | 'dot' | 'showZero' | 'size' | 'status' | 'text'>;

    /**
     * @description The layout of the label and the field
     * @description.zh-CN 标签和内容的布局样式
     * @description.zh-TW 標簽和內容的布局樣式
     */
    layout?: AxisDirectionType;

    /**
     * @description Whether to show the count or not
     * @description.zh-CN 是否显示计数
     * @description.zh-TW 是否顯示計數
     * @default true
     */
    showCount?: boolean;

    /**
     * @description Whether to show the zero count or not
     * @description.zh-CN 是否显示计数 0
     * @description.zh-TW 是否顯示計數 0
     * @default true
     */
    showZero?: boolean;

    /**
     * @description The space size
     * @description.zh-CN 间距大小
     * @description.zh-TW 間距大小
     */
    spaceSize?: SpaceSize;

    /**
     * @description Whether to use tooltip
     * @description.zh-CN 是否使用 Tooltip
     * @description.zh-TW 是否使用 Tooltip
     * @default false
     */
    tooltipCtrl?: boolean;

    /**
     * @description The prop for tooltip
     * @description.zh-CN Tooltip 属性
     * @description.zh-TW Tooltip 屬性
     */
    tooltipProps?: TooltipProps;

    /**
     * @description The callback function when the count changed
     * @description.zh-CN 计数更改后的回调函数
     * @description.zh-TW 計數更改後的回調函數
     */
    onChange?: (count?: number) => void;
}>;


/**
 * Component for displaying a field with a count number
 *
 * @author David Hsing
 */
export const CountField: React.ForwardRefExoticComponent<CountFieldProps & React.RefAttributes<CountFieldRef>> = React.forwardRef((props?: CountFieldProps, ref?: any) => {
    CountField.displayName = 'CountField';

    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-count-field');

    // Initialize the default props
    const {
        layout = 'horizontal',
        showCount = true,
        showZero = true,
        spaceSize = 0,
        tooltipCtrl = false,
    } = props ?? {};

    ConsoleUtils.warn(props?.count === undefined || props.count >= 0, true, 'CountField', `Prop 'count' must be equal or greater than 0`);

    const fieldRef = React.useRef<HTMLDivElement>();
    const [count, setCount] = React.useState<number>(props?.count ?? 0);

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        getCount: (): number => {
            return count;
        },
        setCount: (count: number): void => {
            setCount(Math.max(0, count));
        },
        increaseCount: (): void => {
            setCount(Math.max(0, count + 1));
        },
        decreaseCount: (): void => {
            setCount(Math.max(0, count - 1));
        }
    }));

    React.useEffect(() => {
        props?.onChange?.(count);
    }, [count]);

    const buildFieldDom = () => {
        const content = !props?.field ? props?.children : (typeof props.field === 'function' ? props.field() : props.field);
        const innerDom = !tooltipCtrl ? (
            <span className={`${clazzPrefix}-field-tooltip`} title={NodeUtils.toString(props?.tooltipProps?.title)}>
                {content}
            </span>
        ) : (
            <Tooltip {...props?.tooltipProps}>
                <span className={`${clazzPrefix}-field-tooltip`}>
                    {content}
                </span>
            </Tooltip>
        );
        return (
            <div className={`${clazzPrefix}-field`}>
                {innerDom}
            </div>
        );
    };

    const buildCountDom = () => {
        const omitProps = !props?.countProps ? {} : omit(props.countProps, ['overflowCount']);
        return (!showCount || (count <= 0 && !showZero)) ? undefined : (
            <div className={`${clazzPrefix}-count`}>
                <Badge
                    count={count}
                    showZero={showZero}
                    overflowCount={props?.countProps?.overflowCount ?? 999999999}
                    {...omitProps}
                />
            </div>
        );
    };

    return (
        <div
            ref={(div) => fieldRef.current = div ?? undefined}
            className={classNames(clazzPrefix, props?.containerClazz)}
            style={props?.containerStyle}
        >
            <Space
                className={`${clazzPrefix}-space-${layout}`}
                direction={layout}
                size={spaceSize}
            >
                {buildFieldDom()}
                {buildCountDom()}
            </Space>
        </div>
    );
});