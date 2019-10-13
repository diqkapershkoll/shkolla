import axios from "axios";
import { SERVER_HOST } from "../config/config";
import Results from "./results"
export function getLatestIssues() {
    return axios({
        method: "GET",
        url: `${SERVER_HOST}/api/issue`,
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
        }
    })
}

export function getIssueById(id) {
    return axios({
        method: "GET",
        url: `${SERVER_HOST}/api/issue/${id}`,
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
        }
    })
}

export function postIssueComment(formData) {
    return axios({
        method: "POST",
        url: `${SERVER_HOST}/api/icomment/`,
        data: formData,
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
        }
    })
}

  export async function getIssueComments(id) {
    let result = await axios.get(SERVER_HOST + "/api/issue/" + id + "/comments", {
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

  export async function postIssueLike(issue) {
    let data = new FormData()
    data.append("issue", issue)
    return axios({
      method: "POST",
      url: SERVER_HOST + "/api/addlike",
      data,
      headers: {
        Authorization: 'Token ' + localStorage.getItem("token"),
      },
    });
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

  export async function getLikesOfIssue(id) {
    let formData = new FormData();
    formData.append("issue", id)
    return axios({
      method:"post",
      url: SERVER_HOST+"/api/get_likes",
      data: formData,
      headers: {
        Authorization: 'Token ' + localStorage.getItem("token"),
      },
    })
  }

  export async function unlikeIssue(id) {
    let formData = new FormData()
    formData.append("issue", id)
    return axios({
      method: "post",
      url: `${SERVER_HOST}/api/delete_like`,
      data: formData,
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
  }

  export async function hasLiked(id) {
    let data = new FormData()
    data.append("issue", id)
    return axios({
      method: "post",
      url: `${SERVER_HOST}/api/has_liked`,
      data: data,
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
  }
  

  export function getPages(data, chunkAmount) {
    let newData = [];
    
    for(let i = 0; i < data.length;   i += chunkAmount) {
      newData.push(data.slice(i, i+chunkAmount));
    }
    return newData;
  }
  
  export async function createIssue(formData)
  {
    return axios({
      method:"post",
      url:`${SERVER_HOST}/api/issue/`,
      data:formData,
      headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
      },
    })
  }


  export async function deleteIssueComment(comment)
  {
    return axios({
      method:"post",
      url:`${SERVER_HOST}/api/deleteissuecomment/${comment}/`,
      headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
      },
    })
  }