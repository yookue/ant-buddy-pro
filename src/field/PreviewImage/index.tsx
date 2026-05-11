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
import {Image} from 'antd';
import {ImagePreviewType} from 'antd/lib/image';
import {omit} from '@rc-component/util';
import {ImageUtils, NanoidUtils} from '@unikue/ts-lang-utils';
import classNames from 'classnames';


export type PreviewImageProps = Omit<ImagePreviewType, 'src'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-preview-image'
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
 * Component for displaying a preview image with fallback capability
 *
 * @author David Hsing
 */
export const PreviewImage: React.FC<PreviewImageProps> = (props?: PreviewImageProps) => {
    const clazzPrefix = props?.clazzPrefix ?? 'abp-preview-image';

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

    const omitProps = !props ? {} : omit(props, ['clazzPrefix', 'src', 'fallback']);

    return (
        <Image
            className={classNames(clazzPrefix, `${clazzPrefix}-${fieldId}`)}
            width={0}
            height={0}
            preview={{
                src: imageSrc,
                // @ts-ignore
                fallback: imageFallback,
                ...omitProps,
            }}
            rootClassName={classNames(`${clazzPrefix}-preview`, `${clazzPrefix}-preview-${fieldId}`, props?.rootClassName)}
            style={{
                display: 'none',
            }}
        />
    );
};
