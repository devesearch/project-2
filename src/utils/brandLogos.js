const imageModules = import.meta.glob(
  "../assets/brands/*.{png,jpg,jpeg,webp,svg}",
  { eager: true }
);

const logos = Object.values(imageModules).map(
  (mod) => mod.default
);

export default logos;
