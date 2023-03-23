import React from 'react'

const Button = (props) => {
    const {btnText, type} = props;
  return (
    <button type={type} className="bg-success p-5 rounded text-white w-[120px] h-[62px] text-xl flex items-center justify-center">{btnText}</button>
  )
}

export default Button