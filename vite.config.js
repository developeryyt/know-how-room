import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { config as dotenvConfig } from 'dotenv'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  dotenvConfig({ path: resolve(__dirname, `.env.${mode}`) });
  console.log('Loaded environment variables:', process.env);

  // const base = mode !== 'localmode' ? process.env.VITE_PUBLIC_URL :'/'

  return {
    plugins: [react({
      babel: {
        plugins: [
          "babel-plugin-macros",
        ],
      }
    }),
      viteCommonjs()
    ],
    define: {
      'process.env': process.env
    },
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.json', '.tsx']
    },
    historyApiFallback: true,
    server: {
      port: 5000,
      watch: {
        ignored: ['**/node_modules', '**/build']
      }
    }
  }})
