import { defineNuxtConfig } from "nuxt3";
import vuetify from "@vuetify/vite-plugin";

export default defineNuxtConfig({
  css: ["vuetify/styles"],
  vite: {
    plugins: [
      vuetify(),
      {
        // https://github.com/nuxt/framework/issues/2798
        configResolved(config) {
          const idx = config.plugins.findIndex(
            (plugin) => plugin.name === "vuetify:import"
          );
          const vueIdx = config.plugins.findIndex(
            (plugin) => plugin.name === "vite:vue"
          );
          if (~idx && idx < vueIdx) {
            const plugin = config.plugins[idx];
            config.plugins.splice(idx, 1);
            config.plugins.splice(vueIdx, 0, plugin);
          }
        },
      },
    ],
    ssr: {
      noExternal: ["vuetify"],
    },
    define: {
      "process.env.DEBUG": "false",
    },
  },
});
