import axios from "axios";
import { SERVER_HOST } from "../config/config";
export async function deleteAccount() {
    return axios({
      method: "post",
      url: `${SERVER_HOST}api/deleteaccount/`,
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
      },
      withCredentials: true
    })
  }
  
  export async function unlikeIssue(id) {
    let formData = new FormData()
    formData.append("issue", id)
    return axios({
      method: "post",
      url: `${SERVER_HOST}api/delete_like`,
      data: formData,
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
  }
  
  export async function getUserById(id) {
    return axios({
      method:"get",
      url: `${SERVER_HOST}api/profiles/${id}/`,
      data: {
        id
      },
      headers: {
        Authorization: 'Token ' + localStorage.getItem("token"),
      },
    })
  }
  export async function hasLiked(id) {
    let data = new FormData()
    data.append("issue", id)
    return axios({
      method: "post",
      url: `${SERVER_HOST}api/has_liked`,
      data: data,
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
  }
  export async function postIssueLike(issue) {
    let data = new FormData()
    data.append("issue", issue)
    return axios({
      method: "POST",
      url: SERVER_HOST + "api/addlike",
      data,
      headers: {
        Authorization: 'Token ' + localStorage.getItem("token"),
      },
    });
  }
  
  
  export async function getLikeByUser() {
    return axios({
      method:"get",
      url: SERVER_HOST+"api/get_user_likes/",
      headers: {
        Authorization: 'Token ' + localStorage.getItem("token"),
      },
    })
  }
  