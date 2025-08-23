export default defineEventHandler(async () => {
    const storefront = useStorefront()

    return await storefront.request(`#graphql
        query FetchProducts($first: Int) {
            products(first: $first) {
                nodes {
                    id
                    title
                    description
                }
            }
        }
    `, {
        variables: {
            first: 3,
        },
    })
})
