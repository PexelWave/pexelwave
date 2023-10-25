import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
          }),
          defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
          }),
          defineField({
            name: 'serviceFeatures',
            title: 'Service Features',
            type: 'array',
            of: [{ type: 'string' }]
          })
    ]
})