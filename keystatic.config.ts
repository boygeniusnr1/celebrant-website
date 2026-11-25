import { config, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  ui: {
    brand: {
      name: "Paula Palmer Celebrant",
    },
  },
  singletons: {
    hero: {
      label: "Hero",
      path: "content/hero",
      schema: {
        backgroundImage: fields.image({
          label: "Hero background image",
          directory: "public/images/hero",
          publicPath: "/images/hero",
          validation: { isRequired: true },
        }),
      },
    },
  },
  collections: {
    gallery: {
      label: "Gallery",
      path: "content/gallery/*",
      slugField: "title",
      format: "yaml",
      columns: ["title", "order"],
      schema: {
        title: fields.slug({
          name: {
            label: "Image title",
            validation: { isRequired: true },
          },
        }),
        image: fields.image({
          label: "Gallery image",
          directory: "public/images/gallery",
          publicPath: "/images/gallery",
          validation: { isRequired: true },
        }),
        alt: fields.text({
          label: "Alternative text",
          validation: { isRequired: true },
        }),
        order: fields.number({
          label: "Display order",
          validation: { isRequired: true },
        }),
      },
    },
  },
});
