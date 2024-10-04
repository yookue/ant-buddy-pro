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
import {ConfigProvider, Badge, Tooltip, type BadgeProps, type CheckboxProps, type TooltipProps} from 'antd';
import {LikeFilled, DislikeFilled, LikeOutlined, DislikeOutlined} from '@ant-design/icons';
import {useIntl} from '@ant-design/pro-provider';
import classNames from 'classnames';
import {ConsoleUtils} from '@/util/ConsoleUtils';
import {intlLocales} from './intl-locales';
import './index.less';


export type ThumbDirection = 'up' | 'down';


export type ThumbToggleRef = {
    isChecked: () => boolean;
    setChecked: (checked: boolean) => void;
    toggleChecked: () => Promise<void>;
    getCount: () => number;
    setCount: (count: number) => void;
    increaseCount: () => void;
    decreaseCount: () => void;
};


export type IntlLocaleProps = {
    /**
     * @description Like
     * @description.zh-CN 喜欢
     * @description.zh-TW 喜歡
     */
    like?: string;

    /**
     * @description Dislike
     * @description.zh-CN 不喜欢
     * @description.zh-TW 不喜歡
     */
    dislike?: string;
};


export type ThumbToggleProps = Pick<CheckboxProps, 'checked' | 'defaultChecked'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-thumb-toggle'
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
     * @description Whether can click the thumb or not
     * @description.zh-CN 是否可点击拇指交互
     * @description.zh-TW 是否可點擊拇指交互
     */
    checkable?: boolean;

    /**
     * @description The CSS class name of the icon when checked
     * @description.zh-CN 拇指图标选中时的 CSS 类名
     * @description.zh-TW 拇指圖標選中時的 CSS 類名
     */
    checkedClazz?: string;

    /**
     * @description The CSS style of the icon when checked
     * @description.zh-CN 拇指图标选中时的 CSS 样式
     * @description.zh-TW 拇指圖標選中時的 CSS 樣式
     */
    checkedStyle?: React.CSSProperties;

    /**
     * @description The CSS class name of the icon when unchecked
     * @description.zh-CN 拇指图标未选中时的 CSS 类名
     * @description.zh-TW 拇指圖標未選中時的 CSS 類名
     */
    uncheckedClazz?: string;

    /**
     * @description The CSS style of the icon when unchecked
     * @description.zh-CN 拇指图标未选中时的 CSS 样式
     * @description.zh-TW 拇指圖標未選中時的 CSS 樣式
     */
    uncheckedStyle?: React.CSSProperties;

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
    countProps?: Omit<BadgeProps, 'count' | 'showZero'>;

    /**
     * @description The direction of the thumb
     * @description.zh-CN 拇指的方向
     * @description.zh-TW 拇指的方向
     * @default 'up'
     */
    direction?: ThumbDirection;

    /**
     * @description Whether to show the count or not
     * @description.zh-CN 是否显示计数
     * @description.zh-TW 是否顯示計數
     * @default true
     */
    showCount?: boolean;

    /**
     * @description Whether to show the zero count or not
     * @description.zh-CN 是否显示为 0 的计数
     * @description.zh-TW 是否顯示為 0 的計數
     * @default true
     */
    showZero?: boolean;

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
    tooltipProps?: Omit<TooltipProps, 'title'>;

    /**
     * @description The callback function when the checked state or count changed
     * @description.zh-CN 选中状态或计数更改后的回调函数
     * @description.zh-TW 選中狀態或計數更改後的回調函數
     */
    onChange?: (checked?: boolean, count?: number) => void;

    /**
     * @description The trigger function for updating the count
     * @description.zh-CN 计数的触发更新函数
     * @description.zh-TW 計數的觸發更新函數
     */
    onToggle?: (checked?: boolean, count?: number) => boolean | number | void | Promise<boolean | number | void>;

    /**
     * @description The props for locale
     * @description.zh-CN 多语言属性
     * @description.zh-TW 多語言屬性
     */
    localeProps?: IntlLocaleProps;
};


/**
 * Component for displaying a thumb with toggle capability
 *
 * @author David Hsing
 */
export const ThumbToggle: React.ForwardRefExoticComponent<ThumbToggleProps & React.RefAttributes<ThumbToggleRef>> = React.forwardRef((props?: ThumbToggleProps, ref?: any) => {
    ThumbToggle.displayName = 'ThumbToggle';

    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-thumb-toggle');
    const intlType = useIntl();

    // Initialize the default props
    const {
        direction = 'up',
        showCount = true,
        showZero = true,
        tooltipCtrl = false,
    } = props ?? {};

    ConsoleUtils.warn(props?.count === undefined || props.count >= 0, true, 'ThumbToggle', `Prop 'count' must be equal or greater than 0`);

    const fieldRef = React.useRef<HTMLDivElement>();
    const [checked, setChecked] = React.useState<boolean>(props?.checked || props?.defaultChecked || false);
    const [count, setCount] = React.useState<number>(props?.count ?? (checked ? 1 : 0));

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        isChecked: (): boolean => {
            return checked;
        },
        setChecked: (checked: boolean): void => {
            setChecked(checked);
        },
        toggleChecked: async (): Promise<void> => {
            await handleToggle();
        },
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
        props?.onChange?.(checked, count);
    }, [checked, count]);

    const handleToggle = async () => {
        if (props?.onToggle) {
            try {
                const value = await props.onToggle(checked, count);
                if (typeof value === 'number') {
                    setCount(value);
                } else if (value === true) {
                    setCount(Math.max(0, (checked ? ((count ?? 1) - 1) : ((count ?? 0) + 1))));
                }
            } catch (ignored) {
            }
        } else {
            setCount(Math.max(0, (checked ? ((count ?? 1) - 1) : ((count ?? 0) + 1))));
        }
        setChecked(!checked);
    };

    const buildIconDom = () => {
        const icon = (direction === 'up') ? (checked ? LikeFilled : LikeOutlined) : (checked ? DislikeFilled : DislikeOutlined);
        return React.createElement(icon, {
            className: classNames(`${clazzPrefix}-icon-${direction}`, (checked ? props?.checkedClazz : props?.uncheckedClazz)),
            style: checked ? props?.checkedStyle : props?.uncheckedStyle,
            onClick: !props?.checkable ? undefined : async () => handleToggle(),
        });
    };

    const buildIconWrap = () => {
        const like = intlLocales.get([intlType.locale, 'like']) || intlLocales.get(['en_US', 'like']);
        const dislike = intlLocales.get([intlType.locale, 'dislike']) || intlLocales.get(['en_US', 'dislike']);
        if (!tooltipCtrl) {
            return (
                <span title={direction === 'up' ? (props?.localeProps?.like ?? like) : (props?.localeProps?.dislike ?? dislike)}>
                    {buildIconDom()}
                </span>
            );
        }
        return (
            <Tooltip
                title={direction === 'up' ? (props?.localeProps?.like ?? like) : (props?.localeProps?.dislike ?? dislike)}
                {...props?.tooltipProps}
            >
                {buildIconDom()}
            </Tooltip>
        );
    };

    const buildTextDom = () => {
        return (!showCount || (count <= 0 && !showZero)) ? undefined : (
            <Badge
                className={`${clazzPrefix}-count`}
                count={count}
                showZero={showZero}
                {...props?.countProps}
            />
        );
    };

    return (
        <div
            ref={(div) => fieldRef.current = div ?? undefined}
            className={classNames(clazzPrefix, (props?.checkable ? `${clazzPrefix}-checkable` : undefined), `${clazzPrefix}-${checked ? 'checked' : 'unchecked'}`, props?.containerClazz)}
            style={props?.containerStyle}
        >
            {buildIconWrap()}
            {buildTextDom()}
        </div>
    );
});
