import axios from "axios";
import {SERVER_HOST} from "../config/config";
import Results from "./results";


export async function getUserById(id) {
    return axios({
      method:"get",
      url: `${SERVER_HOST}/api/profiles/${id}/`,
      data: {
        id
      },
      headers: {
        Authorization: 'Token ' + localStorage.getItem("token"),
      },
    })
  }

  export async function getLikeByUser() {
    return axios({
      method:"get",
      url: SERVER_HOST+"/api/get_user_likes/",
      headers: {
        Authorization: 'Token ' + localStorage.getItem("token"),
      },
    })
  }

  export async function currentUser() {
    let result = await axios.get(SERVER_HOST + "/api/currentuser", {
      headers: {
        Authorization: 'Token ' + localStorage.getItem("token"),
      },
      withCredentials: true
    });
    let status = result.status;
    switch (status) {
      case 200:
        return Promise.resolve({ result: Results.DATA_FOUND, data: result.data });
      case 404:
        return Promise.reject(Results.NO_DATA_FOUND);
      default:
        return Promise.reject(Results.SERVER_ERROR);
    }
  }

  export async function getIssueById(id) {
    let result = await axios.get(SERVER_HOST + "/api/issue/" + id, {
      headers: {
        Authorization: 'Token ' + localStorage.getItem("token"),
      },
      withCredentials: true
    });
    let status = result.status;
    switch (status) {
      case 200:
        return Promise.resolve({ result: Results.DATA_FOUND, data: result.data });
      case 404:
        return Promise.reject(Results.NO_DATA_FOUND);
      default:
        return Promise.reject(Results.SERVER_ERROR);
    }
  }

  export async function getUserLikes() {
    return axios({
      method:"get",
      url: SERVER_HOST+"/api/get_user_likes",
      headers: {
        Authorization: 'Token ' + localStorage.getItem("token"),
      },
    })
  }

  export async function updateProfilePicture(formdata, id) {
    return axios({
      method: "put",
      url: `${SERVER_HOST}/api/profiles/${id}/`,
      data: formdata,
      headers: {
        Authorization: 'Token ' + localStorage.getItem("token"),
      },
      withCredentials: true
  
    })
  }
  
  export async function resetPassword(email) {
    return axios({
      method: "post",
      url: `${SERVER_HOST}/api/password/reset/`,
      data: {
        "email": email
      },
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    });
  }

  export async function deleteAccount() {
    return axios({
      method: "post",
      url: `${SERVER_HOST}/api/deleteaccount/`,
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
      },
      withCredentials: true
    })
  }
  