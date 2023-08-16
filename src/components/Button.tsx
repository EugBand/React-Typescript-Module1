import React from 'react'

interface ButtonProps {
    children?: React.ReactNode
    buttonClass: string
    name?: string
    onButtonClick: () => void
}

export function Button({children, buttonClass, name, onButtonClick }: ButtonProps) {
    return (
            <div>
                <button className={buttonClass}
                        onClick={onButtonClick}>
                    { children } { name}
                </button>
            </div>
    )
}