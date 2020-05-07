import axios from 'axios';

export default {
    retrieveBook: (query) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },

    GetSavedBooks: () => {
        return axios.get("/saved")
    },

    SaveBook: (bookInfo) => {
        return axios.post("/", bookInfo).then(result => result.data)
    },

    RemoveBook: (id) => {
        return axios.delete("/saved" + id).then(result => result.data)
    }
}