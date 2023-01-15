import React, { FC } from 'react';
import { IconProps } from '../types';

/* eslint-disable */
const RightOutlined: FC<IconProps> = ({ className, onClick }) => {
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
            <title>RightOutlined</title>
            <path
                d="m7.646 2.646-.707.708a.5.5 0 0 0 0 .707l7.585 7.585a.5.5 0 0 1 0 .708L6.94 19.939a.5.5 0 0 0 0 .707l.707.708a.5.5 0 0 0 .708 0l9-9a.5.5 0 0 0 0-.708l-9-9a.5.5 0 0 0-.708 0Z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

export default RightOutlined;
