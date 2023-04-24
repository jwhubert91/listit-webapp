import React from "react"

type Props = {
  label?: string
  placeholder?: string
  value?: string
  containerClassName?: string
  inputClassName?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputType?: "text" | "email" | "password"
}

function Input({
  label = "",
  placeholder = "",
  containerClassName = "",
  inputClassName = "",
  onChange,
  value = "",
  inputType = "text",
}: Props) {
  return (
    <div className={`mb-1 text-left ${containerClassName}`}>
      <label className="text-sm">{label}</label>
      <input
        type={inputType}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        className={`text-lg px-5 py-2 focus:outline-black ${inputClassName}`}
        value={value}
      />
    </div>
  )
}

export default Input
