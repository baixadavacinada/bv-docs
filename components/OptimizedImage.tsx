"use client";

import Image, { ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
}

export function OptimizedImage({ src, ...props }: OptimizedImageProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const finalSrc = src.startsWith("/") ? `${basePath}${src}` : src;

  return <Image src={finalSrc} {...props} />;
}
