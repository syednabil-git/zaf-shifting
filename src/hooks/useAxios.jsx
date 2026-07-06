import axios from 'axios'
import React from 'react'

const useAxios = () => {

    const axiosInstance = axios.create({
        baseURL: 'https://zap-shift-server-three-inky.vercel.app'
    })
  return axiosInstance;
}

export default useAxios