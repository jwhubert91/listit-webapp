import React from "react"

// packages
import Image from "next/image"
import { BiStoreAlt } from "react-icons/bi"

interface StoreProfileImageProps {
  imageUrl: string
  altText: string
  className?: string
}

function StoreProfileImage({
  imageUrl,
  altText,
  className = "",
}: StoreProfileImageProps) {
  return (
    <>
      {imageUrl ? (
        <div
          className={`w-[150px] h-[150px] tablet:w-[250px] tablet:h-[250px] relative ${className}`}
        >
          <Image
            src={imageUrl}
            alt={altText}
            className="object-cover absolute rounded-full border border-black"
            fill={true}
            unoptimized={true}
          />
        </div>
      ) : (
        <div className="w-[150px] h-[150px] tablet:w-[250px] tablet:h-[250px] rounded-full border border-black flex items-center justify-center bg-gray-200">
          <BiStoreAlt className="w-[75px] h-[75px] tablet:w-[125px] tablet:h-[125px]" />
        </div>
      )}
    </>
  )
}
3
export default StoreProfileImage
