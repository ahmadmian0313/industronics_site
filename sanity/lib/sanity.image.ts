// sanity/lib/sanity.image.ts
import createImageUrlBuilder from '@sanity/image-url'
import { client } from './sanity.client'

const imageBuilder = createImageUrlBuilder(client)

export function urlForImage(source: { asset: { _ref: string } }) {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}
