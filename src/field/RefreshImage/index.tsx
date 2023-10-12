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
import RcImage, {type ImageProps} from 'rc-image';
import omit from 'rc-util/lib/omit';
import {ImageUtils} from '@/util/ImageUtils';


export type RefreshImageProps = Omit<ImageProps, 'src' | 'fallback'> & {
    /**
     * @description Whether to change the cursor automatically
     * @description.zh-CN 是否自动改变鼠标指针样式
     * @description.zh-TW 是否自动改变鼠标指针样式
     */
    autoCursor?: boolean;

    /**
     * @description The source of the image
     * @description.zh-CN 图片源
     * @description.zh-TW 圖片源
     */
    src?: string | Promise<string | undefined> | (() => string | undefined | Promise<string | undefined>);

    /**
     * @description The fallback source of the image
     * @description.zh-CN 图片出错后的备用源
     * @description.zh-TW 圖片出錯後的備用源
     */
    fallback?: string | (() => string | undefined);

    /**
     * @description The callback function when the image is refreshed
     * @description.zh-CN 图片刷新后的回调函数
     * @description.zh-TW 圖片刷新後的回調函數
     */
    onRefresh?: (previousSrc?: string, currentSrc?: string) => void;
}

export const RefreshImage: React.FC<RefreshImageProps> = (props?: RefreshImageProps) => {
    const [imageSource, SetImageSource] = React.useState<string | undefined>(() => {
        return ImageUtils.detectSource(props?.src, data => SetImageSource(data));
    });

    const handleClick = (event: React.MouseEvent<any>) => {
        const previousSrc = imageSource;
        if (props?.src) {
            SetImageSource(ImageUtils.detectSource(props?.src, data => SetImageSource(data)));
        }
        const currentSrc = imageSource;
        if (typeof props?.onClick === 'function') {
            props?.onClick(event);
        }
        if (typeof props?.onRefresh === 'function') {
            props?.onRefresh(previousSrc, currentSrc);
        }
    };

    const handleError = (event: React.SyntheticEvent<any>) => {
        if (props?.fallback) {
            SetImageSource(ImageUtils.detectSource(props?.fallback, data => SetImageSource(data)));
        }
        if (typeof props?.onError === 'function') {
            props?.onError(event);
        }
    };

    const omitProps = props ? omit(props, ['autoCursor', 'src', 'fallback', 'onRefresh', 'onClick', 'onError', 'style']) : {};
    const styles = props?.autoCursor ? {cursor: 'pointer'} : {};

    return (
        <RcImage
            {...omitProps}
            src={imageSource}
            onClick={event => handleClick(event)}
            onError={event => handleError(event)}
            style={{
                ...styles,
                ...props?.style,
            }}
        />
    );
};
