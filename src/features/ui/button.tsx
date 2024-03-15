import React from "react";

interface Props {
    border?: string;
    color?: string;
    children?: React.ReactNode;
    height?: string;
    onClick: () => void;
    radius?: string;
    width?: string;
    text?: string;
}

const Button: React.FC<Props> = ({
    border,
    color,
    children,
    height,
    onClick,
    radius,
    width,
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="button"
            style={{
                backgroundColor: color,
                border,
                borderRadius: radius,
                height,
                width,
            }}
        >
            {children}
        </button>
    );
};

export default Button;
