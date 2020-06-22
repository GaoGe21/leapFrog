import React from "react";
import classnames from "classnames";

export interface BaseAlertProps {
    message: string;
    description?: string;
    className?: string;
    closable?: boolean;
    type?: AlertType;
}

export enum AlertType {
    Success = "success",
    Info = "info",
    Warning = "warning",
    Error = "error"
}

const Alert: React.FC<BaseAlertProps> = (props) => {
    const { message, description, className, type } = props;
    const alertStyle = classnames("alert", className, { [`alert-${type}`]: type });
    return <>
        <div className={alertStyle}>
            <span className="alert-message">{message}</span>
            <span className="alert-description">{description}</span>
        </div>
    </>;
}

export { Alert };