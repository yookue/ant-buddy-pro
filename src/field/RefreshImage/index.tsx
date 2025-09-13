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
import {Image, type ImageProps} from 'antd';
import {useIntl} from '@ant-design/pro-provider';
import {ImageUtils, NanoidUtils, ObjectUtils} from '@unikue/ts-lang-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {intlLocales} from './intl-locales';
import {useFieldStyle} from './style';


export type IntlLocaleProps = {
    /**
     * @description Click to Refresh
     * @description.zh-CN 点击刷新
     * @description.zh-TW 點擊刷新
     */
    clickToRefresh?: string;
};


export type RefreshImageProps = Omit<ImageProps, 'src' | 'fallback' | 'preview'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-refresh-image'
     */
    clazzPrefix?: string;

    /**
     * @description Whether to change cursor to pointer or not
     * @description.zh-CN 是否手型鼠标指针样式
     * @description.zh-TW 是否手型鼠标指针样式
     * @default true
     */
    handCursor?: boolean;

    /**
     * @description The source of the image
     * @description.zh-CN 图片源
     * @description.zh-TW 圖片源
     */
    src?: string | Promise<string | undefined> | (() => string | undefined | Promise<string | undefined>);

    /**
     * @description The fallback source of the image
     * @description.zh-CN 备用图片源
     * @description.zh-TW 備用圖片源
     */
    fallback?: string | Promise<string | undefined> | (() => string | undefined | Promise<string | undefined>);

    /**
     * @description The callback function when the image is refreshed
     * @description.zh-CN 图片刷新后的回调函数
     * @description.zh-TW 圖片刷新後的回調函數
     */
    onRefresh?: (currentSrc?: string, previousSrc?: string) => void;

    /**
     * @description The locale of the component, e.g. 'en_US'
     * @description.zh-CN 组件的语言, e.g. 'zh_CN'
     * @description.zh-TW 組件的語言, e.g. 'zh_TW'
     */
    locale?: string;

    /**
     * @description The props of locale
     * @description.zh-CN 多语言属性
     * @description.zh-TW 多語言屬性
     */
    localeProps?: IntlLocaleProps;
};


/**
 * Component for displaying an image with refresh capability
 *
 * @author David Hsing
 */
export const RefreshImage: React.FC<RefreshImageProps> = (props?: RefreshImageProps) => {
    const clazzPrefix = props?.clazzPrefix ?? 'abp-refresh-image';
    const intlType = useIntl();

    // Initialize the default props
    const {
        handCursor = true,
        locale = intlType.locale,
    } = props ?? {};

    const [fieldId] = React.useState<string>(NanoidUtils.getPopularId());
    const [imageSrc, setImageSrc] = React.useState<string>();
    const fieldStyle = useFieldStyle(clazzPrefix);

    // noinspection DuplicatedCode
    React.useEffect(() => {
        ImageUtils.detectSource(props?.src, res => setImageSrc(res));
    }, [props?.src]);

    // noinspection DuplicatedCode
    React.useEffect(() => {
        ImageUtils.detectSource(props?.fallback, res => {
            const inspect = document.querySelector<HTMLImageElement>(`.${clazzPrefix}-id-${fieldId}`);
            if (inspect && !inspect.onerror) {
                inspect.setAttribute('onerror', `this.src='${res ?? ''}'`);
            }
        });
    }, [props?.fallback]);

    React.useEffect(() => {
        const inspect = document.querySelector<HTMLImageElement>(`.${clazzPrefix}-id-${fieldId}`);
        if (inspect && (!inspect.src || inspect.src === document.location.href)) {
            inspect.setAttribute('src', '');
        }
    }, [props?.src, props?.fallback]);

    const omitProps = !props ? {} : omit(props, ['className', 'src', 'fallback', 'title', 'onClick', 'clazzPrefix', 'handCursor', 'onRefresh', 'locale', 'localeProps']);

    return (
        <Image
            className={classNames(clazzPrefix, fieldStyle.hashId, (!handCursor ? undefined : `${clazzPrefix}-hand-cursor`), `${clazzPrefix}-id-${fieldId}`, props?.className)}
            preview={false}
            src={`${imageSrc ?? ''}`}
            title={ObjectUtils.firstNotNil(props?.title, props?.localeProps?.clickToRefresh, intlLocales.get([locale, 'clickToRefresh']), intlLocales.get(['en_US', 'clickToRefresh']))}
            {...omitProps}
            onClick={(event: React.MouseEvent<any>) => {
                props?.onClick?.(event);
                const previousSrc = imageSrc;
                ImageUtils.detectSource(props?.src, res => {
                    setImageSrc(res);
                    props?.onRefresh?.(res, previousSrc);
                });
            }}
        />
    );
};
