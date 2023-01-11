export const load = ({fetch, params})=>{
     const fetchProducts = async (id) => {
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await res.json()
        return data
        }

    return {
       producto: fetchProducts(params.productsId),
    }
}
