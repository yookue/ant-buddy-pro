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
import {ConfigProvider} from 'antd';
import classNames from 'classnames';
import RcImage, {type ImageProps} from 'rc-image';
import omit from 'rc-util/es/omit';
import {ImageUtils} from '@/util/ImageUtils';


export type FallbackImageProps = Omit<ImageProps, 'src' | 'fallback'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-fallback-image'
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
     * @description.zh-CN 图片出错后的备用源
     * @description.zh-TW 圖片出錯後的備用源
     */
    fallback?: string | (() => string | undefined);
};


export const FallbackImage: React.FC<FallbackImageProps> = (props?: FallbackImageProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-fallback-image');

    const [imageSource, setImageSource] = React.useState(() => {
        return ImageUtils.detectSource(props?.src, data => setImageSource(data));
    });

    const handleError = (event: React.SyntheticEvent<any>) => {
        if (props?.fallback) {
            setImageSource(ImageUtils.detectSource(props?.fallback, data => setImageSource(data)));
        }
        if (typeof props?.onError === 'function') {
            props?.onError(event);
        }
    };

    const omitProps = !props ? {} : omit(props, ['clazzPrefix', 'className', 'src', 'fallback', 'onError']);

    return (
        <RcImage
            {...omitProps}
            className={classNames(clazzPrefix, props?.className)}
            src={imageSource}
            onError={handleError}
        />
    );
};
