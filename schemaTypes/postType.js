import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'countryCode',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      type: 'string',
    }),
    defineField({
      name: 'company',
      type: 'string',
    }),
    defineField({
      name: 'hearAbout',
      type: 'string',
    }),
    defineField({
      name: 'division',
      type: 'string',
    }),
    defineField({
      name: 'opportunity',
      type: 'string',
    }),

    defineField({
      name: 'file',
      title: 'File',
      type: 'string', // Change this to string instead of file
      description: 'Provide a link to your resume',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
}) 
