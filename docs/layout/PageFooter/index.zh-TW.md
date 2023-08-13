## PageFooter

與 Ant Design Pro [GlobalFooter](https://github.com/ant-design/pro-components/blob/master/packages/layout/src/components/GlobalFooter/index.tsx) 類似, 但支持更多自定義的 css 樣式。

### 導入組件

```jsx | pure
import {PageFooter} from '@yookue/ant-buddy-pro';
```

### 使用組件

```jsx | pure
export default () => {
    return (
        <PageFooter
            links={[
                {
                    key: 'ant-buddy-pro',
                    title: 'ant-buddy-pro',
                    href: 'https://github.com/yookue/ant-buddy-pro',
                    blankTarget: true,
                }
            ]}
            copyright={'2023 Yookue Ltd'}
            wrapperStyle={{
                width: '100%',
                backgroundColor: 'transparent',
                padding: 0,
                position: 'absolute',
                bottom: '6px',
            }}
            puppetStyle={{
                margin: '0 0 12px 0',
                padding: '0 0',
            }}
            linkItemStyle={{
                color: '#ddd',
            }}
            copyrightStyle={{
                color: '#fff'
            }}
        />
    );
}
```

### 組件屬性

<API src="@/layout/PageFooter/index.tsx" hideTitle></API>
