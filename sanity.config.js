// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemaTypes'

// export default defineConfig({
//   name: 'default',
//   title: 'AoneTandoor',
//   projectId: 'ng30wus8',
//   dataset: 'production',

//   plugins: [
//     structureTool({
//       structure: (S) =>
//         S.list()
//           .title('Content')
//           .items([
//             S.listItem()
//               .title('Categories')
//               .child(S.documentTypeList('category').title('All Categories')),

//             S.divider(),

//             S.listItem()
//               .title('Products by Category')
//               .child(
//                 S.list()
//                   .title('Select Category')
//                   .items([
//                     S.listItem()
//                       .title('🏠 Home Tandoors')
//                       .child(
//                         S.documentList()
//                           .title('Home Tandoors')
//                           .filter('_type == "product" && category->title == "Home Tandoors"'),
//                       ),
//                     S.listItem()
//                       .title('🍽️ Restaurant Tandoors')
//                       .child(
//                         S.documentList()
//                           .title('Restaurant Tandoors')
//                           .filter('_type == "product" && category->title == "Restaurant Tandoors"'),
//                       ),
//                     S.listItem()
//                       .title('🪵 Wood Fire Brick Ovens')
//                       .child(
//                         S.documentList()
//                           .title('Wood Fire Brick Ovens')
//                           .filter(
//                             '_type == "product" && category->title == "Wood Fire Brick Ovens"',
//                           ),
//                       ),
//                     S.listItem()
//                       .title('⭐ Premium Tandoors')
//                       .child(
//                         S.documentList()
//                           .title('Premium Tandoors')
//                           .filter('_type == "product" && category->title == "Premium Tandoors"'),
//                       ),
//                     S.listItem()
//                       .title('🟤 Copper Tandoors')
//                       .child(
//                         S.documentList()
//                           .title('Copper Tandoors')
//                           .filter('_type == "product" && category->title == "Copper Tandoors"'),
//                       ),
//                     S.listItem()
//                       .title('🪔 Clay Tandoors')
//                       .child(
//                         S.documentList()
//                           .title('Clay Tandoors')
//                           .filter('_type == "product" && category->title == "Clay Tandoors"'),
//                       ),
//                     S.listItem()
//                       .title('🛠️ Accessories')
//                       .child(
//                         S.documentList()
//                           .title('Accessories')
//                           .filter('_type == "product" && category->title == "Accessories"'),
//                       ),
//                     S.listItem()
//                       .title('📦 All Products')
//                       .child(S.documentTypeList('product').title('All Products')),
//                   ]), // ← items() band
//               ), // ← child() band
//           ]), // ← main items() band
//     }),
//     visionTool(),
//   ],
//   schema: {
//     types: schemaTypes,
//   },
// })

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {productTemplates} from './initialValueTemplates'

export default defineConfig({
  name: 'default',
  title: 'AoneTandoor',
  projectId: 'ng30wus8',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Categories')
              .child(S.documentTypeList('category').title('All Categories')),

            S.divider(),

            S.listItem()
              .title('Products by Category')
              .child(
                S.list()
                  .title('Select Category')
                  .items([
                    S.listItem()
                      .title('🏠 Home Tandoors')
                      .child(
                        S.documentList()
                          .title('Home Tandoors')
                          .filter('_type == "product" && category->title == "Home Tandoors"')
                          .initialValueTemplates([
                            S.initialValueTemplateItem('product-home-tandoors', {
                              categoryId: '6f05fb1e-b423-41fc-832d-c10f815bbdc7',
                            }),
                          ]),
                      ),
                    S.listItem()
                      .title('🍽️ Restaurant Tandoors')
                      .child(
                        S.documentList()
                          .title('Restaurant Tandoors')
                          .filter('_type == "product" && category->title == "Restaurant Tandoors"')
                          .initialValueTemplates([
                            S.initialValueTemplateItem('product-restaurant-tandoors', {
                              categoryId: '6346fbd6-a6fd-4db0-9dd3-6b80f100f411',
                            }),
                          ]),
                      ),
                    S.listItem()
                      .title('🪵 Wood Fire Brick Ovens')
                      .child(
                        S.documentList()
                          .title('Wood Fire Brick Ovens')
                          .filter(
                            '_type == "product" && category->title == "Wood Fire Brick Ovens"',
                          )
                          .initialValueTemplates([
                            S.initialValueTemplateItem('product-wood-fire-brick-ovens', {
                              categoryId: '27b2e63b-05d9-496a-85f0-4c3f77aaf5d4',
                            }),
                          ]),
                      ),
                    S.listItem()
                      .title('⭐ Premium Tandoors')
                      .child(
                        S.documentList()
                          .title('Premium Tandoors')
                          .filter('_type == "product" && category->title == "Premium Tandoors"')
                          .initialValueTemplates([
                            S.initialValueTemplateItem('product-premium-tandoors', {
                              categoryId: '12037d92-dcc7-4849-b31d-f44278729aee',
                            }),
                          ]),
                      ),
                    S.listItem()
                      .title('🟤 Copper Tandoors')
                      .child(
                        S.documentList()
                          .title('Copper Tandoors')
                          .filter('_type == "product" && category->title == "Copper Tandoors"')
                          .initialValueTemplates([
                            S.initialValueTemplateItem('product-copper-tandoors', {
                              categoryId: 'c59f9aa0-9412-4708-818f-d3a045f2e295',
                            }),
                          ]),
                      ),
                    S.listItem()
                      .title('🪔 Clay Tandoors')
                      .child(
                        S.documentList()
                          .title('Clay Tandoors')
                          .filter('_type == "product" && category->title == "Clay Tandoors"')
                          .initialValueTemplates([
                            S.initialValueTemplateItem('product-clay-tandoors', {
                              categoryId: 'cac7f820-2264-4e2f-b6cb-79423f625bfe',
                            }),
                          ]),
                      ),
                    S.listItem()
                      .title('🛠️ Accessories')
                      .child(
                        S.documentList()
                          .title('Accessories')
                          .filter('_type == "product" && category->title == "Accessories"')
                          .initialValueTemplates([
                            S.initialValueTemplateItem('product-accessories', {
                              categoryId: '130fe067-de89-452c-a1cc-66e72fe88a6d',
                            }),
                          ]),
                      ),
                    S.listItem()
                      .title('🍲 Utensils')
                      .child(
                        S.documentList()
                          .title('Utensils')
                          .filter('_type == "product" && category->title == "Utensils"')
                          .initialValueTemplates([
                            S.initialValueTemplateItem('product-utensils', {
                              categoryId: '40ee5169-f641-4a62-a98f-0f74c1fa5730',
                            }),
                          ]),
                      ),
                    S.listItem()
                      .title('📦 All Products')
                      .child(S.documentTypeList('product').title('All Products')),
                  ]), // ← items() band
              ), // ← child() band
          ]), // ← main items() band
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: (prev) => [...prev, ...productTemplates],
  },
})
