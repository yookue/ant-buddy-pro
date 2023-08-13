## PageFooter

Similar to Ant Design Pro [GlobalFooter](https://github.com/ant-design/pro-components/blob/master/packages/layout/src/components/GlobalFooter/index.tsx), with more customization for css classes and styles.

### Import component

```jsx | pure
import {PageFooter} from '@yookue/ant-buddy-pro';
```

### Using component

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

### Properties

<API src="@/layout/PageFooter/index.tsx" hideTitle></API>
