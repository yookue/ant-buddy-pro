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
import {ConfigProvider, Avatar, type AvatarProps} from 'antd';
import {css} from '@emotion/css';
import {StringUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {type RectZenithPlace} from '@/type/declaration';
import {useStyles} from './style';


export type AvatarStampProps = AvatarProps & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-avatar-stamp'
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
     * @description The addon element
     * @description.zh-CN 附加节点
     * @description.zh-TW 附加節點
     */
    addon?: React.ReactNode | (() => React.ReactNode | undefined);

    /**
     * @description The CSS class name of the addon wrapper div
     * @description.zh-CN 包裹附加节点 div 的 CSS 类名
     * @description.zh-TW 包裹附加節點 div 的 CSS 類名
     */
    addonClazz?: string;

    /**
     * @description The CSS style of the addon wrapper div
     * @description.zh-CN 包裹附加节点 div 的 CSS 样式
     * @description.zh-TW 包裹附加節點 div 的 CSS 樣式
     */
    addonStyle?: React.CSSProperties;

    /**
     * @description The offset of the addon wrapper div, in pixels
     * @description.zh-CN 包裹附加节点 div 的偏移, 单位像素
     * @description.zh-TW 包裹附加節點 div 的偏移，單位像素
     */
    offset?: [number, number];

    /**
     * @description The placement of the stamp
     * @description.zh-CN 角标的位置
     * @description.zh-TW 角標的位置
     * @default 'bottomRight'
     */
    placement?: RectZenithPlace;
};


/**
 * Component for displaying an avatar with a corner stamp
 *
 * @author David Hsing
 */
export const AvatarStamp: React.FC<AvatarStampProps> = (props?: AvatarStampProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-avatar-stamp');

    // Initialize the default props
    const {
        placement = 'bottomRight',
    } = props ?? {};

    const buildAddonCss = () => {
        let result = undefined;
        switch (placement) {
            case 'topLeft':
                result = {
                    top: `${props?.offset?.[1] ?? 0}px`,
                    left: `${props?.offset?.[0] ?? 0}px`,
                };
                break;
            case 'topRight':
                result = {
                    top: `${props?.offset?.[1] ?? 0}px`,
                    right: `${props?.offset?.[0] ?? 0}px`,
                };
                break;
            case 'bottomLeft':
                result = {
                    bottom: `${props?.offset?.[1] ?? 0}px`,
                    left: `${props?.offset?.[0] ?? 0}px`,
                };
                break;
            case 'bottomRight':
                result = {
                    bottom: `${props?.offset?.[1] ?? 0}px`,
                    right: `${props?.offset?.[0] ?? 0}px`,
                };
                break;
            default:
                break;
        }
        return !result ? undefined : css(result);
    };

    const buildAddonDom = () => {
        if (!props?.addon) {
            return undefined;
        }
        return (
            <div className={classNames(`${clazzPrefix}-addon`, buildAddonCss(), props?.addonClazz)} style={props?.addonStyle}>
                {(typeof props?.addon === 'function') ? props.addon() : props?.addon}
            </div>
        );
    };

    const {styles: meshStyles, cx: meshClazz} = useStyles(clazzPrefix);
    const omitAvatarProps = !props ? {} : omit(props, ['clazzPrefix', 'containerClazz', 'containerStyle', 'addon', 'addonClazz', 'addonStyle', 'offset', 'placement']);

    return (
        <div
            className={meshClazz(clazzPrefix, `${clazzPrefix}-${StringUtils.toKebabCase(placement)}`, meshStyles, props?.containerClazz)}
            style={props?.containerStyle}
        >
            <Avatar {...omitAvatarProps}/>
            {buildAddonDom()}
        </div>
    );
};
