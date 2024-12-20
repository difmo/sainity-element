import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  server: {
    // Use the dynamic PORT environment variable or fallback to 3333 for local development
    host: '0.0.0.0',
    port: process.env.PORT || 3333  // This ensures it listens on the correct port for Render and locally
  },
  api: {
    projectId: 'bc0n4wex',   // Your Sanity Project ID
    dataset: 'element'        // Your dataset
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true
})
