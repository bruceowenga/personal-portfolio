import { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'technologies',
      type: 'array',
      fields: [
        {
          name: 'tech',
          type: 'text',
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'In Development', value: 'in-development' },
        { label: 'Active', value: 'active' },
        { label: 'Production', value: 'production' },
        { label: 'Completed', value: 'completed' },
      ],
      defaultValue: 'active',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'demoUrl',
      type: 'text',
      label: 'Demo URL',
    },
    {
      name: 'githubUrl',
      type: 'text',
      label: 'GitHub URL',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'caseStudy',
      type: 'textarea',
      label: 'Case Study (paragraphs separated by blank lines)',
    },
    {
      name: 'highlights',
      type: 'array',
      label: 'Key Metrics / Highlights',
      fields: [
        { name: 'metric', type: 'text', label: 'Metric Label' },
        { name: 'value', type: 'text', label: 'Value' },
      ],
    },
  ],
}
