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

import './index.less';

export const ICON_LABELS: IKV = {
    LeftOutlined: 'left',
    RightOutlined: 'right',
    UpOutlined: 'up',
    DownOutlined: 'down',
};

// eslint-disable-next-line @typescript-eslint/member-delimiter-style
const Icon: FC<IconProps & { type?: string | any; children: any }> = ({
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

export default Icon;

// Outlined图标的定义
export const LeftOutlined = (props: IconProps) => (
    <Icon {...props} type="LeftOutlined">
        <LeftOutlinedSvg />
    </Icon>
);

export const RightOutlined = (props: IconProps) => (
    <Icon {...props} type="RightOutlined">
        <RightOutlinedSvg />
    </Icon>
);

export const UpOutlined = (props: IconProps) => (
    <Icon {...props} type="UpOutlined">
        <UpOutlinedSvg />
    </Icon>
);

export const DownOutlined = (props: IconProps) => (
    <Icon {...props} type="DownOutlined">
        <DownOutlinedSvg />
    </Icon>
);
