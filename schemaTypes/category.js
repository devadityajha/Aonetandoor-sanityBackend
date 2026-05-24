export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'parentCategory',
      title: 'Parent Category (optional)',
      type: 'reference',
      to: [{type: 'category'}],
      description: 'Sirf Copper/Clay jaise sub-categories ke liye',
    },
    {
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: {hotspot: true},
    },
  ],
}
