import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

export const AxiosInterceptor = () => {

    const updateHeader = (request: AxiosRequestConfig) => {
        const token = 'dwsfw3q4r34gt245r1g245t2g34g'
        const newHeaders = {
            ...request.headers,
            Authorization: token,
            'Content-Type': 'application/json'
        }
        request.headers = newHeaders;
        return request;
    }

    axios.interceptors.request.use((request) => {
        if (request.url?.includes('assets')) return request;
        return updateHeader(request);
    });

    axios.interceptors.response.use(
        (response) => {
            console.log('response', {
                url: response.config.url,
                data: response.data,
                status: response.status,
            });
            return response;
        }, (error) => {
            return Promise.reject(error);
        }
    );
}