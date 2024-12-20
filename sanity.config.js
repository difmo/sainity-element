import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes/'

export default defineConfig({
  name: 'default',
  title: 'element',

  projectId: 'bc0n4wex',
  dataset: 'element',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  // Ensure correct server configuration for Render
  server: {
    host: '0.0.0.0',      // Listen on all network interfaces
    port: process.env.PORT || 3333  // Use the port from Render, fallback to 3333 for local dev
  },
})
