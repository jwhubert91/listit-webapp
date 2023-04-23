import imageUrlBuilder from "@sanity/image-url"
import {
  getFileAsset,
  getImage,
  getImageAsset,
  buildImageUrl,
} from "@sanity/asset-utils"
import moment from "moment"
import { useNextSanityImage } from "next-sanity-image"

// sanity imports
import { sanityClient, sanityConfig } from "@/lib/sanity"

export function getSanityImageUrl(sanityImage) {
  const builder = imageUrlBuilder(sanityClient)
  return builder.image(sanityImage)
}

export function getNextSanityImageProps({ mySanityImageData }) {
  const imageProps = useNextSanityImage(sanityClient, mySanityImageData)
  return imageProps
}

export function getSanityFileUrl(sanityFile) {
  const sanityAsset = getFileAsset(sanityFile, {
    projectId: sanityConfig.projectId,
    dataset: sanityConfig.dataset,
  })
  return sanityAsset.url
}

export function getSanityImage(sanityImageRef) {
  const sanityImage = getImage(sanityImageRef, {
    projectId: sanityConfig.projectId,
    dataset: sanityConfig.dataset,
  })
  return sanityImage
}

export function getSanityImageAsset(sanityImageRef) {
  const sanityImageAsset = getImageAsset(sanityImageRef, {
    projectId: sanityConfig.projectId,
    dataset: sanityConfig.dataset,
  })
  return sanityImageAsset.url
}

export const publishDateString = (publishDate) => {
  return moment(publishDate).format("MMM D, YYYY")
}
