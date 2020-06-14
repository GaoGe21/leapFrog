import React from "react";
import classnames from "classnames";

export interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    btnType?: ButtonType;
    size?: ButtonSize;
    children?: React.ReactNode;
    href?: string;
}

export enum ButtonType {
    Primary = "primary",
    Default = "default", //default
    Danger = "danger",
    Link = "link"
}

export enum ButtonSize {
    Large = "large",
    Small = "small",
    Normal = "normal" //default
}

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement> & BaseButtonProps;
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement> & BaseButtonProps;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
// Partial makes all attributes optional

const Button: React.FC<ButtonProps> = (props) => {
    const { className, disabled, btnType, size, children, href, ...restProps } = props;
    // btn, btn-large, btn-primary
    const btnStyle = classnames("btn", className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        "disabled": (btnType === ButtonType.Link && disabled)
    });
    return <>
        {btnType === ButtonType.Link && href ?
            <a className={btnStyle} href={href} {...restProps}>
                {children}
            </a> :
            <button className={btnStyle} disabled={disabled} {...restProps}>
                {children}
            </button>}
    </>;
}

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default,
    size: ButtonSize.Normal
}

export { Button };