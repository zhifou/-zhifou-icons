/**
 * @file Icon types
 * @author zhifou<zhifou80@163.com>
 */
import { type CSSProperties, type MouseEvent } from "react";

export interface IKV {
    [key: string]: string;
    [key: number]: string;
}

export interface IconProps {
    /**
     * @description 类名称
     * @type string
     * @default "可选"
     */
    className?: string;
    /**
     * @description 样式对象
     * @type CSSProperties
     * @default "可选"
     */
    style?: CSSProperties | null;
    /**
     * @description 点击事件
     * @type (event: MouseEvent) => void
     * @default "可选"
     */
    onClick?: (event: MouseEvent) => void;
}
