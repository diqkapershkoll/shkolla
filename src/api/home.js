import axios from "axios";
import {SERVER_HOST} from "../config/config";
import Results from "./results";

export async function getFrontBlogs() {
    let result = await axios.get(SERVER_HOST + "/api/blog/latest_blogs");
    let status = await result.status;
    switch (status) {
      case 200:
        return Promise.resolve({ result: Results.DATA_FOUND, data: result.data });
      case 404:
        return Promise.reject(Results.NO_DATA_FOUND);
      default:
        return Promise.reject(Results.SERVER_ERROR);
    }
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