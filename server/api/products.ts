export default defineEventHandler(async () => {
  const storefront = useStorefront();

  /**
   * Retrieves a list of products in a store. Products are the items that merchants can sell in their store.
   * @see https://shopify.dev/docs/api/admin-graphql/latest/queries/products
   * @see https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaEdge
   */
  return await storefront.request(
    `#graphql
        query FetchProducts($productsCount: Int, $imagesCount: Int) {
            products(first: $productsCount) {
                nodes {
                    id
                    title
                    description
                    images (first: $imagesCount) {
                        edges {
                            node {
                                id
                                url
                            }
                        }
                    }
                }
            }
        }
    `,
    {
      variables: {
        productsCount: 3,
        imagesCount: 1,
      },
    }
  );
});
