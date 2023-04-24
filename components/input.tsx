import React from "react"

type Props = {
  label?: string
  placeholder?: string
  value?: string
  containerClassName?: string
  inputClassName?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({
  label = "",
  placeholder = "",
  containerClassName = "",
  inputClassName = "",
  onChange,
  value = "",
}: Props) {
  return (
    <div className={`mb-1 text-left ${containerClassName}`}>
      <label className="text-sm">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        className={`text-lg px-5 py-2 focus:outline-black ${inputClassName}`}
        value={value}
      />
    </div>
  )
}

export default Input
