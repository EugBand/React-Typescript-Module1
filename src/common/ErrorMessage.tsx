import React from 'react'

interface ErrorMessageProps {
    error: string
}

export const ErrorMessage = ({error}: ErrorMessageProps) => (
    <p className="text-center text-red-600">{error}</p>
);