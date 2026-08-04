export default function manifest() {
  return {
    name: "Arkvon Group",
    short_name: "Arkvon",
    description:
      "Building enduring Indian businesses with long-term thinking and purpose.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F5F0",
    theme_color: "#0F1B2D",
    orientation: "portrait",
    icons: [
      {
        src: "/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
