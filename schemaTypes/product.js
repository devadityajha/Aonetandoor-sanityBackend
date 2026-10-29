export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isPopular',
      title: 'Most Popular?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'isNew',
      title: 'New Arrival?',
      type: 'boolean',
      initialValue: false,
    },

    // ─── Fuel Options ───────────────────────────────
    {
      name: 'fuelTags',
      title: 'Fuel Tags',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            // ← andar aao
            list: [
              {title: '🔥 Gas', value: 'Gas'},
              {title: '⚡ Electric', value: 'Electric'},
              {title: '🪵 Charcoal', value: 'Charcoal'},
            ],
          },
        },
      ],
      description: 'Supported fuel types',
    },

    // ─── Product Info Tab ────────────────────────────
    {
      name: 'coreMaterial',
      title: 'Core Material',
      type: 'string',
      description: 'e.g. Terracotta clay',
    },
    {
      name: 'outerCasing',
      title: 'Outer Casing',
      type: 'string',
      description: 'e.g. Grade 304 stainless steel',
    },
    {
      name: 'insulation',
      title: 'Insulation',
      type: 'text',
      description: 'e.g. Double insulation with high temperature resistant glasswool',
    },
    {
      name: 'dimension',
      title: 'Dimension',
      type: 'string',
      description: 'e.g. Comes in few standard sizes. Commonly used model is SSC32.',
    },
    {
      name: 'usage',
      title: 'Usage',
      type: 'string',
      description: 'e.g. Best recommended for restaurants and banquets',
    },
    {
      name: 'portability',
      title: 'Portability',
      type: 'string',
      description: 'e.g. Portable',
    },
    {
      name: 'fuelOptionsText',
      title: 'Fuel Options (Info Table)',
      type: 'string',
      description: 'e.g. Charcoal, Gas & Electric',
    },
    {
      name: 'usageEnvironment',
      title: 'Usage Environment',
      type: 'string',
      description: 'e.g. Indoors / Outdoor',
    },
    {
      name: 'customisation',
      title: 'Customisation',
      type: 'string',
      description: 'e.g. Can be custom made in different sizes and design',
    },
    {
      name: 'topSurface',
      title: 'Top Surface',
      type: 'string',
      description: 'e.g. Tile, Stone, Metal, Cement',
    },
    {
      name: 'accessories',
      title: 'Accessories',
      type: 'string',
      description: 'e.g. 10 pieces of assorted skewers, Top Mouth Cover and Cushion (gaddi)',
    },
    {
      name: 'weight',
      title: 'Weight',
      type: 'string',
      description: 'e.g. Minimum 300 Kg',
    },
    {
      name: 'importable',
      title: 'Importable',
      type: 'string',
      description: 'e.g. Yes',
    },
    {
      name: 'safetyNorms',
      title: 'Safety Norms',
      type: 'string',
      description: 'e.g. Charcoal tandoor is NSF certified, Gas Oven is CSA standard',
    },

    // ─── Size Information Tab ────────────────────────
    {
      name: 'sizeTable',
      title: 'Size Information Table',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'modelNo', title: 'Model No.', type: 'string'},
            {name: 'length', title: 'Length', type: 'string'},
            {name: 'height', title: 'Height', type: 'string'},
            {name: 'width', title: 'Width', type: 'string'},
            {name: 'weight', title: 'Weight', type: 'string'},
            {name: 'mouthDiameter', title: 'Mouth Diameter', type: 'string'},
          ],
        },
      ],
    },

    {
      name: 'sizeImage',
      title: 'Size Diagram Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Size information tab pe dikhne wali diagram image',
    },
  ],
}
