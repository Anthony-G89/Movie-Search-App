import axios from "axios";


const BASEURL = "http://www.omdbapi.com/?t=";
const APIKEY = "&apikey=3e8adfe4";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    movieSearch: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};