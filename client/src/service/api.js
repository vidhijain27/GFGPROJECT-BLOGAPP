import axios from 'axios';
import { API_NOTIFICATION_MESSAGES, SERVCE_URLS } from '../constants/config';

const API_URL = 'http://localhost:8000';


const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "content-type": "application/json"
    }
})

axiosInstance.interceptors.request.use(
    function (config) {
        return config;
    },
function (error) {
    return Promise.reject(error);
   }
)

axiosInstance.interceptors.response.use (
    function (response) {
        return processResponse(response);

    },
    function(error){
        return Promise.reject(processError(error));
    }
)

////////
// If success -> return { isSuccess: true, data: object}
//  If fail -> return { isFailure: true, status: string, msg: string, code: int}
//////////
const processResponse = (response) => {
    if (response?.status === 200) {
        return { isSuccess: true, data: response.data}
    } else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}

////////
// If success -> return { isSuccess: true, data: object}
//  If fail -> return { isFailure: true, status: string, msg: string, code: int}
//////////
const processError = (error) => {
    if (error.response) {
       // Request made but server responded with a status code other that 200
       console.log('Error in response', error.toJSON())
       return {
           isError: true,
           msg: API_NOTIFICATION_MESSAGES.responseFailure,
           code: error.response.status
       }
    } else if (error.request){
       // request made but no response received
       console.log('Error in response', error.toJSON())
       return {
           isError: true,
           msg: API_NOTIFICATION_MESSAGES.responseFailure,
           code: ""
       }
     } else {
       // something wrong 
       console.log('Error in network', error.toJSON())
       return {
           isError: true,
           msg: API_NOTIFICATION_MESSAGES.networkError,
           code: ""
       }
    }
}

const API = {};

for (const [key, value] of Object.entries(SERVCE_URLS)) {
    API[key] = (body, showUploadProgess, showDownloadProgess) => 
        axiosInstance({
            method: value.method,
            url: value.url,
            data: body,
            responseType: value.responseType,
            onUploadProgress: function(progressEvent) {
                if (showUploadProgess) {
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    showUploadProgess(percentageCompleted);
                }
            },
            onDownloadProgress: function(progressEvent) {
                if (showDownloadProgess) {
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    showDownloadProgess(percentageCompleted);
                }
            }
        })
    }

    export { API };

