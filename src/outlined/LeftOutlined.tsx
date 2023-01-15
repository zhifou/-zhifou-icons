import React, { FC } from 'react';
import { IconProps } from '../types';

/* eslint-disable */
const LeftOutlined: FC<IconProps> = ({ className, onClick }) => {
    return (
        <svg
            fill="currentColor"
            height="1em"
            width="1em"
            onClick={onClick}
            className={className}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>LeftOutlined</title>
            <path
                fill="currentColor"
                d="m15.44 2.646.706.708a.5.5 0 0 1 0 .707l-7.585 7.585a.5.5 0 0 0 0 .708l7.585 7.585a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 0 1-.707 0l-9-9a.5.5 0 0 1 0-.708l9-9a.5.5 0 0 1 .707 0Z"
            />
        </svg>
    );
};

export default LeftOutlined;
