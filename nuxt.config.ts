import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  ssr: false,
  modules: ["@nuxt/image", "@konkonam/nuxt-shopify"],
  vite: {
    plugins: [tailwindcss()],
  },
  shopify: {
    name: "64d50c",
    clients: {
      storefront: {
        apiVersion: "2025-07",
        publicAccessToken: process.env.NUXT_STOREFRONT_PUBLIC_ACCESS_TOKEN,
      },
    },
  },
});
