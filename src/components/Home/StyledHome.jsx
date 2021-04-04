import styled from 'styled-components'

export const StyledHome = styled.div`

	display: grid;
	grid-template-columns: 20% 20% 20% 20%;
	grid-gap: 35px;
	margin:80px auto;
	width: 80%;
	height: 30%;
	justify-content:center;

.text-card {
	width: 100%;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	display:inline-block;
	text-align: center;
	background-color: #39455f;
	-webkit-box-shadow: 24px 21px 62px -4px rgba(12,13,38,1);
	-moz-box-shadow: 24px 21px 62px -4px rgba(12,13,38,1);
	box-shadow: 24px 21px 62px -4px rgba(12,13,38,1);
  }
.text-card p{
	font-size: 33px!important;
	background-color: #39455f;
	width:100%;
	overflow:hidden;
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
	color:rgb(133, 131, 131)
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
@media (max-width:1373px){
	grid-template-columns: 40% 40%;
}
@media (max-width:725px){
	grid-template-columns: 80%;
}
`

export const StyledCharts = styled.div`


    width: 100%;
	margin:0 auto;
	display:flex;
	flex-direction:column;

.chart-container{
    width: 80%!important;
	height:80vh;
	position:relative;
	margin:150px auto!important;
    padding: 40px;
    background-color: #39455f;
    color: white;
    display: block;
    border-radius: 30px;
    -webkit-box-shadow: 24px 21px 62px -4px rgba(12,13,38,1);
	-moz-box-shadow: 24px 21px 62px -4px rgba(12,13,38,1);
	box-shadow: 24px 21px 62px -4px rgba(12,13,38,1);
}
canvas{
    background-color: #39455f
}
@media (max-width:670px){
	.chart-container {
		width:100%!important;
		height:50vh!important;
	}
}
@media (max-width:320px){
	.chart-container {
		height:40vh!important;
		margin:70px auto!important;
	}
}
@media (max-height:780px){
	.chart-container{
		margin:70px auto!important;
		height:60vh!important;
	}
}
`

export const StyledDate = styled.div`
    
	font-size: 10px!important;
     p {
	font-size: 11px!important;
}
`