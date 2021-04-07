import styled from 'styled-components'

export const StyledRegister = styled.div`
    
	width: 750px;
	display:flex;
	flex-direction:column;
	margin:0 auto;
	height: 500px; 
	border: 1px solid black;
	background-color:#242c3d;
	padding-top:135px;
	padding-bottom:75px;
    border-radius:100px;

.register-input{
	background-color: #242c3d;
	width:80%;
	margin:0 auto;
	display:flex;
	flex-direction:column;
}
.email{
	background-color: #242c3d;
	margin-left: 45px!important;
}
.password{
	margin-left:8px;
	background-color: #242c3d;
}
.submit{
	background-color: #242c3d;
	padding: 25px;
}
.submit input {
	padding-left:50px;
	padding-right:50px;
	height:80%;
	width:50%;
	display:flex;
	justify-content:center;
	align-items:center;
	margin:0 auto;
}
.username{
	background-color: #242c3d;
}
.error{
    background-color: #242c3d;
    margin-left:75px;
    margin-right:75px;
    
}
.email input,.password input,.username input {
		height:80%!important;
	}
@media (max-width:750px){
    width:80%; 

	.username,.email,.password{
		margin:0!important;
		font-size:17px!important;
	}
	.email input,.password input,.username input {
		width:50%;
		font-size:17px!important;
	}
	.email input{
		margin-left:35px;
	}
	.password  input{
		margin-left:6px!important;
	}
	form{
		width:100%;
		margin:0 auto;
	}
	.error{
		margin:0 auto;
		width:70%;
		font-size:14px!important;
	}
}
`