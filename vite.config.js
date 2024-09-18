import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/cadastro/', // Certifique-se de que o caminho base está configurado corretamente
});