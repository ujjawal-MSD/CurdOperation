import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { StrictMode } from 'react';

// https://vitejs.dev/config/
export default defineConfig({
	jsx: 'react', // Specify 'react' to enable JSX parsing
	plugins: [react()],
	server: {
		host: true,
		StrictPort: true,
		port: 5000,
	},
	factory: 'React.createElement',
	fragment: 'React.Fragment',
});
