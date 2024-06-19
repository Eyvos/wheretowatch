'use client'
import React from 'react'

interface Props {
    name?: string,
    placeholder? : string,
    style? : string,
}

const Input = ({name, placeholder, style}: Props) => {
  return (
        <div>
          <p className="text-sm ml-3 mb-1">{name}</p>
          <input className={`${style} placeholder:text-sm`} name={name} type="text" placeholder={placeholder}/>
        </div>
  )
}

export default Input