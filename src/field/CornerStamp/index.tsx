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
import {ConfigProvider, type BadgeProps, type SelectProps} from 'antd';
import {type SelectCommonPlacement} from 'antd/es/_util/motion';
import {isPresetColor} from 'antd/es/badge/utils';
import {presetPrimaryColors} from '@ant-design/colors';
import {css} from '@emotion/css';
import {StringUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import {ConsoleUtils} from '@/util/ConsoleUtils';
import './index.less';


export type StampPlacement = SelectCommonPlacement;


export type CornerStampProps = React.PropsWithChildren<{
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-corner-stamp'
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
     * @description The addon element inside stamp
     * @description.zh-CN 角标里的附加节点
     * @description.zh-TW 角標裏的附加節點
     */
    addon?: React.ReactNode | (() => React.ReactNode);

    /**
     * @description The CSS class name of the addon wrapper div
     * @description.zh-CN 包裹角标附加节点 div 的 CSS 类名
     * @description.zh-TW 包裹角標附加節點 div 的 CSS 類名
     */
    addonClazz?: string;

    /**
     * @description The CSS style of the addon wrapper div
     * @description.zh-CN 包裹角标附加节点 div 的 CSS 样式
     * @description.zh-TW 包裹角標附加節點 div 的 CSS 樣式
     */
    addonStyle?: React.CSSProperties;

    /**
     * @description Whether to rotate the addon element inside the stamp
     * @description.zh-CN 是否旋转角标里的附加节点
     * @description.zh-TW 是否旋轉角標裏的附加節點
     * @default true
     */
    rotateAddon?: boolean;

    /**
     * @description The side length of the component
     * @description.zh-CN 组件的边长
     * @description.zh-TW 組件的邊長
     * @default 16
     */
    size?: number;

    /**
     * @description The z-index of the component
     * @description.zh-CN 组件的 Z 轴堆叠顺序
     * @description.zh-TW 組件的 Z 軸堆疊順序
     * @default 9
     */
    zIndex?: number;
}> & Pick<BadgeProps, 'color'> & Pick<SelectProps, 'placement'>;


/**
 * Component for displaying a corner mask
 *
 * @author David Hsing
 */
export const CornerStamp: React.FC<CornerStampProps> = (props?: CornerStampProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-corner-stamp');

    // Initialize the default props
    const {
        color = 'green',
        placement = 'topRight',
        rotateAddon = true,
        size = 16,
        zIndex = 9,
    } = props ?? {};

    ConsoleUtils.warn(size > 0, true, 'CornerStamp',  `Prop 'size' must be greater than 0`);

    const bgColor = !isPresetColor(color) ? color : presetPrimaryColors[color];

    const buildCornerClazz = () => {
        let result = undefined;
        switch (placement) {
            case 'topLeft':
                result = {
                    '::before': {
                        top: 0,
                        left: 0,
                        borderTopColor: bgColor,
                        borderTopWidth: `${size}px !important`,
                        borderRightColor: 'transparent',
                        borderRightWidth: `${size}px !important`,
                        borderBottomColor: 'transparent',
                        borderLeftColor: 'transparent',
                        zIndex: zIndex,
                    }
                };
                break;
            case 'topRight':
                result = {
                    '::before': {
                        top: 0,
                        right: 0,
                        borderTopColor: bgColor,
                        borderTopWidth: `${size}px !important`,
                        borderRightColor: 'transparent',
                        borderBottomColor: 'transparent',
                        borderLeftColor: 'transparent',
                        borderLeftWidth: `${size}px !important`,
                        zIndex: zIndex,
                    }
                };
                break;
            case 'bottomLeft':
                result = {
                    '::before': {
                        bottom: 0,
                        left: 0,
                        borderTopColor: 'transparent',
                        borderRightColor: 'transparent',
                        borderRightWidth: `${size}px !important`,
                        borderBottomColor: bgColor,
                        borderBottomWidth: `${size}px !important`,
                        borderLeftColor: 'transparent',
                        zIndex: zIndex,
                    }
                };
                break;
            case 'bottomRight':
                result = {
                    '::before': {
                        bottom: 0,
                        right: 0,
                        borderTopColor: 'transparent',
                        borderRightColor: 'transparent',
                        borderBottomColor: bgColor,
                        borderBottomWidth: `${size}px !important`,
                        borderLeftColor: 'transparent',
                        borderLeftWidth: `${size}px !important`,
                        zIndex: zIndex,
                    }
                };
                break;
            default:
                break;
        }
        return !result ? undefined : css(result);
    };

    const buildFieldDom = () => {
        return (
            <div className={classNames(`${clazzPrefix}-field`, buildCornerClazz(), props?.fieldClazz)} style={props?.fieldStyle}>
                {!props?.field ? props?.children : (typeof props.field === 'function' ? props.field() : props.field)}
            </div>
        );
    };

    const buildAddonRectClazz = () => {
        const ratio = 1/3;
        let diffProps = {};
        switch (placement) {
            case 'topLeft':
                diffProps = {
                    top: `-${size * ratio}px`,
                    left: `-${size * ratio}px`,
                };
                break;
            case 'topRight':
                diffProps = {
                    top: `-${size * ratio}px`,
                    right: `-${size * ratio}px`,
                };
                break;
            case 'bottomLeft':
                diffProps = {
                    bottom: `-${size * ratio}px`,
                    left: `-${size * ratio}px`,
                };
                break;
            case 'bottomRight':
                diffProps = {
                    bottom: `-${size * ratio}px`,
                    right: `-${size * ratio}px`,
                };
                break;
            default:
                break;
        }
        return css({
            width: `${size + size * ratio}px`,
            height: `${size + size * ratio}px`,
            zIndex: zIndex + 1,
            ...diffProps,
        });
    };

    const buildAddonRotateClazz = () => {
        const rotation = (placement === 'topLeft' || placement === 'bottomRight') ? -45 : 45;
        const hypotenuse = Math.sqrt(Math.pow(size, 2) * 2);
        const perpendicular = size * size / hypotenuse;
        let rectCenter: [number, number];
        let stampCenter: [number, number];
        let diffProps = {};
        switch (placement) {
            case 'topLeft':
                rectCenter = [hypotenuse / 2, -perpendicular / 2];
                stampCenter = [size / 3, -size / 3];
                diffProps = {
                    left: `${stampCenter[0] - rectCenter[0]}px`,
                    top: `${rectCenter[1] - stampCenter[1]}px`,
                };
                break;
            case 'topRight':
                rectCenter = [-hypotenuse / 2, -perpendicular / 2];
                stampCenter = [-size / 3, -size / 3];
                diffProps = {
                    right: `${rectCenter[0] - stampCenter[0]}px`,
                    top: `${rectCenter[1] - stampCenter[1]}px`,
                };
                break;
            case 'bottomLeft':
                rectCenter = [hypotenuse / 2, perpendicular / 2];
                stampCenter = [size / 3, size / 3];
                diffProps = {
                    left: `${stampCenter[0] - rectCenter[0]}px`,
                    bottom: `${rectCenter[1] - stampCenter[1]}px`,
                };
                break;
            case 'bottomRight':
                rectCenter = [-hypotenuse / 2, perpendicular / 2];
                stampCenter = [-size / 3, size / 3];
                diffProps = {
                    right: `${rectCenter[0] - stampCenter[0]}px`,
                    bottom: `${rectCenter[1] - stampCenter[1]}px`,
                };
                break;
            default:
                break;
        }
        return css({
            width: `${hypotenuse}px`,
            height: `${perpendicular}px`,
            transform: `rotate(${rotation}deg)`,
            zIndex: zIndex + 1,
            ...diffProps,
        });
    };

    const buildAddonDom = () => {
        if (!props?.addon) {
            return undefined;
        }
        const extraClazz = rotateAddon ? buildAddonRotateClazz() : buildAddonRectClazz();
        return (
            <div className={classNames(`${clazzPrefix}-addon`, (rotateAddon ? `${clazzPrefix}-addon-rotate` : undefined), extraClazz, props?.addonClazz)} style={props?.addonStyle}>
                {typeof props.addon === 'function' ? props.addon() : props.addon}
            </div>
        );
    };

    return (
        <div
            className={classNames(clazzPrefix, `${clazzPrefix}-${StringUtils.toKebabCase(placement)}`, props?.containerClazz)}
            style={props?.containerStyle}
        >
            {buildFieldDom()}
            {buildAddonDom()}
        </div>
    );
};
