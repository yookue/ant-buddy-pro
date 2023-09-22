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


export type FallbackImageProps = Omit<ImageProps, 'src'> & {
    /**
     * @description The source of the image
     * @description.zh-CN 图片源
     * @description.zh-TW 圖片源
     */
    src?: string | (() => string);

    /**
     * @description The fallback source of the image
     * @description.zh-CN 图片出错后的备用源
     * @description.zh-TW 圖片出錯後的備用源
     */
    fallbackSrc?: string | (() => string);
}

export const FallbackImage: React.FC<FallbackImageProps> = (props?: FallbackImageProps) => {
    const [imageSource, SetImageSource] = React.useState<string | undefined>(() => {
        return typeof props?.src === 'function' ? props?.src() : props?.src;
    });

    const handleError = (event: React.SyntheticEvent<any>) => {
        if (props?.fallbackSrc) {
            SetImageSource(typeof props?.fallbackSrc === 'function' ? props?.fallbackSrc() : props?.fallbackSrc);
        }
        if (typeof props?.onError === 'function') {
            props?.onError(event);
        }
    };

    const omitProps = props ? omit(props as ImageProps, ['src', 'onError']) : {};

    return (
        <RcImage
            {...omitProps}
            src={imageSource}
            onError={event => handleError(event)}
        />
    );
};
