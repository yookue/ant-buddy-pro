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
import {ConfigProvider, Space, type SpaceProps} from 'antd';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {ThumbToggle, type ThumbToggleProps, type ThumbToggleRef} from '@/field/ThumbToggle';


export type ThumbTupleRef = {
    getThumbLikeRef: () => React.MutableRefObject<ThumbToggleRef | undefined>;
    getThumbDislikeRef: () => React.MutableRefObject<ThumbToggleRef | undefined>;
};


export type ThumbTupleProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-thumb-group'
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
     * @description The props for the space
     * @description.zh-CN 间距的属性
     * @description.zh-TW 間距的屬性
     */
    spaceProps?: SpaceProps;

    /**
     * @description The props for thumb liking
     * @description.zh-CN 拇指喜欢的属性
     * @description.zh-TW 拇指喜歡的屬性
     */
    thumbLikeProps?: Omit<ThumbToggleProps, 'ref' | 'actionType'>;

    /**
     * @description The props for thumb disliking
     * @description.zh-CN 拇指不喜欢的属性
     * @description.zh-TW 拇指不喜歡的屬性
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

    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-thumb-group');

    const fieldRef = React.useRef<HTMLDivElement>();
    const thumbLikeRef = React.useRef<ThumbToggleRef>(null);
    const thumbDislikeRef = React.useRef<ThumbToggleRef>(null);

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        getThumbLikeRef: (): React.MutableRefObject<ThumbToggleRef | null> => {
            return thumbLikeRef;
        },
        getThumbDislikeRef: (): React.MutableRefObject<ThumbToggleRef | null> => {
            return thumbDislikeRef;
        }
    }));

    const omitSpaceProps = !props?.spaceProps ? {} : omit(props.spaceProps, ['size']);
    const omitLikeProps = !props?.thumbLikeProps ? {} : omit(props.thumbLikeProps, ['onChange']);
    const omitDislikeProps = !props?.thumbLikeProps ? {} : omit(props.thumbLikeProps, ['onChange']);

    return (
        <div
            ref={(div) => fieldRef.current = div ?? undefined}
            className={classNames(clazzPrefix, props?.containerClazz)}
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
