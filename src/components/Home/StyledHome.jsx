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
  }
.text-card p,h2{
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
.deaths {
	border:1px solid rgb(194, 88, 88)
}
.active{
	border:1px solid rgb(102, 117, 187)
}
.recovered{
	border:1px solid rgb(102, 187, 106)
}
	
  
`

export const StyledDate = styled.div`
    
	font-size: 10px!important;
	text-align: center;
	display: block;
	height: 13px;
     p {
	font-size: 11px!important;
}
`