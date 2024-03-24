import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
          "babel-plugin-macros",
      ],
    }
  }),
      viteCommonjs()
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.json', '.tsx']
  }
})
