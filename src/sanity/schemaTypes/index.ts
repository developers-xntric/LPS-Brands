import { type SchemaTypeDefinition } from 'sanity'
import { LPSBlogType } from './PostType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [LPSBlogType],
}
