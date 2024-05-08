// import axios from "axios"

// export const axiosInstance = axios.create({});

// export const apiConnector = (method, url, bodyData, headers, params) => {
//     return axiosInstance({
//         method:`${method}`,
//         url:`${url}`,
//         data: bodyData ? bodyData : null,
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         params: params ? params : null,
//     });
// }

import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
    const config = {
        method: method,
        url: url,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...headers  // Merge additional headers if provided
        },
        params: params ? params : null,
    };

    // Set data based on method and bodyData
    if (method.toLowerCase() === 'get') {
        // For GET requests, use 'params' instead of 'data'
        config.params = bodyData;
    } else {
        // For other methods (POST, PUT, etc.), use 'data'
        config.data = bodyData;
    }

    return axiosInstance(config);
};
