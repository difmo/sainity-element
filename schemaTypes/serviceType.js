import {ClipboardIcon} from '@sanity/icons' // You can replace with a suitable service-related icon
import {defineArrayMember, defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: ClipboardIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'icon',
      title: 'Service Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Service Description',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        }),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
  },
})
