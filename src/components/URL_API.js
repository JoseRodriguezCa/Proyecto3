
const accessKey = 'IGCjMQObAb-72iF69nJWj0OzcUNaUnqfUWj2wwVR8NE'
export const URL_API = async (search,page) => {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=${accessKey}`)
    const data = await response.json()
    console.log(response)
    console.log(data)
    return data
}








