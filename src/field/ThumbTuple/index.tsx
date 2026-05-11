/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
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
import {Space, type SpaceProps} from 'antd';
import {omit} from '@rc-component/util';
import classNames from 'classnames';
import {ThumbToggle, type ThumbToggleProps, type ThumbToggleRef} from '@/field/ThumbToggle';
import {useFieldStyle} from './style';


export type ThumbTupleRef = {
    getThumbLikeRef: () => React.RefObject<ThumbToggleRef | undefined>;
    getThumbDislikeRef: () => React.RefObject<ThumbToggleRef | undefined>;
};


export type ThumbTupleProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-thumb-tuple'
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
     * @description The props of the space
     * @description.zh-CN 间距的属性
     * @description.zh-TW 間距的屬性
     */
    spaceProps?: SpaceProps;

    /**
     * @description The props of liking
     * @description.zh-CN 喜欢的属性
     * @description.zh-TW 喜歡的屬性
     */
    thumbLikeProps?: Omit<ThumbToggleProps, 'ref' | 'actionType'>;

    /**
     * @description The props of disliking
     * @description.zh-CN 不喜欢的属性
     * @description.zh-TW 不喜歡的屬性
     */
    thumbDislikeProps?: Omit<ThumbToggleProps, 'ref' | 'actionType'>;
};


/**
 * Component for displaying a thumb liking and a thumb disliking
 *
 * @author David Hsing
 */
export const ThumbTuple: React.ForwardRefExoticComponent<ThumbTupleProps & React.RefAttributes<ThumbTupleRef>> = React.forwardRef((props?: ThumbTupleProps, ref?: any) => {
    ThumbTuple.displayName = 'ThumbTuple';

    const clazzPrefix = props?.clazzPrefix ?? 'abp-thumb-tuple';

    const fieldRef = React.useRef<HTMLDivElement>(null);
    const thumbLikeRef = React.useRef<ThumbToggleRef>(null);
    const thumbDislikeRef = React.useRef<ThumbToggleRef>(null);
    const fieldStyle = useFieldStyle(clazzPrefix);

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        getThumbLikeRef: (): React.RefObject<ThumbToggleRef | null> => {
            return thumbLikeRef;
        },
        getThumbDislikeRef: (): React.RefObject<ThumbToggleRef | null> => {
            return thumbDislikeRef;
        }
    }));

    const omitSpaceProps = !props?.spaceProps ? {} : omit(props.spaceProps, ['size']);
    const omitLikeProps = !props?.thumbLikeProps ? {} : omit(props.thumbLikeProps, ['onChange']);
    const omitDislikeProps = !props?.thumbLikeProps ? {} : omit(props.thumbLikeProps, ['onChange']);

    return (
        <div
            ref={fieldRef}
            className={classNames(clazzPrefix, fieldStyle.hashId, props?.containerClazz)}
            style={props?.containerStyle}
        >
            <Space
                size={props?.spaceProps?.size ?? 'middle'}
                {...omitSpaceProps}
            >
                <ThumbToggle
                    ref={thumbLikeRef}
                    actionType='like'
                    {...omitLikeProps}
                    onChange={async (checked) => {
                        if (checked && thumbDislikeRef.current?.isChecked()) {
                            await thumbDislikeRef.current?.toggleChecked();
                        }
                        props?.thumbLikeProps?.onChange?.(thumbLikeRef.current?.isChecked(), thumbLikeRef.current?.getCount());
                    }}
                />
                <ThumbToggle
                    ref={thumbDislikeRef}
                    actionType='dislike'
                    {...omitDislikeProps}
                    onChange={async (checked) => {
                        if (checked && thumbLikeRef.current?.isChecked()) {
                            await thumbLikeRef.current?.toggleChecked();
                        }
                        props?.thumbDislikeProps?.onChange?.(thumbDislikeRef.current?.isChecked(), thumbLikeRef.current?.getCount());
                    }}
                />
            </Space>
        </div>
    );
});
