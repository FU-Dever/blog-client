import axios from 'axios';

export function getAllUser(){
    return axios({
        method: 'GET',
        url: `http://localhost:8000/user`,
    });
}

export function getOne(username){
    return axios({
        method: 'GET',
        url: `http://localhost:8000/user/${username}`,
    }); 
}