import React from 'react'

interface ButtonProps {
    children?: React.ReactNode
    buttonClass?: string
    buttonName?: string
    buttonType?: "button" | "submit" | "reset"
    onButtonClick?: () => void
}

export const Button = ({children, buttonClass, buttonName, buttonType, onButtonClick}: ButtonProps) => (
    <div>
        <button className={buttonClass}
                type={buttonType}
                onClick={onButtonClick}>
            {children} {buttonName}
        </button>
    </div>
);