import { defineType, defineField } from 'sanity';

export const servicesType = defineType({
  name: 'servicesStory',
  title: 'Services Story',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'subName',
      title: 'SubName',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping
      },
    },
    {
      name: 'card',
      title: 'Card',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true, // Enables image cropping
              },
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
