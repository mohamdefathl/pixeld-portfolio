import React from 'react'
import './button.css'
interface Props {
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode
}
export const Button: React.FC<Props> = ({ children, disabled, onClick }) => {
    return (
        <button
            className="button-14"
            role="button"
            onClick={onClick}
            disabled={disabled}
        >
            <div className="button-14-top text">
                {children}
            </div>
            <div className="button-14-bottom"></div>
            <div className="button-14-base"></div>
        </button>
    )
}
