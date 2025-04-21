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
import {ConfigProvider, Modal, type ModalProps} from 'antd';
import {NanoidUtils} from '@yookue/ts-lang-utils';
import Draggable, {type DraggableBounds, type DraggableData, type DraggableEvent} from 'react-draggable';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {useFieldStyle} from './style';


export type DragModalProps = ModalProps & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-drag-modal'
     */
    clazzPrefix?: string;

    /**
     * @description Whether the modal is draggable or not
     * @description.zh-CN 模态对话框是否可拖动
     * @description.zh-TW 模態對話框是否可拖動
     * @default true
     */
    draggable?: boolean;

    /**
     * @description The bounds of the draggable area
     * @description.zh-CN 可拖动区域的边界
     * @description.zh-TW 可拖動區域的邊界
     * @default {left: 0, top: 0, bottom: 0, right: 0}
     */
    draggableBound?: DraggableBounds;
};


/**
 * Component for displaying a modal dialog when draggable ability
 *
 * @author David Hsing
 */
export const DragModal: React.FC<DragModalProps> = (props?: DragModalProps) => {
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-drag-modal');

    // Initialize the default props
    const {
        draggable = true,
        draggableBound = {left: 0, top: 0, bottom: 0, right: 0},
    } = props ?? {};

    const [fieldId] = React.useState<string>(NanoidUtils.getPopularId());
    const [dragDisabled, setDragDisabled] = React.useState<boolean>(true);
    const [dragBound, setDragBound] = React.useState<DraggableBounds>(draggableBound);
    const dragRef = React.useRef<HTMLDivElement>(null);
    const fieldStyle = useFieldStyle(clazzPrefix);

    const onDragStart = (_event: DraggableEvent, data: DraggableData) => {
        const {clientWidth, clientHeight} = document.documentElement;
        const targetRect = dragRef.current?.getBoundingClientRect();
        if (!targetRect) {
            return;
        }
        setDragBound({
            left: -targetRect.left + data.x,
            right: clientWidth - (targetRect.right - data.x),
            top: -targetRect.top + data.y,
            bottom: clientHeight - (targetRect.bottom - data.y),
        });
    };

    const omitProps = !props ? {} : omit(props, ['className', 'wrapClassName', 'modalRender', 'title', 'clazzPrefix', 'draggable', 'draggableBound']);

    return (
        <Modal
            className={classNames(clazzPrefix, fieldStyle.hashId, `${clazzPrefix}-${fieldId}`, props?.className)}
            wrapClassName={classNames(`${clazzPrefix}-wrapper`, `${clazzPrefix}-wrapper-${fieldId}`, props?.wrapClassName)}
            modalRender={props?.modalRender ?? (!draggable ? undefined : (dom: React.ReactNode) => {
                return (
                    <Draggable bounds={dragBound} disabled={dragDisabled} onStart={onDragStart}>
                        <div ref={dragRef} className={classNames(`${clazzPrefix}-draggable`, `${clazzPrefix}-draggable-${fieldId}`)}>
                            {dom}
                        </div>
                    </Draggable>
                );
            })}
            title={(props?.modalRender || !draggable) ? props?.title : (
                <div
                    className={classNames(`${clazzPrefix}-draggable-title`, `${clazzPrefix}-draggable-title-${fieldId}`)}
                    onMouseOver={() => {
                        if (dragDisabled) {
                            setDragDisabled(false);
                        }
                    }}
                    onMouseOut={() => setDragDisabled(true)}
                >
                    {props?.title}
                </div>
            )}
            {...omitProps}
        />
    );
};
