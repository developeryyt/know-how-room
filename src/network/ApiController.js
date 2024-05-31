export const apiCall = async () => {
    return fetch('https://dummyjson.com/carts').then(res => res.json()).then(console.log)
}