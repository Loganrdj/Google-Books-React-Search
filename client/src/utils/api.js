import axios from 'axios';

export default {
    GetSavedBooks: () => {
        return axios.get("/saved")
    }
}