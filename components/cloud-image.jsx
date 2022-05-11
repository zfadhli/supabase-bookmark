import Image from 'next/image'

export default function CloudImage({ src, alt, width, height }) {
  return (
    <figure className='relative py-4 [break-inside:avoid]'>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout='fill'
        objectFit='cover'
        placeholder='blur'
        blurDataURL={src}
      />
    </figure>
  )
}
