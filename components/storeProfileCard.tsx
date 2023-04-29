import React from "react"
import Image from "next/image"

function StoreProfileCard({ className = "" }) {
  return (
    <div
      className={`p-5 border border-gray-300 rounded-lg w-full tablet:grid tablet:grid-cols-[250px_500px] tablet:gap-x-5 tablet:items-center tablet:justify-center mb-5 ${className}`}
    >
      <div className="w-[150px] h-[150px] tablet:w-[250px] tablet:h-[250px] mb-2 mx-auto tablet:mx-0 relative">
        <Image
          src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="store name"
          className="object-cover absolute rounded-full border border-black"
          fill={true}
          unoptimized={true}
        />
      </div>
      <div className="text-center tablet:text-left">
        <h1 className="text-xl font-medium">Store Name</h1>
        <p className="text-sm">Neighborhood</p>
        <p>123 Fake Street #9</p>
        <p className="mb-2">City, State 12345</p>
        <p className="text-sm max-w-[500px] mx-auto tablet:mx-0 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor il
        </p>
        <p className="text-sm">
          <span className="font-bold">Pickup Hours Today:{` `}</span>
          9:00 AM - 5:00 PM
        </p>
      </div>
    </div>
  )
}

export default StoreProfileCard
