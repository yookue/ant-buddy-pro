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
import {Modal, type ModalProps} from 'antd';
import {DndContext, useDraggable} from '@dnd-kit/core';
import {restrictToWindowEdges} from '@dnd-kit/modifiers';
import {omit} from '@rc-component/util';
import {NanoidUtils} from '@unikue/ts-lang-utils';
import classNames from 'classnames';


export type DragModalProps = ModalProps & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-drag-modal'
     */
    clazzPrefix?: string;

    /**
     * @description Whether the modal is draggable or not
     * @description.zh-CN 模态对话框是否可拖动
     * @description.zh-TW 模態對話框是否可拖動
     * @default true
     */
    draggable?: boolean;
};


/**
 * Component for displaying a modal dialog when draggable ability
 *
 * @author David Hsing
 */
export const DragModal: React.FC<DragModalProps> = (props?: DragModalProps) => {
    const clazzPrefix = props?.clazzPrefix ?? 'abp-drag-modal';

    // Initialize the default props
    const {
        draggable = true,
    } = props ?? {};

    const [fieldId] = React.useState<string>(NanoidUtils.getPopularId());
    const dragId = React.useMemo(() => `drag-modal-${fieldId}`, [fieldId]);
    const [offset, setOffset] = React.useState<{ x: number; y: number }>({x: 0, y: 0});
    const [opening, setOpening] = React.useState<boolean>(false);

    const omitProps = !props ? {} : omit(props, ['className', 'wrapClassName', 'modalRender', 'title', 'clazzPrefix', 'draggable']);

    // Handle drag end to update offset
    const handleDragEnd = (event: any) => {
        if (!event.delta) {
            return;
        }
        setOffset(prev => ({
            x: prev.x + event.delta.x,
            y: prev.y + event.delta.y,
        }));
    };

    // Reset offset when modal closes
    React.useEffect(() => {
        if (!props?.open && opening) {
            setOffset({x: 0, y: 0});
            setOpening(false);
        } else if (props?.open && !opening) {
            setOpening(true);
        }
    }, [props?.open, opening]);

    // Prevent body scroll when dragging
    React.useEffect(() => {
        if (!draggable || !props?.open) {
            return;
        }

        const handleTouchMove = (ev: TouchEvent) => {
            ev.preventDefault();
        };

        // Lock body scroll to prevent mask scrollbar flickering
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        document.addEventListener('touchmove', handleTouchMove, {passive: false});

        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            document.removeEventListener('touchmove', handleTouchMove);
        };
    }, [draggable, props?.open]);

    // Draggable content component - always defined to maintain hook order
    const DraggableContent: React.FC<{children: React.ReactNode}> = React.useCallback(({children}) => {
        const {setNodeRef, transform} = useDraggable({
            id: dragId,
            disabled: !draggable,
        });

        const styles = {
            transform: `translate3d(${(transform?.x || 0) + offset.x}px, ${(transform?.y || 0) + offset.y}px, 0)`,
        };

        return (
            <div
                ref={setNodeRef}
                className={classNames(`${clazzPrefix}-draggable`, `${clazzPrefix}-draggable-${fieldId}`)}
                style={styles}
            >
                {children}
            </div>
        );
    }, [dragId, draggable, clazzPrefix, fieldId, offset]);

    // Title component with drag handle - always defined to maintain hook order
    const DraggableTitle: React.FC = React.useCallback(() => {
        const {listeners, attributes} = useDraggable({
            id: dragId,
            disabled: !draggable,
        });

        return (
            <div
                className={classNames(`${clazzPrefix}-draggable-title`, `${clazzPrefix}-draggable-title-${fieldId}`)}
                {...listeners}
                {...attributes}
                style={{cursor: draggable ? 'move' : 'default'}}
            >
                {props?.title}
            </div>
        );
    }, [dragId, draggable, clazzPrefix, fieldId, props?.title]);

    // Build modal content based on draggable prop
    return draggable ? (
        <DndContext
            modifiers={[restrictToWindowEdges]}
            onDragEnd={handleDragEnd}
        >
            <Modal
                className={classNames(clazzPrefix, `${clazzPrefix}-${fieldId}`, props?.className)}
                wrapClassName={classNames(`${clazzPrefix}-wrapper`, `${clazzPrefix}-wrapper-${fieldId}`, props?.wrapClassName)}
                title={props?.modalRender ? props?.title : <DraggableTitle/>}
                modalRender={props?.modalRender ?? ((dom: React.ReactNode) => {
                    return (
                        <DraggableContent>
                            {dom}
                        </DraggableContent>
                    );
                })}
                {...omitProps}
            />
        </DndContext>
    ) : (
        <Modal
            className={classNames(clazzPrefix, `${clazzPrefix}-${fieldId}`, props?.className)}
            wrapClassName={classNames(`${clazzPrefix}-wrapper`, `${clazzPrefix}-wrapper-${fieldId}`, props?.wrapClassName)}
            title={props?.title}
            {...omitProps}
        />
    );
};
