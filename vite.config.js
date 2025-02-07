import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { config as dotenvConfig } from 'dotenv'
import { resolve } from 'path'
import {fileURLToPath, URL} from "url";


const getAliasPath = (path) => {
  return fileURLToPath(new URL(path, import.meta.url));
};


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
      alias: {
        "@": resolve(__dirname, 'src'),
        "@component": getAliasPath(__dirname, './src/components'),
        "@layout": getAliasPath(__dirname, './src/layout'),
        "@store": getAliasPath(__dirname, './src/store'),
        "@utils": getAliasPath(__dirname, './src/utils'),
        "@hook": getAliasPath(__dirname, './src/hook'),
        "@context": getAliasPath(__dirname, './src/context'),
        "@pages": getAliasPath(__dirname, './src/pages'),
      },
      extensions: ['.js', '.ts', '.jsx', '.json', '.tsx']
    },
    historyApiFallback: true,
    server: {
      port: 4000,
      watch: {
        ignored: ['**/node_modules', '**/build']
      }
    }
  }})
