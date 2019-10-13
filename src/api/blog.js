import axios from "axios";
import {SERVER_HOST} from "../config/config";
import Results from "./results";

export function getLatestBlogs() {
    return axios({
        method: "GET",
        url: `${SERVER_HOST}/api/blog` 
    });
}

export function getTopBlogs() {
    return axios({
        method: "GET",
        url: `${SERVER_HOST}/api/blog/latest_blogs`
    });
}

export function getBlogById(id) {
    return axios({
        method: "GET",
        url: `${SERVER_HOST}/api/blog/${id}`
    });
}

export function postBlogComment(formData) {
    return axios({
        method: "POST",
        url: `${SERVER_HOST}/api/bcomment/`,
        data: formData,
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
        }
    })
}
export async function getCategories() {
    let result = await axios.get(SERVER_HOST + "/api/category");
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
  
export function getPages(data, chunkAmount) {
    let newData = [];
    
    for(let i = 0; i < data.length;   i += chunkAmount) {
      newData.push(data.slice(i, i+chunkAmount));
    }
    return newData;
  }


  export async function getBlogComments(id) {
    let result = await axios.get(SERVER_HOST + "/api/blog/" + id + "/comments", {});
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

  export async function createBlog(formData)
  {
    return axios({
      method:"post",
      url:`${SERVER_HOST}/api/blog/`,
      data:formData,
      headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
      },
    })
  }

  export async function createCategory(formData)
  {
    return axios({
      method:"post",
      url:`${SERVER_HOST}/api/category/`,
      data:formData,
      headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
      },
    })
  }

  export async function deleteBlogComment(comment)
  {
    return axios({
      method:"post",
      url:`${SERVER_HOST}/api/deleteblogcomment/${comment}/`,
      headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
      },
    })
  }
