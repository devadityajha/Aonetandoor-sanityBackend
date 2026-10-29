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

//a AFTER ADDED UTENSILS
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

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
                          .filter('_type == "product" && category->title == "Home Tandoors"'),
                      ),
                    S.listItem()
                      .title('🍽️ Restaurant Tandoors')
                      .child(
                        S.documentList()
                          .title('Restaurant Tandoors')
                          .filter('_type == "product" && category->title == "Restaurant Tandoors"'),
                      ),
                    S.listItem()
                      .title('🪵 Wood Fire Brick Ovens')
                      .child(
                        S.documentList()
                          .title('Wood Fire Brick Ovens')
                          .filter(
                            '_type == "product" && category->title == "Wood Fire Brick Ovens"',
                          ),
                      ),
                    S.listItem()
                      .title('⭐ Premium Tandoors')
                      .child(
                        S.documentList()
                          .title('Premium Tandoors')
                          .filter('_type == "product" && category->title == "Premium Tandoors"'),
                      ),
                    S.listItem()
                      .title('🟤 Copper Tandoors')
                      .child(
                        S.documentList()
                          .title('Copper Tandoors')
                          .filter('_type == "product" && category->title == "Copper Tandoors"'),
                      ),
                    S.listItem()
                      .title('🪔 Clay Tandoors')
                      .child(
                        S.documentList()
                          .title('Clay Tandoors')
                          .filter('_type == "product" && category->title == "Clay Tandoors"'),
                      ),
                    S.listItem()
                      .title('🛠️ Accessories')
                      .child(
                        S.documentList()
                          .title('Accessories')
                          .filter('_type == "product" && category->title == "Accessories"'),
                      ),
                    S.listItem()
                      .title('🍲 Utensils')
                      .child(
                        S.documentList()
                          .title('Utensils')
                          .filter('_type == "product" && category->title == "Utensils"'),
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
  },
})
