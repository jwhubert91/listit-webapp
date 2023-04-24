import React from "react"
import Layout from "@/components/layout"
import { HeadDataProps } from "@/types/headData"
import Link from "next/link"
import Input from "@/components/input"
import { BlackButton } from "@/components/buttons"
import { PAGE_PATHS } from "@/utilities/constants"

type Props = {}

function Login({}: Props) {
  const headData: HeadDataProps = {
    pageTitle: "Login",
    pageDescription: "Log in to your ListIt account",
  }
  return (
    <Layout headData={headData}>
      <div className="flex-1 flex flex-col text-center items-center py-5">
        <h1 className="text-5xl font-bold mb-5">Login</h1>
        <Link href={PAGE_PATHS.LOGIN} className="text-xl underline mb-5">
          Don't have an account? Sign Up
        </Link>
        <div className="w-full max-w-[500px]">
          <Input
            onChange={(e) => console.log(e.target.value)}
            containerClassName="w-full"
            inputClassName="w-full"
            placeholder="bob@loblaw.com"
            label="Email"
          />
          <BlackButton
            onButtonPress={() => console.log("submit")}
            className="w-full text-xl"
          >
            Login
          </BlackButton>
        </div>
      </div>
    </Layout>
  )
}

export default Login
