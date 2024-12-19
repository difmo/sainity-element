import { ClipboardIcon } from '@sanity/icons'; // You can replace with a suitable icon
import { defineField, defineType } from 'sanity';

export const solutionType = defineType({
  name: 'solution',
  title: 'Solution',
  type: 'document',
  icon: ClipboardIcon, // Optional: Replace with an appropriate icon
  fields: [
    defineField({
      name: 'title',
      title: 'Solution Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('The title is required'), // Optional validation
    }),
    defineField({
      name: 'icon',
      title: 'Solution Icon',
      type: 'image',
      options: {
        hotspot: true, // Enables hotspot editing for images
      },
      validation: (Rule) => Rule.required().error('An icon is required'), // Optional validation
    }),
    defineField({
      name: 'description',
      title: 'Solution Description',
      type: 'string', // Changed from 'array' to 'string'
      validation: (Rule) =>
        Rule.required().min(10).error('A description with at least 10 characters is required'), // Optional validation
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
  },
});

