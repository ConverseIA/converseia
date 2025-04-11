import { defineConfig } from 'tailwindcss';

export default defineConfig({
  $schema: 'https://ui.shadcn.com/schema.json',
  style: 'new-york',
  rsc: false,
  tsx: true,
  tailwind: {
    config: 'tailwind.config.js',
    css: './src/index.css',
    baseColor: 'neutral',
    cssVariables: true,
    prefix: '',
  },
  aliases: {
    components: '@/components',
    utils: '@/lib/utils',
    ui: '@/components/ui',
    lib: '@/lib',
    hooks: '@/hooks'
  },
  iconLibrary: 'lucide'
});