/**
 * @file Icon index
 * @author zhifou<zhifou80@163.com>
 */
import classNames from 'classnames';
import React, { type FC, type MouseEvent } from 'react';
import { IconProps, IKV } from './types';

import DownOutlinedSvg from './outlined/DownOutlined';
import LeftOutlinedSvg from './outlined/LeftOutlined';
import RightOutlinedSvg from './outlined/RightOutlined';
import UpOutlinedSvg from './outlined/UpOutlined';

import './style.less';

export const ICON_LABELS: IKV = {
    LeftOutlined: 'left',
    RightOutlined: 'right',
    UpOutlined: 'up',
    DownOutlined: 'down',
};

// eslint-disable-next-line @typescript-eslint/member-delimiter-style
const IconWrapper: FC<IconProps & { type?: string | any; children: any }> = ({
    type,
    style,
    className = '',
    children,
    onClick,
}) => {
    return (
        <span
            role="img"
            aria-label={ICON_LABELS[type]}
            className={classNames('zzicon', {
                [`zzicon-${ICON_LABELS[type]}`]: !!type,
                [className]: !!className,
            })}
            style={style ? style : {}}
            onClick={(e: MouseEvent) => {
                onClick && onClick(e);
            }}
        >
            {children}
        </span>
    );
};

export default IconWrapper;

// Outlined图标的定义
export const LeftOutlined = (props: IconProps) => (
    <IconWrapper {...props} type="LeftOutlined">
        <LeftOutlinedSvg />
    </IconWrapper>
);

export const RightOutlined = (props: IconProps) => (
    <IconWrapper {...props} type="RightOutlined">
        <RightOutlinedSvg />
    </IconWrapper>
);

export const UpOutlined = (props: IconProps) => (
    <IconWrapper {...props} type="UpOutlined">
        <UpOutlinedSvg />
    </IconWrapper>
);

export const DownOutlined = (props: IconProps) => (
    <IconWrapper {...props} type="DownOutlined">
        <DownOutlinedSvg />
    </IconWrapper>
);
