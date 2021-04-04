import styled from 'styled-components'

export const StyledCountryDetails = styled.div`
    display: grid;
	grid-template-columns: 20% 20% 20% 20%;
	grid-gap: 35px;
	margin:150px auto;
	width: 70%;
	height: 30%;
	justify-content:space-between;

.single-text-cards {
	width: 100%;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	text-align: center;
	background-color: #39455f;
    margin:20px auto;
	-webkit-box-shadow: 24px 21px 62px -4px rgba(12,13,38,1);
	-moz-box-shadow: 24px 21px 62px -4px rgba(12,13,38,1);
	box-shadow: 24px 21px 62px -4px rgba(12,13,38,1);
  }
.single-text-cards p{
	font-size: 25px!important;
	width:100%;
	overflow:hidden;
	height:auto;
}
p {
    background-color:#39455f
}
.heading {
	  padding: 40px 10px;
	  background-color: #39455f;
  }
.text-box {
	  padding:10px;
	  background-color: #39455f;
	}
.total-cases {
	border:1px solid rgb(133, 131, 131);
}
.total-cases p{
	color:rgb(133, 131, 131);
}	 
.deaths {
	border:1px solid rgb(194, 88, 88);
}
.deaths p{
	color: rgb(194, 88, 88)
}
.active{
	border:1px solid rgb(102, 117, 187);
}
.active p{
	color:rgb(102, 117, 187)
}
.recovered{
	border:1px solid rgb(102, 187, 106);
}
.recovered p{
	color:rgb(102, 187, 106)
}
.population {
    border:1px solid rgb(209, 153, 10)
}
.population p {
    color:rgb(209, 153, 10)
}
.tests{
    border:1px solid #b8a9c9
}
.tests p{
    color:#b8a9c9
}
.today-cases{
    border:1px solid #c0ded9
}
.today-cases p{
    color:#c0ded9
}
.today-deaths{
    border:1px solid #a96e5b
}
.today-deaths p{
    color:#a96e5b
}
.critical{
    border:1px solid #f76b6b
}
.critical p{
    color:#f7786b
}
`