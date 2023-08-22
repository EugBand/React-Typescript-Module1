import React from 'react'

interface InputProps {
    inputClass?: string
    defaultValue?: string | number
    placeholder?: string | number
    value?: string | number
    onInputChange: (e : React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({inputClass, defaultValue, onInputChange}: InputProps) => (
    <input type="text"
           className={inputClass}
           defaultValue={defaultValue}
           onChange={onInputChange}
    />
);