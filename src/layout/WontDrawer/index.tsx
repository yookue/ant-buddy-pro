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
import {ConfigProvider, Drawer, type DrawerProps} from 'antd';
import {nanoid} from '@ant-design/pro-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {type BeforeAfterType} from '@/type/declaration';
import './index.less';


export type WontDrawerProps = DrawerProps & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-wont-drawer'
     */
    clazzPrefix?: string;

    /**
     * @description The position of the close icon
     * @description.zh-CN 关闭按钮的位置
     * @description.zh-TW 關閉按鈕的位置
     * @default 'after'
     */
    closeIconPos?: BeforeAfterType;
};


/**
 * Component for displaying a drawer with the close icon on the right side which accord with operating habits
 *
 * @author David Hsing
 */
export const WontDrawer: React.FC<WontDrawerProps> = (props?: WontDrawerProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-wont-drawer');

    // Initialize the default props
    const {
        closeIconPos = 'after',
    } = props ?? {};

    const entryId = nanoid().replace(/-/g, '');

    if (props?.closable !== false && closeIconPos === 'after' && props?.open) {
        // noinspection DuplicatedCode
        React.useLayoutEffect(() => {
            const selector = `.${clazzPrefix}-id-${entryId} > .${configContext.getPrefixCls('drawer-content-wrapper')} > .${configContext.getPrefixCls('drawer-content')} > .${configContext.getPrefixCls('drawer-wrapper-body')} > .${configContext.getPrefixCls('drawer-header')}`;
            const header = document.querySelector<HTMLDivElement>(`${selector}`);
            const button = document.querySelector<HTMLButtonElement>(`${selector} .${configContext.getPrefixCls('drawer-close')}`);
            if (header && button) {
                button.parentNode?.removeChild(button);
                header.appendChild(button);
            }
        }, []);
    }

    const omitProps = !props ? {} : omit(props, ['className', 'clazzPrefix', 'closeIconPos']);

    return (
        <Drawer
            className={classNames(`${clazzPrefix}`, (closeIconPos === 'after' ? `${clazzPrefix}-close-after` : undefined), `${clazzPrefix}-id-${entryId}`, props?.className)}
            {...omitProps}
        />
    );
};
