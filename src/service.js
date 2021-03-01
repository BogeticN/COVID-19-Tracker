import axios from 'axios'

export const getAllUsers = () => axios.get('https://covid-19-tracker-server.herokuapp.com/users')
export const registerUser = (username,email,password) => axios.post('https://covid-19-tracker-server.herokuapp.com/users',{username,email,password})

export const getAllCountries = () => axios.get('https://disease.sh/v3/covid-19/countries')
export const getWorldStats = () => axios.get('https://disease.sh/v3/covid-19/all')
export const getOneCountry = (country) => axios.get(`https://disease.sh/v3/covid-19/countries/${country}`)


export const getHistoricalStats = () => axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
export const getContinents = () => axios.get('https://disease.sh/v3/covid-19/continents')

export const getBalkan = () => axios.get('https://disease.sh/v3/covid-19/countries/Serbia%2CGreece%2CBosnia%2CCroatia%2CMacedonia%2CAlbania%2CBulgaria%2CRomania%2CMontenegro')
export const getOneCountryHistory = (country) => axios.get(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`)