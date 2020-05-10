import axios from 'axios';

export default {
    retrieveBook: (query) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },

    getSavedBooks: () => {
        return axios.get("/saved")
    },

    saveBook: (bookInfo) => {
        return axios.post("/", bookInfo).then(result => result.data)
    },

    removeBook: (id) => {
        return axios.delete("/saved" + id).then(result => result.data)
    }
}