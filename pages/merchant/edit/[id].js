import React from "react"

// packages
import { useRouter } from "next/router"

// components
import Layout from "@/components/layout"
import Input from "@/components/input"
import { BlackButton } from "@/components/buttons"
import TextArea from "@/components/textArea"
import StoreProfileImage from "@/components/storeProfileImage"
import HourSelectDropdown from "@/components/hourSelectDropdown"

// utilties
import { PAGE_PATHS } from "@/utilities/constants"
import { useState } from "react"
import { useEffect } from "react"

function StoreEdit() {
  const headData = {
    pageTitle: "Store Profile Edit",
    pageDescription: "Edit your store profile",
  }

  const router = useRouter()

  const [storePhotoFile, setStorePhotoFile] = useState(null)

  function handlePhotoFileChange(e) {
    setStorePhotoFile(e.target.files[0])
  }

  useEffect(() => {
    console.log(storePhotoFile)
  }, [storePhotoFile])

  function handleSubmit() {
    console.log("Submitted")
    router.push(`${PAGE_PATHS.STORE}/slug`)
  }

  return (
    <Layout headData={headData}>
      <div className="flex-1 flex flex-col w-full text-center items-center py-5">
        <h1 className="text-3xl font-bold mb-5">Store Edit Page</h1>
        <div className="w-full max-w-[500px] mb-3">
          <h3 className="text-left font-bold mb-3">Basics</h3>
          <div className="mb-1 text-left w-full">
            <label className="text-sm block mb-1">Store Photo:</label>
            <StoreProfileImage imageUrl="" altText="" />
            <p className="text-sm italic mt-3">
              Upload a picture to help your customers identify your store
            </p>
            <input
              type="file"
              onChange={(e) => handlePhotoFileChange(e)}
              className={`text-lg py-2 mb-3`}
              accept="image/*"
            />
          </div>
          <Input
            onChange={(e) => console.log(e.target.value)}
            containerClassName="w-full mb-3"
            inputClassName="w-full"
            placeholder="What's the name of your store?"
            label="Store Name"
          />
          <TextArea
            onChange={(e) => console.log(e.target.value)}
            containerClassName="w-full"
            inputClassName="w-full"
            placeholder="How do you describe your store?"
            label="Store Description - 256 characters"
            maxLength={256}
          />
        </div>
        <div className="w-full max-w-[500px] mb-3">
          <h3 className="text-left font-bold mb-3">Pickup Hours</h3>
          <p className="text-sm italic text-left mb-3">
            When can customers pick up their items?
          </p>
          <div className="flex items-start justify-start text-left mb-1">
            <label className="mr-2 w-[90px]">Sunday:</label>
            <HourSelectDropdown />
            <span className="mx-2">to</span>
            <HourSelectDropdown />
          </div>
          <div className="flex items-start justify-start text-left mb-1">
            <label className="mr-2 w-[90px]">Monday:</label>
            <HourSelectDropdown />
            <span className="mx-2">to</span>
            <HourSelectDropdown />
          </div>
          <div className="flex items-start justify-start text-left mb-1">
            <label className="mr-2 w-[90px]">Tuesday:</label>
            <HourSelectDropdown />
            <span className="mx-2">to</span>
            <HourSelectDropdown />
          </div>
          <div className="flex items-start justify-start text-left mb-1">
            <label className="mr-2 w-[90px]">Wednesday:</label>
            <HourSelectDropdown />
            <span className="mx-2">to</span>
            <HourSelectDropdown />
          </div>
          <div className="flex items-start justify-start text-left mb-1">
            <label className="mr-2 w-[90px]">Thursday:</label>
            <HourSelectDropdown />
            <span className="mx-2">to</span>
            <HourSelectDropdown />
          </div>
          <div className="flex items-start justify-start text-left mb-1">
            <label className="mr-2 w-[90px]">Friday:</label>
            <HourSelectDropdown />
            <span className="mx-2">to</span>
            <HourSelectDropdown />
          </div>
          <div className="flex items-start justify-start text-left mb-1">
            <label className="mr-2 w-[90px]">Saturday:</label>
            <HourSelectDropdown />
            <span className="mx-2">to</span>
            <HourSelectDropdown />
          </div>
        </div>
        <div className="w-full max-w-[500px] mb-3">
          <h3 className="text-left font-bold">Address</h3>
          <Input
            onChange={(e) => console.log(e.target.value)}
            containerClassName="w-full"
            inputClassName="w-full"
            placeholder=""
            label="Store Address"
          />
          <Input
            onChange={(e) => console.log(e.target.value)}
            containerClassName="w-full"
            inputClassName="w-full"
            placeholder=""
            label="Unit No."
          />
          <div className="grid grid-cols-[2fr_1fr] gap-x-5">
            <Input
              onChange={(e) => console.log(e.target.value)}
              inputClassName="w-full"
              placeholder=""
              label="City"
            />
            <Input
              onChange={(e) => console.log(e.target.value)}
              inputClassName="w-full"
              placeholder=""
              label="State"
            />
          </div>
          <Input
            onChange={(e) => console.log(e.target.value)}
            containerClassName="w-full mb-5"
            inputClassName="w-full"
            placeholder=""
            label="Zip Code"
          />
          <BlackButton
            onButtonPress={() => console.log("submit")}
            className="w-full text-xl"
          >
            Submit
          </BlackButton>
        </div>
      </div>
    </Layout>
  )
}

export default StoreEdit
