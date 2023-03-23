import React from 'react'

const Input = (props) => {
    const {placeholder, type, id, value, onChange, onBlur, filled} = props;
  return (
    <input className={` ${filled? `bg-bgGreen` : `bg-white`} outline-none font-bold border-2  p-2 rounded w-[384px] placeholder-light`} placeholder={placeholder} type={type} id={id} name={id} autoComplete='off' value={value} onChange={onChange} onBlur={onBlur} readOnly={filled}></input>
  )
}

export default Input