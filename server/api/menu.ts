export default defineEventHandler(async () => {
    const storefront = useStorefront()

    /**
     * Retrieve a navigation menu by its handle.
     * @see: https://shopify.dev/docs/api/storefront/latest/queries/menu
     */
    return await storefront.request(`#graphql
        query FetchMenu {
            menu(handle:"trusffle-jp") {
               items {
                   id
                   title
               }
           }
        }`)
})