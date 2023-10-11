import axios from "axios"


export const TestingService = () => {
    return axios.get('http://rickandmortyapi.com/api/character/2')
}