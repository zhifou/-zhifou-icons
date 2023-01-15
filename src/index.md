---
title: Icon 图标
nav:
    title: 组件
    order: 1
group:
    title: 通用
    order: 1
toc: content
---

## 图标用法

```tsx
import React from 'react';
import { LeftOutlined } from '@zhifou/icons';

export default () => (
    <div>
        <LeftOutlined />
        <LeftOutlined style={{ color: '#f0f', fontSize: '32px' }} />
        <LeftOutlined className="icon-cls" />
    </div>
);
```

## 线框风格

```tsx
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
    LeftOutlined,
    RightOutlined,
    UpOutlined,
    DownOutlined,
} from '@zhifou/icons';

import './docs.css';

const IconWrapper = (props) => {
    const { children, name } = props;

    return (
        <CopyToClipboard
            text={`<${name} />`}
            onCopy={() => {
                alert(`复制成功 <${name} />`);
            }}
        >
            <div className="icon-wrapper">
                <div className="icon-wrapper-icon">{children}</div>
                <span className="icon-wrapper-name">{name}</span>
            </div>
        </CopyToClipboard>
    );
};

export default () => (
    <div className="icon">
        <IconWrapper name="LeftOutlined">
            <LeftOutlined className="icon-style" />
        </IconWrapper>
        <IconWrapper name="RightOutlined">
            <RightOutlined className="icon-style" />
        </IconWrapper>
        <IconWrapper name="UpOutlined">
            <UpOutlined className="icon-style" />
        </IconWrapper>
        <IconWrapper name="DownOutlined">
            <DownOutlined className="icon-style" />
        </IconWrapper>
    </div>
);
```

## 实底风格

```tsx
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {  } from '@zhifou/icons';

import './docs.css';

const IconWrapper = (props) => {
    const { children, name } = props;

    return (
        <CopyToClipboard
            text={`<${name} />`}
            onCopy={() => {
                alert(`复制成功 <${name} />`);
            }}
        >
            <div className="icon-wrapper">
                <div className="icon-wrapper-icon">{children}</div>
                <span className="icon-wrapper-name">{name}</span>
            </div>
        </CopyToClipboard>
    );
};

export default () => (
    <div className="icon">

    </div>
);
```

## 双色风格

```tsx
import React from 'react';

export default () => <div></div>;
```

## API 说明

<API id="Icon"></API>
