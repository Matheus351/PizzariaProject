import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";

import { signOut } from "@/contexts/AuthContext";

export function setupApiClient(ctx = undefined) {
    let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'http://localhost:3333',
        headers: {
            Authorization: `Bearer ${cookies['@app.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response
    }, (error: AxiosError) => {
        if (typeof window !== undefined){
            signOut();
        }else{
            return Promise.reject(new Error('Error'));
        }
        return Promise.reject(error);
   })
   return api;
}