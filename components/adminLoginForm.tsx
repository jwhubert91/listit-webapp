import React, { useState } from "react"
import { GoodButton } from "./buttons"

type Props = {
  onSuccess: () => void
}

function adminLoginForm({ onSuccess }: Props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitError, setIsSubmitError] = useState(false)

  const actualEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL
  const actualPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD

  const handleSubmit = () => {
    setIsSubmitError(false)
    console.log({
      email,
      actualEmail,
      password,
      actualPassword,
      emailsMatch: email == actualEmail,
      passwordsMatch: password == actualPassword,
    })
    if (email == actualEmail && password == actualPassword) {
      onSuccess()
    } else {
      setIsSubmitError(true)
    }
  }

  return (
    <div className="w-full max-w-[500px] border rounded-md border-black p-4 mx-auto">
      <h3 className="font-medium text-2xl mb-5">Admin Login</h3>
      <div className="mb-5">
        <label>Email</label>
        <input
          type="email"
          required
          className="border p-3 block w-full"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </div>
      <div className="mb-5">
        <label>Password</label>
        <input
          type="password"
          required
          className="border p-3 block w-full"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </div>
      {isSubmitError && (
        <p className="mb-5 italic text-xl">
          There was an error. Please try again later.
        </p>
      )}
      <div className="text-center">
        <GoodButton title="Submit" onButtonPress={handleSubmit} />
      </div>
    </div>
  )
}

export default adminLoginForm
