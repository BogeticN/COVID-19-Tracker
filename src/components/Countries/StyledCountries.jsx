import styled from 'styled-components'
export const StyledCountries = styled.div`

    overflow-x:auto;
    width:80%;
    margin:0 auto;

  table {
    font-family: "Arial Black", Gadget, sans-serif;
    border: 2px solid #415172;
    background-color: #4A4A4A;
    width: 80%;
    text-align: center;
    border-collapse: collapse;
    margin:auto;
    line-height:2.5;
  }
   td, table th {
    border: 1px solid #4A4A4A;
    padding: 3px 2px;
  }
   tbody td {
    font-size: 13px;
    color: #E6E6E6;
  }
   tr:nth-child(even) {
    background: #888888;
  }
   thead {
    background: #000000;
    border-bottom: 3px solid #000000;
  }
   thead th {
    font-size: 15px;
    font-weight: bold;
    color: #E6E6E6;
    text-align: center;
    border-left: 2px solid #4A4A4A;
  }
   thead th:first-child {
    border-left: none;
  }
`

export const StyledInput = styled.div`
    margin:0 auto;
    display: flex;
    flex-direction: row!important;
    justify-content:space-between;
    align-items:center;
    width:64%;

input { 
    margin-top:1rem;
    margin-bottom: 1rem;
    width: 20%;
    height: 100%;
}
select {
    height: 100%;
    line-height: 1.8;
    margin-left: 0px;
}
@media (max-width:768px ){
    width:70%;

  input{
    width:40%;
  }
}
@media (max-width:500px){
    width:80%;
    input {
      width:50%;
    }
}
`
