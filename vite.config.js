import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [svelte()],
//   base: '/frontend-tecnico/',
//   esbuild: {
//     supported: {
//       'top-level-await': true //browsers can handle top-level-await features
//     },
//   },
//   define: {
//     __APP_ENV__: process.env.VITE_VERCEL_ENV,
//   },
// })
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    plugins: [svelte()],
    base: '/frontend-tecnico/',
    esbuild: {
      supported: {
        'top-level-await': true //browsers can handle top-level-await features
      },
    },
    define: {
      __APP_ENV__: env.APP_ENV || process.env.VITE_VERCEL_ENV,
    },
  }
})