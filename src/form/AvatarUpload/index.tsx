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
import {ConfigProvider, Avatar, Image, Space, Upload, type AvatarProps, type ImageProps, type TooltipProps, type UploadProps, message as messageApi} from 'antd';
import {type RcFile} from 'antd/es/upload/interface';
import {UserOutlined, LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import {type ProFormFieldItemProps} from '@ant-design/pro-form/es/interface';
import {createField} from '@ant-design/pro-form/es/BaseForm/createField';
import {EditOrReadOnlyContext} from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import {useIntl} from '@ant-design/pro-provider';
import {StringUtils, NumberUtils} from '@yookue/ts-lang-utils';
import ImgCrop, {type ImgCropProps} from 'antd-img-crop';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {type CircleSquareShape, type FileSizeUint} from '@/type/declaration';
import {TooltipRender} from '@/render/TooltipRender';
import {FileUtils} from '@/util/FileUtils';
import {intlLocales} from './intl-locales';
import './index.less';


export type AvatarUploadRef = {
    isLoading: () => boolean;
    getImageSrc: () => string | undefined;
    setImageSrc: (src?: string) => void;
    getFallbackSrc: () => string | undefined;
    setFallbackSrc: (src?: string) => void;
};


export type IntlLocaleProps = {
    /**
     * @description Upload
     * @description.zh-CN 上传
     * @description.zh-TW 上傳
     */
    upload?: React.ReactNode;

    /**
     * @description Only allowed some files
     * @description.zh-CN 只允许特定类型的文件
     * @description.zh-TW 只允許特定類型的文件
     */
    allowTypes?: string;

    /**
     * @description File type is disallowed
     * @description.zh-CN 不允许的文件类型
     * @description.zh-TW 不允許的文件類型
     */
    disallowType?: string;

    /**
     * @description The title of the image crop modal
     * @description.zh-CN 头像裁剪对话框的标题
     * @description.zh-TW 頭像裁剪對話框的標題
     */
    cropModalTitle?: string;

    /**
     * @description File size cant not be greater than {}{}
     * @description.zh-CN 文件大小不能超过 {}{}
     * @description.zh-TW 文件大小不能超過 {}{}
     */
    maxFileSize?: string;
};


export type FileUploadProps = Omit<UploadProps, 'name' | 'maxCount' | 'showUploadList'> & {
    /**
     * @description The allowed file types
     * @description.zh-CN 允许上传的文件类型
     * @description.zh-TW 允許上傳的文件類型
     */
    allowedFileTypes?: string[];

    /**
     * @description The allowed file types
     * @description.zh-CN 允许上传的文件类型
     * @description.zh-TW 允許上傳的文件類型
     */
    warnWithTypes?: boolean;

    /**
     * @description The max allowed file size
     * @description.zh-CN 允许上传的最大文件大小
     * @description.zh-TW 允許上傳的最大文件大小
     */
    maxFileSize?: number;

    /**
     * @description The unit of max allowed file size
     * @description.zh-CN 允许上传的最大文件大小的单位
     * @description.zh-TW 允許上傳的最大文件大小的單位
     */
    fileSizeUint?: FileSizeUint;

    /**
     * @description The upload placeholder
     * @description.zh-CN 上传组件的占位符
     * @description.zh-TW 上傳組件的占位符
     */
    placeholder?: React.ReactNode | (() => React.ReactNode | undefined);
};


export type AvatarUploadProps = Omit<ProFormFieldItemProps<React.HTMLAttributes<HTMLDivElement>>, 'fieldRef' | 'placeholder' | 'disabled' | 'readonly'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-avatar-upload'
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
    fieldRef?: React.Ref<AvatarUploadRef | null | undefined>;

    /**
     * @description The source of the image
     * @description.zh-CN 图片源
     * @description.zh-TW 圖片源
     */
    imageSrc?: string;

    /**
     * @description The fallback source of the image
     * @description.zh-CN 备用图片源
     * @description.zh-TW 備用圖片源
     */
    fallbackSrc?: string;

    /**
     * @description The shape of the component
     * @description.zh-CN 组件的形状
     * @description.zh-TW 組件的形狀
     * @default 'circle'
     */
    shape?: CircleSquareShape;

    /**
     * @description The props of the avatar
     * @description.zh-CN 头像属性
     * @description.zh-TW 頭像屬性
     */
    avatarProps?: Omit<AvatarProps, 'src' | 'srcSet' | 'shape' | 'children'>;

    /**
     * @description The props of the image
     * @description.zh-CN 图像属性
     * @description.zh-TW 圖像屬性
     */
    imageProps?: Omit<ImageProps, 'src' | 'srcSet' | 'fallback' | 'width' | 'height' | 'preview' | 'title'>;

    /**
     * @description Whether to enable upload or not
     * @description.zh-CN 是否启用上传
     * @description.zh-TW 是否啟用上傳
     * @default false
     */
    uploadEnabled?: boolean;

    /**
     * @description The props of uploading
     * @description.zh-CN 上传属性
     * @description.zh-TW 上傳屬性
     */
    uploadProps?: FileUploadProps;

    /**
     * @description Whether to enable crop or not
     * @description.zh-CN 是否启用裁剪
     * @description.zh-TW 是否啟用裁剪
     * @default true
     */
    cropEnabled?: boolean;

    /**
     * @description The props of cropping
     * @description.zh-CN 裁剪属性
     * @description.zh-TW 裁剪屬性
     */
    cropProps?: Omit<ImgCropProps, 'children'>;

    /**
     * @description Whether to use Tooltip
     * @description.zh-CN 是否使用 Tooltip
     * @description.zh-TW 是否使用 Tooltip
     */
    tooltipCtrl?: boolean;

    /**
     * @description The props of Antd Tooltip
     * @description.zh-CN Tooltip 属性
     * @description.zh-TW Tooltip 屬性
     */
    tooltipProps?: TooltipProps;

    /**
     * @description The props of locale
     * @description.zh-CN 多语言属性
     * @description.zh-TW 多語言屬性
     */
    localeProps?: IntlLocaleProps;

    /**
     * @description The callback function when the image source changed
     * @description.zh-CN 图片源变化时的回调函数
     * @description.zh-TW 圖片源變化時的回調函數
     */
    onImageSrcChange?: (src?: string) => void;

    /**
     * @description the callback function when the fallback image source changed
     * @description.zh-CN 备用图片源变化时的回调函数
     * @description.zh-TW 備用圖片源變化時的回調函數
     */
    onFallbackSrcChange?: (src?: string) => void;
} & Pick<React.InputHTMLAttributes<HTMLInputElement>, 'name'>;


/**
 * Component for displaying an avtar with upload and crop capability
 *
 * @author David Hsing
 */
const AvatarUploadField: React.ForwardRefExoticComponent<AvatarUploadProps & React.RefAttributes<AvatarUploadRef>> = React.forwardRef((props?: AvatarUploadProps, ref?: any) => {
    AvatarUploadField.displayName = 'AvatarUpload';

    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const editContext = React.useContext(EditOrReadOnlyContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-avatar-upload');
    const intlType = useIntl();

    // Initialize the default props
    const {
        shape = 'circle',
        cropEnabled = true,
        uploadEnabled = false,
    } = props ?? {};

    const fieldRef = React.useRef<HTMLDivElement>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [imageSrc, setImageSrc] = React.useState<string | undefined>(props?.imageSrc);
    const [fallbackSrc, setFallbackSrc] = React.useState<string | undefined>(props?.fallbackSrc);

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        isLoading: (): boolean => {
            return loading;
        },
        getImageSrc: (): string | undefined => {
            return imageSrc;
        },
        setImageSrc: (src?: string): void => {
            setImageSrc(src);
        },
        getFallbackSrc: (): string | undefined => {
            return fallbackSrc;
        },
        setFallbackSrc: (src?: string): void => {
            setFallbackSrc(src);
        }
    }));

    React.useEffect(() => {
        props?.onImageSrcChange?.(imageSrc);
    }, [imageSrc]);

    React.useEffect(() => {
        props?.onFallbackSrcChange?.(fallbackSrc);
    }, [fallbackSrc]);

    const handleBeforeUpload = (file: RcFile, fileList: RcFile[]) => {
        if (props?.uploadProps?.allowedFileTypes && !props.uploadProps.allowedFileTypes.some(item => file.type === item)) {
            if (!props?.uploadProps?.warnWithTypes) {
                messageApi.error(props?.localeProps?.disallowType || intlLocales.get([intlType.locale, 'disallowType']) || intlLocales.get(['en_US', 'disallowType']));
            } else {
                const template = props?.localeProps?.allowTypes || intlLocales.get([intlType.locale, 'allowTypes']) || intlLocales.get(['en_US', 'allowTypes']);
                const types = StringUtils.joinWith(props.uploadProps.allowedFileTypes.map(item => (item === 'image/jpeg') ? 'jpg' : StringUtils.substringAfterLast(item, '/')) as string[], '/');
                messageApi.error(StringUtils.formatBrace(template, types));
            }
            return false;
        }
        if (NumberUtils.isPositive(props?.uploadProps?.maxFileSize) && props?.uploadProps?.fileSizeUint) {
            let fileSize = file.size;
            switch (props.uploadProps.fileSizeUint) {
                case 'KB':
                    fileSize /= 1024;
                    break;
                case 'MB':
                    fileSize /= 1024 * 1024;
                    break;
                case 'GB':
                    fileSize /= 1024 * 1024 * 1024;
                    break;
                default:
                    break;
            }
            // @ts-ignore
            if (fileSize > props.uploadProps.maxFileSize) {
                const template = props?.localeProps?.maxFileSize || intlLocales.get([intlType.locale, 'maxFileSize']) || intlLocales.get(['en_US', 'maxFileSize']);
                messageApi.error(StringUtils.formatBrace(template, props.uploadProps.maxFileSize, props.uploadProps.fileSizeUint));
                return false;
            }
        }
        if (props?.uploadProps?.beforeUpload) {
            return props.uploadProps.beforeUpload(file, fileList);
        }
        return true;
    };

    const handleUploadChange: UploadProps['onChange'] = (info: any) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            FileUtils.readAsDataUrl(info.file.originFileObj as RcFile, url => {
                setLoading(false);
                setImageSrc(url);
            });
        }
        props?.uploadProps?.onChange?.(info);
    };

    const buildImageDom = () => {
        if (!imageSrc) {
            return undefined;
        }
        const innerDom = (
            <Image
                src={imageSrc}
                fallback={fallbackSrc}
                preview={false}
                {...props?.imageProps}
            />
        );
        return TooltipRender.renderTooltip(props?.tooltipCtrl, props?.tooltipProps, innerDom);
    };

    const buildAvatarPlaceholder = () => {
        if (props?.avatarProps?.icon) {
            return props.avatarProps.icon;
        }
        const innerDom = (
            <div className={`${clazzPrefix}-avatar-placeholder`}>
                <UserOutlined/>
            </div>
        );
        return TooltipRender.renderTooltip(props?.tooltipCtrl, props?.tooltipProps, innerDom);
    };

    const buildUploadPlaceholder = () => {
        if (typeof props?.uploadProps?.placeholder === 'function') {
            return props.uploadProps.placeholder();
        }
        if (props?.uploadProps?.placeholder) {
            return props.uploadProps.placeholder;
        }
        const innerDom = (
            <Space className={`${clazzPrefix}-upload-space`} size={4}>
                {loading ? <LoadingOutlined/> : <PlusOutlined/>}
                {props?.localeProps?.upload || intlLocales.get([intlType.locale, 'upload']) || intlLocales.get(['en_US', 'upload'])}
            </Space>
        );
        return TooltipRender.renderTooltip(props?.tooltipCtrl, props?.tooltipProps, innerDom);
    };

    const buildAvatarDom = () => {
        if (!uploadEnabled || editContext.mode === 'read' || props?.proFieldProps?.mode === 'read' || props?.proFieldProps?.readonly) {
            const omitAvatarProps = !props?.avatarProps ? {} : omit(props.avatarProps, ['className', 'size', 'icon']);
            return (
                <Avatar
                    className={classNames(`${clazzPrefix}-avatar`, props?.avatarProps?.className)}
                    shape={shape}
                    size={props?.avatarProps?.size ?? {xs: 24, sm: 32, md: 48, lg: 64, xl: 104, xxl: 128}}
                    icon={buildAvatarPlaceholder()}
                    src={buildImageDom()}
                    {...omitAvatarProps}
                />
            );
        }
        const omitUploadProps = !props?.uploadProps ? {} : omit(props.uploadProps, ['className', 'fileList', 'listType', 'onChange', 'allowedFileTypes', 'warnWithTypes', 'maxFileSize', 'fileSizeUint', 'placeholder']);
        const uploadDom = (
            <Upload
                className={classNames(`${clazzPrefix}-action-${shape}`, props?.uploadProps?.className)}
                name={props?.name}
                listType={props?.uploadProps?.listType ?? 'picture-card'}
                maxCount={1}
                showUploadList={false}
                beforeUpload={handleBeforeUpload}
                onChange={handleUploadChange}
                {...omitUploadProps}
            >
                {imageSrc ? buildImageDom() : buildUploadPlaceholder()}
            </Upload>
        );
        if (!cropEnabled) {
            return uploadDom;
        }
        const omitCropProps = !props?.cropProps ? {} : omit(props.cropProps, ['modalClassName', 'modalTitle', 'rotationSlider']);
        const cropModalTitle = props?.localeProps?.cropModalTitle || intlLocales.get([intlType.locale, 'cropModalTitle']) || intlLocales.get(['en_US', 'cropModalTitle']);
        return (
            <ImgCrop
                modalClassName={classNames(`${clazzPrefix}-crop`, props?.cropProps?.modalClassName)}
                modalTitle={props?.cropProps?.modalTitle ?? cropModalTitle}
                rotationSlider={props?.cropProps?.rotationSlider ?? true}
                {...omitCropProps}
            >
                {uploadDom}
            </ImgCrop>
        );
    };

    return (
        <div
            ref={fieldRef}
            className={classNames(clazzPrefix, props?.containerClazz)}
            style={props?.containerStyle}
        >
            {buildAvatarDom()}
        </div>
    );
});


// @ts-ignore
export const AvatarUpload = createField(AvatarUploadField) as typeof AvatarUploadField;
