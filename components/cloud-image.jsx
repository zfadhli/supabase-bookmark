import Image from 'next/image'

export default function CloudImage({ src, alt }) {
  return (
    <figure
      className={`relative w-full aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 [break-inside:avoid] `}
    >
      <Image
        src={src}
        alt={alt}
        layout='fill'
        objectFit='cover'
        placeholder='blur'
        blurDataURL={src}
      />
    </figure>
  )
}
