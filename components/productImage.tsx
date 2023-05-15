import React from "react"

// packages
import Image from "next/image"
import { BiCamera } from "react-icons/bi"

interface ProductImageProps {
  imageUrl: string
  altText: string
  className?: string
}

function ProductImage({
  imageUrl,
  altText,
  className = "",
}: ProductImageProps) {
  return (
    <>
      {imageUrl ? (
        <div
          className={`w-[150px] h-[150px] tablet:w-[250px] tablet:h-[250px] relative ${className}`}
        >
          <Image
            src={imageUrl}
            alt={altText}
            className="object-cover absolute border border-black"
            fill={true}
            unoptimized={true}
          />
        </div>
      ) : (
        <div
          className={`w-[150px] h-[150px] tablet:w-[250px] tablet:h-[250px] border border-black flex items-center justify-center bg-gray-200 ${className}`}
        >
          <BiCamera className="w-[75px] h-[75px] tablet:w-[125px] tablet:h-[125px]" />
        </div>
      )}
    </>
  )
}
3
export default ProductImage
