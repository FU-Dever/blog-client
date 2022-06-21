import axios from "axios";

const username = localStorage.getItem("username");

export function addPost(data) {
    return axios({
        method: 'PATCH',
        url: `http://localhost:8000/home/${username}`,
        data: data,
    });
}

export function getPost(){
    return axios({
        method: "GET",
        url: `http://localhost:8000/home/${username}`
    });
}