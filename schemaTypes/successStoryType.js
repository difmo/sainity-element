import { defineType, defineField } from 'sanity';

export const successStoryType = defineType({
  name: 'successStory',
  title: 'Success Story',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('A title is required'), // Validation for title
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string', // Use string for simpler descriptions
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .error('A description with at least 10 characters is required'), // Validation for description
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping in the editor
      },
      validation: (Rule) => Rule.required().error('An image is required'), // Validation for image
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});
