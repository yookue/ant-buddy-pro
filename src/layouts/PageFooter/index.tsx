
import React from 'react';
import {ConfigProvider, Layout} from 'antd';
import {CopyrightOutlined} from '@ant-design/icons';
import classNames from 'classnames';
import './index.less';


export type PageFooterProps = {
    /**
     * @description The hyperlinks array
     * @description.zh-CN 超链接数组
     * @description.zh-TW 超鏈接數組
     */
    links?: {
        key: string;
        text?: React.ReactNode;
        title?: string;
        href?: string;
        target?: string;
        clazz?: string;
        style?: React.CSSProperties;
    }[] | false;

    /**
     * @description The copyright text
     * @description.zh-CN 版权文字(无需版权标前缀)
     * @description.zh-TW 版權文字(無需版權標前綴)
     */
    copyright?: React.ReactNode;

    /**
     * @description The CSS class name for footer div
     * @description.zh-CN 页脚 div CSS 类名
     * @description.zh-TW 頁腳 div CSS 類名
     */
    containerClazz?: string;

    /**
     * @description The CSS style for footer div
     * @description.zh-CN 页脚 div CSS 样式
     * @description.zh-TW 頁腳 div CSS 樣式
     */
    containerStyle?: React.CSSProperties;

    /**
     * @description The CSS class prefix for child div of footer
     * @description.zh-CN 子容器 div 的 CSS 类名前缀
     * @description.zh-TW 子容器 div 的 CSS 類名前綴
     * @default buddy-page-footer
     */
    vesselClazzPrefix?: string;

    /**
     * @description The extra CSS class names for child div of footer
     * @description.zh-CN 子容器 div 的附加 CSS 类名前缀
     * @description.zh-TW 子容器 div 的附加 CSS 類名前綴
     */
    vesselAppendClazz?: string;

    /**
     * @description The CSS style for child div of footer
     * @description.zh-CN 子容器 div 的 CSS 样式
     * @description.zh-TW 子容器 div 的 CSS 樣式
     */
    vesselStyle?: React.CSSProperties;

    /**
     * @description The CSS class name for each hyperlink
     * @description.zh-CN 超链接 CSS 类名
     * @description.zh-TW 版權 CSS 類名
     */
    linksClazz?: string;

    /**
     * @description The CSS style for each hyperlink
     * @description.zh-CN 超链接 CSS 样式
     * @description.zh-TW 超鏈接 CSS 樣式
     */
    linksStyle?: React.CSSProperties;

    /**
     * @description The CSS class name for copyright div
     * @description.zh-CN 版权 div 的 CSS 类名
     * @description.zh-TW 版權 div 的 CSS 類名
     */
    copyrightClazz?: string;

    /**
     * @description The CSS style for copyright div
     * @description.zh-CN 版权 div 的 CSS 样式
     * @description.zh-TW 版權 div 的 CSS 樣式
     */
    copyrightStyle?: React.CSSProperties;
}

const {Footer} = Layout;

const PageFooter: React.FC<PageFooterProps> = (props?: PageFooterProps) => {
    const context = React.useContext(ConfigProvider.ConfigContext);
    if ((!props?.links || props?.links?.length === 0) && !props?.copyright) {
        return null;
    }
    const prefix = context.getPrefixCls(props?.vesselClazzPrefix || 'buddy-page-footer');
    const clazz = classNames(prefix, props?.vesselAppendClazz);

    return (
        <Footer className={props?.containerClazz} style={props?.containerStyle}>
            <div className={clazz} style={props?.vesselStyle}>
                {props?.links && (
                    <div className={`${prefix}-links`} style={props?.linksStyle}>
                        {
                            props?.links.map((item) => (
                                <a
                                    key={item.key}
                                    className={item?.clazz}
                                    href={item?.href}
                                    title={item?.title}
                                    target={item?.target || '_blank'}
                                    rel='noopener noreferrer'
                                    style={item?.style}
                                >
                                    {item?.text}
                                </a>
                            ))
                        }
                    </div>
                )}
                {props?.copyright && (
                    <div className={`${prefix}-copyright`} style={props?.copyrightStyle}>
                        <React.Fragment>
                            <CopyrightOutlined/> {props?.copyright}
                        </React.Fragment>
                    </div>
                )}
            </div>
        </Footer>
    );
}

export default PageFooter;
