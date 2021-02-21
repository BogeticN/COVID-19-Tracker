import axios from 'axios'

export const getAllUsers = () => axios.get('http://localhost:3005/users')
export const registerUser = (username,email,password) => axios.post('http://localhost:3005/users',{username,email,password})

export const getAllCountries = () => axios.get('https://disease.sh/v3/covid-19/countries')
export const getWorldStats = () => axios.get('https://disease.sh/v3/covid-19/all')
