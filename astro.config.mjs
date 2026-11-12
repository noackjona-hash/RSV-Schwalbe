// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.rsv-ellmendingen.de',
  compressHTML: true,
  build: {
    format: 'directory',
    inlineStylesheets: 'always'
  }
});
