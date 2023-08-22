import React, {createContext, useState} from 'react'

interface IModalContext {
    modalNew: boolean
    modalEdit: boolean
    openNew: () => void
    openEdit: () => void
    close: () => void
}

export const ModalContext = createContext<IModalContext>({
    modalNew: false,
    modalEdit: false,
    openNew: () => {
    },
    openEdit: () => {
    },
    close: () => {
    }
})

export const ModalState = ({children}: { children: React.ReactNode }) => {
    const [modalNew, setModalNew] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)

    const openNew = () => setModalNew(true)

    const openEdit = () => setModalEdit(true)

    const close = () => {
        setModalEdit(false);
        setModalNew(false)
    }

    return (
        <ModalContext.Provider value={{modalNew, modalEdit, openNew, openEdit, close}}>
            {children}
        </ModalContext.Provider>
    )
}