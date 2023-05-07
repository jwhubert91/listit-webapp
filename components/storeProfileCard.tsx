import React from "react"

// packages
import Image from "next/image"
import Link from "next/link"

// utilities
import { DAYS_OF_WEEK, PAGE_PATHS } from "@/utilities/constants"
import StoreProfileImage from "./storeProfileImage"

function StoreProfileCard({ className = "", isMerchant = false }) {
  const storeObject = {
    id: "12345",
    slug: "us-11209-peace-by-piece-thrift-store",
    name: "Peace by Piece Thrift Store",
    profileimageUrl:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    neighborhood: "Bay Ridge",
    streetAddress: "6931 3rd Ave",
    unitNumber: "",
    locality: "Brooklyn",
    region: "NY",
    postalCode: "11209",
    country: "US",
    phoneNumber: "",
    phoneVerificationStatus: false,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor il`,
    pickupHoursObject: {
      0: {
        start: null,
        end: null,
      },
      1: {
        start: 11,
        end: 19,
      },
      2: {
        start: 11,
        end: 19,
      },
      3: {
        start: 11,
        end: 19,
      },
      4: {
        start: 11,
        end: 19,
      },
      5: {
        start: 11,
        end: 19,
      },
      6: {
        start: 10,
        end: 20,
      },
    },
  }

  const today = new Date()
  const codeDayNumber = today.getDay()
  const pickupHoursArray = Object.values(storeObject.pickupHoursObject)
  const pickUpHoursToday = pickupHoursArray[codeDayNumber]

  const storeEditUrl = `${PAGE_PATHS.STORE_EDIT}/${storeObject.id}`

  return (
    <div
      className={`p-5 relative border border-gray-300 rounded-lg w-full tablet:grid tablet:grid-cols-[250px_500px] tablet:gap-x-5 tablet:items-center tablet:justify-center mb-5 ${className}`}
    >
      {isMerchant && (
        <Link
          href={storeEditUrl}
          className="absolute top-1 right-1 text-sm underline"
        >
          Edit Store Profile
        </Link>
      )}
      <StoreProfileImage
        imageUrl={storeObject.profileimageUrl}
        altText={storeObject.name}
        className="mb-2 mx-auto tablet:mx-0"
      />
      <div className="text-center tablet:text-left">
        <h1 className="text-xl font-medium">{storeObject.name}</h1>
        <p className="text-sm">{storeObject.neighborhood}</p>
        <p>{`${storeObject.streetAddress} ${storeObject.unitNumber}`}</p>
        <p className="mb-2">{`${storeObject.locality}, ${storeObject.region} ${storeObject.postalCode}`}</p>
        <p className="text-sm max-w-[500px] mx-auto tablet:mx-0 mb-2">
          {storeObject.description}
        </p>
        <p className="mb-4">
          <span className="font-bold">Pickup Hours Today:{` `}</span>
          {pickUpHoursToday.start == null && "Closed"}
        </p>
        <div className="text-sm">
          <span className="font-bold">Weekly Pickup Hours:</span>
          <ul>
            {pickupHoursArray.map((dayHoursRange, idx) => {
              const hoursString =
                dayHoursRange.start == null
                  ? "Closed"
                  : `${dayHoursRange.start} - ${dayHoursRange.end}`
              return <li key={idx}>{`${DAYS_OF_WEEK[idx]}: ${hoursString}`}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StoreProfileCard
