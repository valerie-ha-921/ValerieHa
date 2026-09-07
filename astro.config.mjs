// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://valerie-ha-921.github.io',
  base: '/ValerieHa',
  // The in-page dev toolbar overlaps the motion layer during local dev.
  // Flip to `true` (or delete this block) if you want it back.
  devToolbar: { enabled: false },
});
