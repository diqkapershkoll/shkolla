import Axios from "axios";
import Results from "./results";
import { SERVER_HOST } from "../config/config";


export async function authenticateUser(email, password) {
    return Axios({
        method: "post",
        url: SERVER_HOST + "/api/login/", 
        data: { email, password }
    })
};

export async function registerUser(email, username, password) {
    try {
        let res = await Axios({
            method: "post",
            url: `${SERVER_HOST}/api/register/`,
            data: {
                email: email,
                username: username,
                password: password,
            }
        });
        let status = await res.status;

        switch (status) {
            case 409:
                return Promise.reslove({ result: Results.REGISTER_FAIL });
            case 200:
                let token = res.data.token;
                return Promise.resolve({ result: Results.REGISTER_SUCCESS, token });
            default:
                return Promise.resolve({ result: Results.DEFAULT_ERROR_CASE });
        }
    } catch (err) {
        return Promise.reject({ result: Results.SERVER_ERROR });
    }
};


export async function signOut() {
    try {
        let res = await Axios.get(SERVER_HOST + "/api/logout/")
        let status = await res.status;
        let data = await res.data;
        if (status === 200) {
            localStorage.removeItem("token");
            return Promise.resolve({ result: Results.SUCCESS, token: data.token });
        }
        else return Promise.reject({ result: Results.DEFAULT_ERROR_CASE, token: null });
    } catch (err) {
        return Promise.reject({ result: Results.SERVER_ERROR, token: null });
    }
}

export async function isAdmin() {
    return Axios({
        method: "get",
        url: SERVER_HOST + "/api/isadmin/", 
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
        },
        withCredentials:true,
    })
};

  
