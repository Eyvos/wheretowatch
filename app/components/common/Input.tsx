'use client'
import React from 'react'

interface Props {
    name?: string,
    style? : string
}

const Input = ({name, style}: Props) => {
  return (
        <input className={style} name={name} type="text" placeholder={name}/>
  )
}

export default Input