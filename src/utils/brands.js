const imageModules = import.meta.glob(
  "../assets/servicebrands/*.{png,jpg,jpeg,webp,svg}",
  { eager: true }
);

const servicelogos = Object.values(imageModules).map(
  (mod) => mod.default
);

export default servicelogos;
