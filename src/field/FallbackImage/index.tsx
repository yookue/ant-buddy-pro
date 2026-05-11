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
import {omit} from '@rc-component/util';
import {ImageUtils, NanoidUtils} from '@unikue/ts-lang-utils';
import classnames from 'classnames';


export type FallbackImageProps = Omit<ImageProps, 'src' | 'fallback'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-fallback-image'
     */
    clazzPrefix?: string;

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
};


/**
 * Component for displaying an image with fallback capability
 *
 * @author David Hsing
 */
export const FallbackImage: React.FC<FallbackImageProps> = (props?: FallbackImageProps) => {
    const clazzPrefix = props?.clazzPrefix ?? 'abp-fallback-image';

    // noinspection DuplicatedCode
    const [fieldId] = React.useState<string>(NanoidUtils.getPopularId());
    const [imageSrc, setImageSrc] = React.useState<string>();
    const [imageFallback, setImageFallback] = React.useState<string>();

    React.useEffect(() => {
        ImageUtils.detectSource(props?.src, res => setImageSrc(res));
    }, [props?.src]);

    React.useEffect(() => {
        ImageUtils.detectSource(props?.fallback, res => setImageFallback(res));
    }, [props?.fallback]);

    React.useEffect(() => {
        const inspect = document.querySelector<HTMLImageElement>(`.${clazzPrefix}-${fieldId}`);
        if (inspect && (!inspect.src || inspect.src === document.location.href)) {
            inspect.setAttribute('src', '');
        }
    }, [props?.src, props?.fallback]);

    const omitProps = !props ? {} : omit(props, ['className', 'clazzPrefix', 'src', 'fallback']);

    return (
        <Image
            className={classnames(clazzPrefix, `${clazzPrefix}-${fieldId}`, props?.className)}
            src={imageSrc}
            fallback={imageFallback}
            {...omitProps}
        />
    );
};
