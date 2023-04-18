import { createClient } from "next-sanity"

export const sanityConfig = {
  projectId: "wh8g82gh",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
}

export const sanityClient = createClient(sanityConfig)
