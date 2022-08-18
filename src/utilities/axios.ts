import axios from "axios";
import { useEffect, useState } from "react";
import { Tracks } from "../types/tracks";

export const dbAxios = axios.create({
    baseURL: 'http://localhost:3000',
});

export const redditAxios = axios.create({
    baseURL: 'https://www.reddit.com/search.json',
});

export function useTracks() {
  const [tracks, setTracks] = useState([] as Tracks)

  useEffect( () => {
    try {
      (async () => {
        const tracks = await dbAxios.get('/tracks')
        setTracks(tracks.data)
      })()
    } catch(error){
      console.log(error)
    }
  }, []);

  return tracks;
}

export function useUser(userId: number) {
  const [user, setUser] = useState(userId);

  useEffect(() => {
    try {
      (async () => {
        const userResponse = await dbAxios.get(`/users/${userId}`);
        setUser(userResponse.data)
      })()
    } catch(error){
      console.log(error)
    }
  }, []);

  return user;
}
