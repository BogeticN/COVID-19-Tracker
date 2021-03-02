import styled from 'styled-components'

export const StyledHome = styled.div`

    display: flex;
	margin: 20px auto;
	width: 85%;
	height: 350px;

.text-card {
	width: 250px;
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
  
`

export const StyledCharts = styled.div`

    height: 50%!important;
    width: 100%;

.chart{
    width: 80%!important;
    margin-top:240px!important;
    margin-bottom:240px!important;
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
`

export const StyledDate = styled.div`
    
	font-size: 10px!important;
     p {
	font-size: 11px!important;
}
`