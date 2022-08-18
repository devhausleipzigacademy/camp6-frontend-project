import axios from "axios";

export const dbAxios = axios.create({
    baseURL: 'http://localhost:3000',
});

export const redditAxios = axios.create({
    baseURL: 'https://www.reddit.com/search.json',
});