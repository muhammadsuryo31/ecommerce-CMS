import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://eccomerce-cms-suryo.herokuapp.com'
})

export default instance
