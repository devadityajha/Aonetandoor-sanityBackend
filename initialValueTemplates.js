const CATEGORY_TITLES = [
  'Home Tandoors',
  'Restaurant Tandoors',
  'Wood Fire Brick Ovens',
  'Premium Tandoors',
  'Copper Tandoors',
  'Clay Tandoors',
  'Accessories',
  'Utensils',
]

export const productTemplates = CATEGORY_TITLES.map((title) => ({
  id: `product-${title.toLowerCase().replace(/\s+/g, '-')}`,
  title,
  schemaType: 'product',
  parameters: [{name: 'categoryId', type: 'string'}],
  value: (params) => ({
    category: {_type: 'reference', _ref: params.categoryId},
  }),
}))
