// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite' // Only if using the vite plugin approach, otherwise ignore

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MYCV_V2/', // <--- IMPORTANT: Add this line!
})