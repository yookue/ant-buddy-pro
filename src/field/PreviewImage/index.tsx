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
import {ConfigProvider, Image} from 'antd';
import {ImageUtils, NanoidUtils} from '@unikue/ts-lang-utils';
import classNames from 'classnames';
import {type ImagePreviewType as RcImagePreviewProps} from 'rc-image';
import omit from 'rc-util/es/omit';


export type PreviewImageProps = Omit<RcImagePreviewProps, 'src' | 'current' | 'countRender'> & {
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
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-preview-image';

    const [fieldId] = React.useState<string>(NanoidUtils.getPopularId());
    const [imageSrc, setImageSrc] = React.useState<string>();

    React.useEffect(() => {
        ImageUtils.detectSource(props?.src, res => setImageSrc(res));
    }, [props?.src]);

    React.useEffect(() => {
        ImageUtils.detectSource(props?.fallback, res => {
            const selector = `.${clazzPrefix}-id-${fieldId} .${configContext.getPrefixCls('image-preview-content')} .${configContext.getPrefixCls('image-preview-body')} .${configContext.getPrefixCls('image-preview-img-wrapper')} > img`;
            const inspect = document.querySelector<HTMLImageElement>(selector);
            if (inspect && !inspect.onerror) {
                inspect.setAttribute('onerror', `this.src='${res ?? ''}'`);
            }
        });
    }, [props?.fallback]);

    const omitProps = !props ? {} : omit(props, ['className', 'rootClassName', 'clazzPrefix', 'src', 'fallback']);

    return (
        <Image
            className={classNames(clazzPrefix, props?.className)}
            width={0}
            height={0}
            preview={{
                className: classNames(`${clazzPrefix}-preview`, `${clazzPrefix}-id-${fieldId}`),
                src: imageSrc ?? '',
                ...omitProps,
            }}
            rootClassName={classNames(`${clazzPrefix}-root`, `${clazzPrefix}-root-id-${fieldId}`, props?.rootClassName)}
            style={{
                display: 'none',
            }}
        />
    );
};
