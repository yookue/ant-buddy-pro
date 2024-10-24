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
import {ConfigProvider, Empty} from 'antd';
import {type ProFormFieldRemoteProps} from '@ant-design/pro-form/es/interface';
import {nanoid, useDebounceFn} from '@ant-design/pro-utils';
import classNames from 'classnames';


export type RemoteFieldRef = {
    getOutcome: () => any;
    refreshOutcome: () => void;
};


export type RemoteFieldProps = Omit<ProFormFieldRemoteProps, 'request' | 'valueEnum'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-remote-field'
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
     * @description The remote request
     * @description.zh-CN 远程请求
     * @description.zh-TW 遠程請求
     */
    request?: (params?: any) => Promise<any>;

    /**
     * @description The callback function after fetching remote data
     * @description.zh-CN 获取远程数据后的回调函数
     * @description.zh-TW 獲取遠程數據後的回調函數
     */
    render?: React.ReactNode | ((outcome?: any) => React.ReactNode | undefined);

    /**
     * @description The placeholder of the component
     * @description.zh-CN 组件的占位符
     * @description.zh-TW 組件的占位符
     * @default <Empty/>
     */
    placeholder?: React.ReactNode | (() => React.ReactNode | undefined);

    /**
     * @description Whether auto start the fetching request
     * @description.zh-CN 是否自动开始获取远程数据
     * @description.zh-TW 是否自動開始獲取遠程數據
     * @default true
     */
    autoStart?: boolean;
};


/**
 * Component for rendering a field with fetching remote data
 *
 * @author David Hsing
 */
export const RemoteField: React.ForwardRefExoticComponent<RemoteFieldProps & React.RefAttributes<RemoteFieldRef>> = React.forwardRef((props?: RemoteFieldProps, ref?: any) => {
    RemoteField.displayName = 'RemoteField';

    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-remote-field');

    // Initialize the default props
    const {
        placeholder = <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>,
        autoStart = true,
    } = props ?? {};

    const fieldRef = React.useRef<HTMLDivElement>();
    const [refreshId, setRefreshId] = React.useState<string>(nanoid());
    const [outcome, setOutcome] = React.useState<any>();

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        getOutcome: (): any => {
            return outcome;
        },
        refreshOutcome: (): void => {
            setRefreshId(nanoid());
        }
    }));

    if (props?.request) {
        const {run} = useDebounceFn(props.request, props?.debounceTime ?? 0);
        React.useEffect(() => {
            if (autoStart) {
                run(props?.params).then((data: any) => {
                    setOutcome(data);
                }).catch(() => {});
            }
        }, []);
        React.useEffect(() => {
            run(props?.params).then((data: any) => {
                setOutcome(data);
            }).catch(() => {});
        }, [refreshId]);
    }

    const buildOutcomeDom = () => {
        if (props?.render) {
            return (typeof props.render === 'function') ? props.render(outcome) : props.render;
        }
        return (typeof placeholder === 'function') ? placeholder() : placeholder;
    };

    return (
        <div
            ref={(div) => fieldRef.current = div ?? undefined}
            className={classNames(clazzPrefix, props?.containerClazz)}
            style={props?.containerStyle}
        >
            {buildOutcomeDom()}
        </div>
    );
});
