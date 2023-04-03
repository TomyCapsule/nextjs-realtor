import axios from 'axios';
import { APIResponse } from './APIResponse.model';
import { APIResponseDetails } from './APIResponseDetails.model';

export const baseEndpointUrl = "https://bayut.p.rapidapi.com"

export const fetchAPI = async (url: string) : Promise<APIResponse | APIResponseDetails> => {
    const {data} = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key': process.env.XRAPIDKEY,
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data
}