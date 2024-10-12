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
import {ConfigProvider, type BadgeProps, type CheckboxProps, type TooltipProps} from 'antd';
import {LikeOutlined, LikeFilled, DislikeOutlined, DislikeFilled, StarOutlined, StarFilled} from '@ant-design/icons';
import {useIntl} from '@ant-design/pro-provider';
import classNames from 'classnames';
import {type AxisDirectionType} from '@/type/declaration';
import {CountField, type CountFieldRef} from '@/field/CountField';
import {ConsoleUtils} from '@/util/ConsoleUtils';
import {intlLocales} from './intl-locales';
import './index.less';


export type ThumbActionType = 'like' | 'dislike' | 'favorite';


export type ThumbToggleRef = CountFieldRef & {
    isCheckable: () => boolean,
    setCheckable: (checkable: boolean) => void;
    isChecked: () => boolean;
    setChecked: (checked: boolean) => void;
    toggleChecked: () => Promise<void>;
};


export type IntlLocaleProps = {
    /**
     * @description Like
     * @description.zh-CN 喜欢
     * @description.zh-TW 喜歡
     */
    like?: React.ReactNode;

    /**
     * @description Dislike
     * @description.zh-CN 不喜欢
     * @description.zh-TW 不喜歡
     */
    dislike?: React.ReactNode;

    /**
     * @description Favorite
     * @description.zh-CN 收藏
     * @description.zh-TW 收藏
     */
    favorite?: React.ReactNode;
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
     * @description The action type
     * @description.zh-CN 动作类型
     * @description.zh-TW 動作類型
     */
    actionType: ThumbActionType;

    /**
     * @description Whether can checked the icon or not
     * @description.zh-CN 是否可选中图标
     * @description.zh-TW 是否可選中圖標
     * @default false
     */
    checkable?: boolean;

    /**
     * @description The CSS class name of the icon when checked
     * @description.zh-CN 图标选中时的 CSS 类名
     * @description.zh-TW 圖標選中時的 CSS 類名
     */
    checkedClazz?: string;

    /**
     * @description The CSS style of the icon when checked
     * @description.zh-CN 图标选中时的 CSS 样式
     * @description.zh-TW 圖標選中時的 CSS 樣式
     */
    checkedStyle?: React.CSSProperties;

    /**
     * @description The CSS class name of the icon when unchecked
     * @description.zh-CN 图标未选中时的 CSS 类名
     * @description.zh-TW 圖標未選中時的 CSS 類名
     */
    uncheckedClazz?: string;

    /**
     * @description The CSS style of the icon when unchecked
     * @description.zh-CN 图标未选中时的 CSS 样式
     * @description.zh-TW 圖標未選中時的 CSS 樣式
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
    countProps?: Omit<BadgeProps, 'color' | 'count' | 'dot' | 'showZero' | 'size' | 'status' | 'text'>;

    /**
     * @description The layout of the icon and the field
     * @description.zh-CN 图标和内容的布局样式
     * @description.zh-TW 圖標和內容的布局樣式
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
     * @description Whether to use Tooltip
     * @description.zh-CN 是否使用 Tooltip
     * @description.zh-TW 是否使用 Tooltip
     */
    tooltipCtrl?: boolean;

    /**
     * @description The props for Tooltip
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
        showCount = true,
        showZero = true,
    } = props ?? {};

    ConsoleUtils.warn(props?.actionType !== undefined, true, 'ThumbToggle', `Prop 'actionType' must not be undefined`);
    ConsoleUtils.warn(props?.count === undefined || props.count >= 0, true, 'ThumbToggle', `Prop 'count' must be equal or greater than 0`);

    const fieldRef = React.useRef<HTMLDivElement>();
    const countFieldRef = React.useRef<CountFieldRef>(null);
    const [checkable, setCheckable] = React.useState<boolean>(props?.checkable || false);
    const [checked, setChecked] = React.useState<boolean>(props?.checked || props?.defaultChecked || false);

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        isCheckable: (): boolean => {
            return checkable;
        },
        setCheckable: (checkable: boolean): void => {
            setCheckable(checkable);
        },
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
            return countFieldRef.current?.getCount() ?? 0;
        },
        setCount: (count: number): void => {
            countFieldRef.current?.setCount(count);
        },
        increaseCount: (): void => {
            countFieldRef.current?.increaseCount();
        },
        decreaseCount: (): void => {
            countFieldRef.current?.decreaseCount();
        }
    }));

    React.useEffect(() => {
        props?.onChange?.(checked, countFieldRef.current?.getCount());
    }, [checked, countFieldRef.current?.getCount()]);

    const handleToggle = async () => {
        if (props?.onToggle) {
            try {
                const value = await props.onToggle(checked, (countFieldRef.current?.getCount() ?? 0));
                if (typeof value === 'number') {
                    countFieldRef.current?.setCount(value);
                } else if (value === true) {
                    const count = checked ? ((countFieldRef.current?.getCount() ?? 1) - 1) : ((countFieldRef.current?.getCount() ?? 0) + 1);
                    countFieldRef.current?.setCount(Math.max(0, count));
                }
            } catch (ignored) {
            }
        } else {
            const count = checked ? ((countFieldRef.current?.getCount() ?? 1) - 1) : ((countFieldRef.current?.getCount() ?? 0) + 1);
            countFieldRef.current?.setCount(Math.max(0, count));
        }
        setChecked(!checked);
    };

    const buildIconDom = () => {
        let icon = undefined;
        switch (props?.actionType) {
            case 'like':
                icon = checked ? LikeFilled : LikeOutlined;
                break;
            case 'dislike':
                icon = checked ? DislikeFilled : DislikeOutlined;
                break;
            case 'favorite':
                icon = checked ? StarFilled : StarOutlined;
                break;
            default:
                break;
        }
        if (!icon) {
            return undefined;
        }
        return React.createElement(icon, {
            className: classNames(`${clazzPrefix}-icon`, (checked ? props?.checkedClazz : props?.uncheckedClazz)),
            style: checked ? props?.checkedStyle : props?.uncheckedStyle,
            onClick: !checkable ? undefined : async () => handleToggle(),
        });
    };

    const detectIconTooltip = () => {
        switch (props?.actionType) {
            case 'like':
                return props?.localeProps?.like || intlLocales.get([intlType.locale, 'like']) || intlLocales.get(['en_US', 'like']);
            case 'dislike':
                return props?.localeProps?.dislike || intlLocales.get([intlType.locale, 'dislike']) || intlLocales.get(['en_US', 'dislike']);
            case 'favorite':
                return props?.localeProps?.favorite || intlLocales.get([intlType.locale, 'favorite']) || intlLocales.get(['en_US', 'favorite']);
            default:
                return undefined;
        }
    };

    return (
        <div
            ref={(div) => fieldRef.current = div ?? undefined}
            className={classNames(clazzPrefix, (checkable ? `${clazzPrefix}-checkable` : undefined), `${clazzPrefix}-${checked ? 'checked' : 'unchecked'}`, props?.containerClazz)}
            style={props?.containerStyle}
        >
            <CountField
                ref={countFieldRef}
                field={buildIconDom()}
                count={props?.count}
                countProps={props?.countProps}
                layout={props?.layout}
                showCount={showCount}
                showZero={showZero}
                tooltipCtrl={props?.tooltipCtrl}
                tooltipProps={{
                    title: detectIconTooltip(),
                    ...props?.tooltipProps,
                }}
            />
        </div>
    );
});
