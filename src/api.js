import axios from "axios"

const SearchRobots = async(term) => {
    const url = "https://jsonplaceholder.typicode.code.com/users"

    const response = await axios.get(url, {
        params: {
            query: term
        }
    })
    console.log(response.data)
    return response.data
}


export default SearchRobots