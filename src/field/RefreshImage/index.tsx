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
import {ConfigProvider, Image, type ImageProps} from 'antd';
import {ImageUtils, NanoidUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';


export type RefreshImageProps = Omit<ImageProps, 'src' | 'fallback' | 'preview'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-refresh-image'
     */
    clazzPrefix?: string;

    /**
     * @description Whether to change the cursor style or not
     * @description.zh-CN 是否改变鼠标指针样式
     * @description.zh-TW 是否改变鼠标指针样式
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
};


/**
 * Component for displaying an image with refresh capability
 *
 * @author David Hsing
 */
export const RefreshImage: React.FC<RefreshImageProps> = (props?: RefreshImageProps) => {
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-refresh-image');

    // noinspection DuplicatedCode
    const [fieldId] = React.useState<string>(NanoidUtils.getPopularId());
    const [imageSrc, setImageSrc] = React.useState<string>();

    React.useEffect(() => {
        ImageUtils.detectSource(props?.src, res => setImageSrc(res));
    }, [props?.src]);

    React.useEffect(() => {
        ImageUtils.detectSource(props?.fallback, res => {
            const inspect = document.querySelector<HTMLImageElement>(`.${clazzPrefix}-id-${fieldId}`);
            if (inspect && !inspect.onerror) {
                inspect.setAttribute('onerror', `this.src='${res}'`);
            }
        });
    }, [props?.fallback]);

    const handleClick = (event: React.MouseEvent<any>) => {
        props?.onClick?.(event);
        const previousSrc = imageSrc;
        ImageUtils.detectSource(props?.src, res => {
            setImageSrc(res);
            props?.onRefresh?.(previousSrc, res);
        });
    };

    const omitProps = !props ? {} : omit(props, ['className', 'clazzPrefix', 'handCursor', 'src', 'fallback', 'style', 'onRefresh', 'onClick']);

    return (
        <Image
            className={classNames(clazzPrefix, `${clazzPrefix}-id-${fieldId}`, props?.className)}
            preview={false}
            src={imageSrc ?? `error-image-placeholder?timestamp=${Date.now()}`}
            {...omitProps}
            style={{
                ...(!props?.handCursor ? {} : {cursor: 'pointer'}),
                ...props?.style,
            }}
            onClick={handleClick}
        />
    );
};
