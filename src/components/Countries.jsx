import Country from "./Country"
import '../main.css'
import { useState } from "react"
import Select from "./Select"

function rangeArray(start, finish) {
    let tmp = []
    for (let i = start; i < finish; i++) {
        tmp.push(i)
    }
    return tmp
}

const Countries = ({ allCountries }) => {

    const [selectNumber, setSelectNumber] = useState(Infinity)
    const [page, setPage] = useState(1)
    const [searchInput, setSearchInput] = useState('')


    let numberOfPages = Math.ceil(allCountries.length / selectNumber)
    let pagesNumbers = rangeArray(1, numberOfPages + 1)
    console.log(numberOfPages)
    console.log(pagesNumbers)
    console.log(selectNumber)
    console.log(allCountries)

    return (
        <>
            <Select setSelectNumber={setSelectNumber} />

            <input type="search" placeholder='Search...' onChange={(e) => setSearchInput(e.target.value)}></input>
            {pagesNumbers.map(pageNumber => <button key={pageNumber} onClick={() => setPage(pageNumber)}>{pageNumber}</button>)}
            
            <table style={{ border: '1px solid black' }}>
                <tbody>
                    <tr>
                        <th>Country</th>
                        <th>Total cases</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                        <th>Population</th>
                    </tr>
                    {allCountries.filter(country => country.country.toLowerCase().includes(searchInput.toLocaleLowerCase()))
                                 .slice(selectNumber * (page - 1), selectNumber * page)
                                 .map(country => <Country key={country.country} country={country} />)}
                </tbody>
            </table>
        </>
    )
}

export default Countries