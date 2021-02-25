import Country from "../Country"
import { useState } from "react"
import Select from "../Select"
import { StyledTable } from "./StyledCountries"
// import '../../main.css'

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


    let filteredCountries = allCountries.filter(country => country.country.toLowerCase().includes(searchInput.toLocaleLowerCase()))
    let numberOfPages = Math.ceil(filteredCountries.length / selectNumber)
    let pagesNumbers = rangeArray(1, numberOfPages + 1)

    return (
        <div style={{ textAlign: 'center' }}>
            <div className="blabla">
                <div className='bla'>
                    <span>Show</span><Select setSelectNumber={setSelectNumber} /><span>countries</span>
                </div>
                <input type="search" placeholder='Search countries...' onChange={(e) => setSearchInput(e.target.value)}></input>
            </div>

            <StyledTable >
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
            </StyledTable>
            {pagesNumbers.map(pageNumber => <button style={{ marginTop: '1rem' }} key={pageNumber} onClick={() => setPage(pageNumber)}>{pageNumber}</button>)}
        </div>
    )
}

export default Countries