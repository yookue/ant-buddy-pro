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
    getThumbUpRef: () => React.MutableRefObject<ThumbToggleRef | undefined>;
    getThumbDownRef: () => React.MutableRefObject<ThumbToggleRef | undefined>;
};


export type ThumbTupleProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-thumb-tuple'
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
     * @description The props for liking
     * @description.zh-CN 喜欢的属性
     * @description.zh-TW 喜歡的屬性
     */
    thumbUpProps?: Omit<ThumbToggleProps, 'ref' | 'direction'>;

    /**
     * @description The props for disliking
     * @description.zh-CN 不喜欢的属性
     * @description.zh-TW 不喜歡的屬性
     */
    thumbDownProps?: Omit<ThumbToggleProps, 'ref' | 'direction'>;
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
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-thumb-tuple');

    const fieldRef = React.useRef<HTMLDivElement>();
    const thumbUpRef = React.useRef<ThumbToggleRef>(null);
    const thumbDownRef = React.useRef<ThumbToggleRef>(null);

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        getThumbUpRef: (): React.MutableRefObject<ThumbToggleRef | null> => {
            return thumbUpRef;
        },
        getThumbDownRef: (): React.MutableRefObject<ThumbToggleRef | null> => {
            return thumbDownRef;
        }
    }));

    const omitSpaceProps = !props?.spaceProps ? {} : omit(props.spaceProps, ['size']);
    const omitUpProps = !props?.thumbUpProps ? {} : omit(props.thumbUpProps, ['onChange']);
    const omitDownProps = !props?.thumbUpProps ? {} : omit(props.thumbUpProps, ['onChange']);

    return (
        <div
            ref={(div) => fieldRef.current = div ?? undefined}
            className={classNames(clazzPrefix, props?.containerClazz)}
            style={props?.containerStyle}
        >
            <Space
                size={props?.spaceProps?.size ?? 12}
                {...omitSpaceProps}
            >
                <ThumbToggle
                    ref={thumbUpRef}
                    direction='up'
                    {...omitUpProps}
                    onChange={async (checked) => {
                        if (checked && thumbDownRef.current?.isChecked()) {
                            await thumbDownRef.current?.toggleChecked();
                        }
                        props?.thumbUpProps?.onChange?.(thumbUpRef.current?.isChecked(), thumbUpRef.current?.getCount());
                    }}
                />
                <ThumbToggle
                    ref={thumbDownRef}
                    direction='down'
                    {...omitDownProps}
                    onChange={async (checked) => {
                        if (checked && thumbUpRef.current?.isChecked()) {
                            await thumbUpRef.current?.toggleChecked();
                        }
                        props?.thumbDownProps?.onChange?.(thumbDownRef.current?.isChecked(), thumbUpRef.current?.getCount());
                    }}
                />
            </Space>
        </div>
    );
});
