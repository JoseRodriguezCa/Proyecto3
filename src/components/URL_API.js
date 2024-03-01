
const accessKey = 'IGCjMQObAb-72iF69nJWj0OzcUNaUnqfUWj2wwVR8NE'
const searchTerm = ""
export const URL_API = async (search) => {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${search}&client_id=${accessKey}`)
    const data = await response.json()
    console.log(data)
    return data
}








