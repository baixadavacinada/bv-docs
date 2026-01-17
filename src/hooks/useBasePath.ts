export function getImagePath(src: string): string {
  if (typeof window !== "undefined") {
    const basePath = document.documentElement.getAttribute("data-basepath");
    return basePath ? `${basePath}${src}` : src;
  }
  return src;
}
