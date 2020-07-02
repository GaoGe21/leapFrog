import React, { useState } from "react";
import classnames from "classnames";

export interface BaseAlertProps {
    message: string;
    description?: string;
    className?: string;
    closable?: boolean;
    type?: AlertType;
    onClose?: () => void;
}

export enum AlertType {
    Success = "success",
    Info = "info",
    Warning = "warning",
    Error = "error"
}

const Alert: React.FC<BaseAlertProps> = (props) => {
    const [isHidden, setHidden] = useState(false);

    const { message, description, className, type, closable } = props;
    const alertStyle = classnames("alert", className, { [`alert-${type}`]: type });
    const onCloseAlert = () => {
        setHidden(true);
    }
    return <>
        {!isHidden &&
            <div className={alertStyle}>
                <span className="alert-message">{message}</span>
                <span className="alert-description">{description}</span>
                {closable &&
                    <span className="alert-close-icon" onClick={onCloseAlert}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-Cancelcontrol"></use>
                        </svg>
                    </span>}
            </div>}
    </>;
}

export { Alert };