export default {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx}',
    './node_modules/@skeletonlabs/skeleton/**/*.js'
  ],
  presets: [
    require('@skeletonlabs/tw-plugin')({ themes: { preset: ['rocket'] } })
  ]
}; 