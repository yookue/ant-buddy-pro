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
import {ConfigProvider, Input, Tag, type InputProps, type InputRef, type TagProps, message as messageApi} from 'antd';
import {FormContext} from 'antd/es/form/context';
import {PlusOutlined} from '@ant-design/icons';
import {ProFormText} from '@ant-design/pro-form';
import {type FieldProps, type ProFormFieldItemProps, type ProFormFieldRemoteProps} from '@ant-design/pro-form/es/interface';
import {createField} from '@ant-design/pro-form/es/BaseForm/createField';
import {EditOrReadOnlyContext} from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import {useIntl} from '@ant-design/pro-provider';
import {nanoid} from '@ant-design/pro-utils';
import {ArrayUtils, NumberUtils, ObjectUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import objectHash from 'object-hash';
import omit from 'rc-util/es/omit';
import {TweenOneGroup, type IGroupProps as TweenOneGroupProps} from 'rc-tween-one';
import {type WithFalse, type RequestOptionPlace} from '@/type/declaration';
import {ConsoleUtils} from '@/util/ConsoleUtils';
import {FieldUtils} from '@/util/FieldUtils';
import {PropsUtils} from '@/util/PropsUtils';
import {intlLocales} from './intl-locales';
import './index.less';


export type TagInputRef = {
    getTagContents: () => (string | number)[] | undefined,
    setTagContents: (contents?: (string | number)[] | null) => void,
    addTagContent: (content?: string | number | null) => void,
    removeTagContent: (content?: string | number | null) => void,
};


export type AddingInputProps = Omit<ProFormFieldItemProps<InputProps, InputRef>, 'name' | 'fieldProps'> & {
    fieldProps?: Omit<FieldProps<InputRef>, 'ref'> & Omit<InputProps, 'ref' | 'name' | 'id' | 'value' | 'type'>;
};


export type IntlLocaleProps = {
    /**
     * @description Tag already exists
     * @description.zh-CN 标签已存在
     * @description.zh-TW 標簽已存在
     */
    duplicateTag?: string;
};


export type TextTagProps = Omit<TagProps, 'children'> & {
    /**
     * @description The text content of the tag
     * @description.zh-CN Tag 的文本内容
     * @description.zh-TW Tag 的文本内容
     */
    content?: string | number;
};


export type TagInputProps = Omit<ProFormFieldItemProps<React.HTMLAttributes<HTMLDivElement>>, 'fieldRef' | 'placeholder' | 'disabled' | 'readonly'> & Omit<ProFormFieldRemoteProps, 'request' | 'valueEnum'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-tag-input'
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
     * @description The ref of the component
     * @description.zh-CN 组件的 ref 句柄
     * @description.zh-TW 組件的 ref 句柄
     */
    fieldRef?: React.Ref<TagInputRef | null | undefined>;

    /**
     * @description The remote request
     * @description.zh-CN 远程数据请求
     * @description.zh-TW 遠程數據請求
     */
    request?: (params?: Record<string, any>, props?: Record<string, any>) => Promise<(string | number | TextTagProps)[]>;

    /**
     * @description Whether to keep the `fulfilTagItems` data when using the `request` data
     * @description.zh-CN 使用 `request` 数据的同时，是否保留 `fulfilTagItems` 数据
     * @description.zh-TW 使用 `request` 數據的同時，是否保留 `fulfilTagItems` 數據
     */
    requestOptionPlace?: WithFalse<RequestOptionPlace>;

    /**
     * @description The props or content of the fulfil tags
     * @description.zh-CN 已完成标签的属性或内容
     * @description.zh-TW 已完成標簽的屬性或內容
     */
    fulfilTagItems?: (string | number | TextTagProps)[];

    /**
     * @description The shared props of the fulfil tags
     * @description.zh-CN 已完成标签的通用属性
     * @description.zh-TW 已完成標簽的通用屬性
     */
    fulfilTagProps?: Omit<TagProps, 'children'>;

    /**
     * @description Whether the tag is addable or not
     * @description.zh-CN 是否可以添加标签
     * @description.zh-TW 是否可以添加標簽
     * @default false
     */
    addable?: boolean;

    /**
     * @description The props of the adding input
     * @description.zh-CN 添加标签的文本框的属性
     * @description.zh-TW 添加標簽的文本框的屬性
     */
    addingInputProps?: AddingInputProps;

    /**
     * @description The props of the adding tag
     * @description.zh-CN 添加标签的属性
     * @description.zh-TW 添加標簽的屬性
     */
    addingTagProps?: TagProps;

    /**
     * @description Whether to use compact margin for the item
     * @description.zh-CN 是否使用紧凑边距
     * @description.zh-TW 是否使用緊凑邊距
     */
    compactMargin?: boolean;

    /**
     * @description Whether the tween-one animation is enabled
     * @description.zh-CN 是否启用 tween-one 动画
     * @description.zh-TW 是否啟用 tween-one 動畫
     * @default true
     */
    tweenOneAnim?: boolean;

    /**
     * @description The props of the tween-one animation
     * @description.zh-CN tween-one 动画的属性
     * @description.zh-TW tween-one 動畫的屬性
     */
    tweenOneProps?: TweenOneGroupProps;

    /**
     * @description Whether to warn if the tag already exists
     * @description.zh-CN 是否显示标签已存在的警告
     * @description.zh-TW 是否顯示標簽已存在的警告
     * @default true
     */
    warnDuplicate?: boolean;

    /**
     * @description Whether to use ProFormField instead of Antd
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     * @default true
     */
    proField?: boolean;

    /**
     * @description The props for locale
     * @description.zh-CN 多语言属性
     * @description.zh-TW 多語言屬性
     */
    localeProps?: IntlLocaleProps;

    /**
     * @description The callback function when the tag contents changed
     * @description.zh-CN 标签内容变化时的回调函数
     * @description.zh-TW 標簽内容變化時的回調函數
     */
    onTagContentsChange?: (contents?: (string | number)[]) => void;
} & Pick<React.InputHTMLAttributes<HTMLInputElement>, 'name'>;


/**
 * Component for displaying tags with a text input box with addable capability
 *
 * @author David Hsing
 */
const TagInputField: React.ForwardRefExoticComponent<TagInputProps & React.RefAttributes<TagInputRef>> = React.forwardRef((props?: TagInputProps, ref?: any) => {
    TagInputField.displayName = 'TagInput';

    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const editContext = React.useContext(EditOrReadOnlyContext);
    const formContext = React.useContext(FormContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-tag-input');
    const intlType = useIntl();

    // Initialize the default props
    const {
        addable = false,
        tweenOneAnim = true,
        warnDuplicate = true,
        proField = true,
    } = props ?? {};

    const entryId = nanoid();
    const fieldRef = React.useRef<HTMLDivElement>();
    const [inputName, setInputName] = React.useState<string>();
    const [inputValue, setInputValue] = React.useState<string>();
    const [inputVisible, setInputVisible] = React.useState<boolean>(false);

    const [tagContents, setTagContents] = React.useState<(string | number)[] | undefined>(() => {
        const result = [...new Set(props?.fulfilTagItems?.map(item => (typeof item === 'string' || typeof item === 'number') ? item : item?.content))] as string[];
        ConsoleUtils.warn(!props?.fulfilTagItems || (result.length === props?.fulfilTagItems?.length), true, 'TagInput', `Field '${props?.name}' prop 'fulfilTagItems' must includes unique contents`);
        return result;
    });
    if (props?.request && props?.requestOptionPlace !== false) {
        FieldUtils.fetchRemoteRequest(props, (values?: (string | number | TextTagProps)[]) => {
            if (!values) {
                if (props?.requestOptionPlace === 'override') {
                    setTagContents(undefined);
                }
                return;
            }
            const result = [...new Set(values?.map(item => {
                return (typeof item === 'string' || typeof item === 'number') ? item : item.content;
            }))] as (string | number)[];
            ConsoleUtils.warn(result.length === values.length, true, 'TagInput', `Field '${props?.name}' prop 'request' must includes unique response`);
            if (props?.requestOptionPlace === undefined || props?.requestOptionPlace === 'override') {
                setTagContents(result);
            } else if (props?.requestOptionPlace === 'before') {
                setTagContents([...result, ...(tagContents ?? [])]);
            } else if (props?.requestOptionPlace === 'after') {
                setTagContents([...(tagContents ?? []), ...result]);
            }
        }, []);
    }

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        getTagContents: (): (string | number)[] | undefined => {
            return tagContents;
        },
        setTagContents: (contents?: (string | number)[] | null): void => {
            setTagContents([...new Set(contents)]);
        },
        addTagContent: (content?: string | number | null): void => {
            if (!ArrayUtils.includes(tagContents, content)) {
                setTagContents(ArrayUtils.add(tagContents, content) ?? []);
            }
        },
        removeTagContent: (content?: string | number | null): void => {
            if (ArrayUtils.includes(tagContents, content)) {
                setTagContents(ArrayUtils.remove(tagContents, content) ?? []);
            }
        }
    }));

    React.useEffect(() => {
        setInputName(inputVisible ? (formContext?.name ? `${formContext.name}_${entryId}` : entryId) : undefined);
    }, [inputVisible]);

    React.useEffect(() => {
        if (props?.name && formContext?.form) {
            formContext.form.setFieldValue(props.name, tagContents);
        }
        props?.onTagContentsChange?.(tagContents);
    }, [tagContents]);

    React.useLayoutEffect(() => {
        if (props?.compactMargin) {
            const parentClazz = configContext.getPrefixCls('form-item');
            const targetClazz = `${clazzPrefix}-compact-margin`;
            fieldRef.current?.closest(`.${parentClazz}`)?.classList?.add(targetClazz);
        }
    }, [fieldRef.current]);

    const buildTweenOneProps = () => {
        return props?.tweenOneProps ?? {
            appear: false,
            enter: {
                scale: 0.8,
                opacity: 0,
                type: 'from',
                duration: 100,
            },
            leave: {
                opacity: 0,
                width: 0,
                scale: 0,
                duration: 200,
            },
            onEnd: (event) => {
                if (event.type === 'appear' || event.type === 'enter') {
                    (event.target as any).style = 'display: inline-block';
                }
            }
        };
    };

    const buildFulfilDom = () => {
        if (!tagContents) {
            return undefined;
        }
        const tagsDom = tagContents.map((content, index) => {
            const handleClose = () => {
                const contents = tagContents.filter(item => item !== content);
                setTagContents(contents);
            };
            const origin = props?.fulfilTagItems?.find(item => (typeof item === 'string' || typeof item === 'number') ? item === content : item.content === content);
            const omitShareProps = !props?.fulfilTagProps ? {} : omit(props.fulfilTagProps, ['className', 'onClose']);
            if (!origin || typeof origin === 'string' || typeof origin === 'number') {
                return (
                    <span key={`${index}_${objectHash(content)}`} className={`${clazzPrefix}-fulfil-span`}>
                        <Tag
                            className={classNames(`${clazzPrefix}-fulfil-tag`, props?.fulfilTagProps?.className)}
                            onClose={event => {
                                props?.fulfilTagProps?.onClose?.(event);
                                if (!event.isDefaultPrevented()) {
                                    handleClose();
                                }
                            }}
                            {...omitShareProps}
                        >
                            {content}
                        </Tag>
                    </span>
                );
            }
            const omitOriginProps = omit(origin, ['className', 'onClose']);
            const mergedProps = ObjectUtils.defaultProps(omitOriginProps, omitShareProps, false);
            return (
                <span key={`${index}_${objectHash(content)}`} className={`${clazzPrefix}-fulfil-span`}>
                    <Tag
                        className={classNames(`${clazzPrefix}-fulfil-tag`, origin.className, props?.fulfilTagProps?.className)}
                        onClose={event => {
                            origin?.onClose?.(event);
                            props?.fulfilTagProps?.onClose?.(event);
                            if (!event.isDefaultPrevented()) {
                                handleClose();
                            }
                        }}
                        {...mergedProps}
                    >
                        {content}
                    </Tag>
                </span>
            );
        });
        const wrapDom = !tweenOneAnim ? tagsDom : (
            <TweenOneGroup {...buildTweenOneProps()}>
                {tagsDom}
            </TweenOneGroup>
        );
        return (
            <div className={`${clazzPrefix}-fulfil`}>
                {wrapDom}
            </div>
        );
    };

    const handleInputConfirm = async () => {
        if (!inputVisible) {
            return;
        }
        if (props?.name && proField && formContext?.form) {
            try {
                await formContext.form.validateFields([inputName]);
            } catch (ignored) {
                return;
            }
        }
        if (inputValue) {
            const valueInteger = NumberUtils.toInteger(inputValue);
            if (tagContents?.indexOf(inputValue) === -1 && (valueInteger === undefined || tagContents?.indexOf(valueInteger) === -1)) {
                const contents = [...tagContents, inputValue];
                setTagContents(contents);
            } else {
                if (warnDuplicate && !proField) {
                    messageApi.warn(props?.localeProps?.duplicateTag || intlLocales.get([intlType.locale, 'duplicateTag']) || intlLocales.get(['en_US', 'duplicateTag']));
                }
            }
        }
        setInputVisible(false);
        setInputValue(undefined);
    };

    const entryImmutable = !addable || editContext.mode === 'read' || props?.proFieldProps?.mode === 'read' || props?.proFieldProps?.readonly;

    const buildActionDom = () => {
        if (entryImmutable) {
            return undefined;
        }
        if (inputVisible) {
            const omitFieldProps = !props?.addingInputProps?.fieldProps ? {} : omit(props.addingInputProps.fieldProps, ['className', 'size', 'onChange', 'onPressEnter', 'onBlur']);
            if (proField) {
                const restProps = !props?.addingInputProps ? {} : omit(props.addingInputProps, ['fieldProps', 'rules']);
                return (
                    <div className={`${clazzPrefix}-action`}>
                        <ProFormText
                            name={inputName}
                            {...restProps}
                            fieldProps={{
                                ref: (input) => input?.focus(),
                                className: classNames(`${clazzPrefix}-action-input`, props?.addingInputProps?.fieldProps?.className),
                                type: 'text',
                                value: inputValue,
                                ...omitFieldProps,
                                size: props?.addingInputProps?.fieldProps?.size ?? 'small',
                                onChange: (event) => {
                                    props?.addingInputProps?.fieldProps?.onChange?.(event);
                                    if (!event.isDefaultPrevented()) {
                                        setInputValue(event.target.value);
                                    }
                                },
                                onPressEnter: (event) => {
                                    props?.addingInputProps?.fieldProps?.onPressEnter?.(event);
                                    if (!event.isDefaultPrevented()) {
                                        handleInputConfirm().then();
                                    }
                                },
                                onBlur: (event) => {
                                    props?.addingInputProps?.fieldProps?.onBlur?.(event);
                                    if (!event.isDefaultPrevented()) {
                                        handleInputConfirm().then();
                                    }
                                }
                            }}
                            rules={[
                                ...(props?.addingInputProps?.rules ?? []),
                                !warnDuplicate ? {} : {
                                    validator: async (_rule: any, value: string) => {
                                        if (!value) {
                                            return undefined;
                                        }
                                        const valueInteger = NumberUtils.toInteger(value);
                                        if (tagContents?.indexOf(value) === -1 && (valueInteger === undefined || tagContents?.indexOf(valueInteger) === -1)) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(props?.localeProps?.duplicateTag || intlLocales.get([intlType.locale, 'duplicateTag']) || intlLocales.get(['en_US', 'duplicateTag']));
                                    }
                                }
                            ]}
                        />
                    </div>
                );
            } else {
                const restProps = PropsUtils.pickForwardProps(props);
                return (
                    <div className={`${clazzPrefix}-action`}>
                        <Input
                            ref={(input) => input?.focus()}
                            className={classNames(`${clazzPrefix}-action-input`, props?.addingInputProps?.fieldProps?.className)}
                            type='text'
                            id={inputName}
                            value={inputValue}
                            {...restProps}
                            {...omitFieldProps}
                            size={props?.addingInputProps?.fieldProps?.size ?? 'small'}
                            onChange={event => {
                                props?.addingInputProps?.fieldProps?.onChange?.(event);
                                if (!event.isDefaultPrevented()) {
                                    setInputValue(event.target.value);
                                }
                            }}
                            onPressEnter={event => {
                                props?.addingInputProps?.fieldProps?.onPressEnter?.(event);
                                if (!event.isDefaultPrevented()) {
                                    handleInputConfirm().then();
                                }
                            }}
                            onBlur={event => {
                                props?.addingInputProps?.fieldProps?.onBlur?.(event);
                                if (!event.isDefaultPrevented()) {
                                    handleInputConfirm().then();
                                }
                            }}
                        />
                    </div>
                );
            }
        } else {
            const omitTagProps = !props?.addingTagProps ? {} : omit(props.addingTagProps, ['className', 'onClick', 'children']);
            return (
                <div className={`${clazzPrefix}-action`}>
                    <Tag
                        className={classNames(`${clazzPrefix}-action-tag`, props?.addingTagProps?.className)}
                        {...omitTagProps}
                        onClick={event => {
                            props?.addingTagProps?.onClick?.(event);
                            if (!event.isDefaultPrevented()) {
                                setInputVisible(true);
                            }
                        }}
                    >
                        {props?.addingTagProps?.children ?? <PlusOutlined/>}
                    </Tag>
                </div>
            );
        }
    };

    return (
        <div
            ref={(div) => fieldRef.current = div ?? undefined}
            className={classNames(clazzPrefix, ((proField && !entryImmutable) ? `${clazzPrefix}-pro-field` : undefined), props?.containerClazz)}
            style={props?.containerStyle}
        >
            {buildFulfilDom()}
            {buildActionDom()}
        </div>
    );
});


// @ts-ignore
export const TagInput = createField(TagInputField) as typeof TagInputField;
