import axios from 'axios'

export const getAllUsers = () => axios.get('http://localhost:3005/users')
export const registerUser = (username,email,password) => axios.post('http://localhost:3005/users',{username,email,password})

export const getAllCountries = () => axios.get('https://disease.sh/v3/covid-19/countries')
export const getWorldStats = () => axios.get('https://disease.sh/v3/covid-19/all')


export const getHistoricalStats = () => axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
export const getContinents = () => axios.get('https://disease.sh/v3/covid-19/continents')