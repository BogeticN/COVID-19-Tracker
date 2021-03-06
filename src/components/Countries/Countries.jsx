import Country from "../Country"
import { useState } from "react"
import Select from "../Select"
import { StyledCountries, StyledInput } from "./StyledCountries"

function rangeArray(start, finish) {
    let tmp = []
    for (let i = start; i < finish; i++) {
        tmp.push(i)
    }
    return tmp
}

const Countries = ({ allCountries }) => {

    const [selectNumber, setSelectNumber] = useState(20)
    const [page, setPage] = useState(1)
    const [searchInput, setSearchInput] = useState('')


    let filteredCountries = allCountries.filter(country => country.country.toLowerCase().includes(searchInput.toLocaleLowerCase()))
    let numberOfPages = Math.ceil(filteredCountries.length / selectNumber)
    let pagesNumbers = rangeArray(1, numberOfPages + 1)

    return (
        <>
            <StyledInput >
                <div className='select'>
                    <span>Show</span><Select setSelectNumber={setSelectNumber} /><span>countries</span>
                </div>
                <input type="search" placeholder='Search...' onChange={(e) => setSearchInput(e.target.value)}></input>
            </StyledInput>
            <StyledCountries >
                <table>
                    <tbody>
                        <tr>
                            <th>Country</th>
                            <th>Total cases</th>
                            <th>Deaths</th>
                            <th>Recovered</th>
                            <th>Population</th>
                        </tr>
                        {filteredCountries.slice(selectNumber * (page - 1), selectNumber * page).map(country => <Country key={country.country} country={country} />)}
                    </tbody>
                </table>
            </StyledCountries>


            {pagesNumbers.map(pageNumber => <button className="btn btn-secondary" key={pageNumber} onClick={() => setPage(pageNumber)}>{pageNumber}</button>)}
        </>
    )
}

export default Countries