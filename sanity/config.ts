// sanity/config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'
import { dataset, projectId } from './env'

export default defineConfig({
  name: 'industronics',
  title: 'Industronics Engineering',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})