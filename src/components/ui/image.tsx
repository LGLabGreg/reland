import NextImage from 'next/image';

type ImageProps = {
  src: string;
  alt: string;
  className: string;
};

const Image = ({ src, alt, className, ...props }: ImageProps) => {
  return (
    <NextImage
      src={src}
      width={0}
      height={0}
      sizes="100vw"
      alt={alt}
      className={`w-full h-auto ${className}`}
      {...props}
    />
  );
};

export default Image;
