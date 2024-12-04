// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import icon from 'astro-icon';

import netlify from '@astrojs/netlify';

import alpinejs from '@astrojs/alpinejs';



// https://astro.build/config
export default defineConfig({
  output: 'server',

  adapter: netlify(),

  integrations: [tailwind(), react(), icon(), alpinejs()],

});