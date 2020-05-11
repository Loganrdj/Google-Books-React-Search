import axios from 'axios';

export default {
    retrieveBook: (query) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },

    getSavedBooks: () => {
        return axios.get("/saved")
    },

    saveBook: (bookInfo) => {
        console.log("Hit API!")
        return axios.post("/saved", bookInfo)
    },

    removeBook: (id) => {
        return axios.delete("/saved/" + id).then(result => result.data)
    }
}