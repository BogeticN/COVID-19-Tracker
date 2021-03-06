const Select = ({ setSelectNumber }) => {
    return (
        <select onChange={(e) => setSelectNumber(e.target.value)}>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={Infinity}>All</option>
        </select>
    )
}

export default Select