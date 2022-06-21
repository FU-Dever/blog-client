import axios from 'axios';

export function register(data){
    return axios({
        method: 'POST',
        url: 'http://localhost:8000/auth/',
        data: data
    });
}

export function login(data){
    return axios({
        method: 'GET',
        url: 'http://localhost:8000/auth/',
        data: data
    });
}