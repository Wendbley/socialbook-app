
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface PictureProps {
    photo: StaticImageData
    alt: string
    style?: string
}
const Picture = ({photo,alt,style}:PictureProps) => {
  return (
    <Image src={photo} sizes={style} alt={alt}/>
  )
}

export default Picture