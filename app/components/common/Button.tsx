'use client'
import React, { ReactNode } from 'react'

interface Props {
    style?: string,
    icon?: string,
    onClick: () => void,
    children: ReactNode
}

const Button = ({style, icon, onClick, children}: Props) => {
    return (
        <button className={style} type="button" onClick={onClick}>{children}</button>
    )
}

export default Button