import React from 'react'

interface FormProps {
    children?: React.ReactNode
    formClass?: string
    onFormSubmit: (e : React.FormEvent) => Promise<void>
}

export const Form = ({children, formClass, onFormSubmit}: FormProps) => (
    <form onSubmit={onFormSubmit} className={formClass}>
        {children}
    </form>
);