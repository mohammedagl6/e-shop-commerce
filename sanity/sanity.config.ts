import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'i-shop',

  projectId: 'an0vsb8q',
  dataset: 'i-shop',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
