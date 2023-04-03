import axios from 'axios';
import { APIResponse } from './APIResponse.model';

export const baseEndpointUrl = "https://bayut.p.rapidapi.com"

export const fetchAPI = async (url: string) : Promise<APIResponse> => {
    const {data} = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key': 'c4afcd40a2mshdbc9dc369ea75eep1d38e2jsn93f80d98bf7e',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data
}