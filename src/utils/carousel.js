const imageModules = import.meta.glob(
  "../assets/carousel-images/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

const images = Object.values(imageModules).map(
  (mod) => mod.default
);

export default images;
