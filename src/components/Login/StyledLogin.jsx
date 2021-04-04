import styled from 'styled-components'

export const StyledLogin = styled.div`

	width: 750px;
    display:flex;
    flex-direction:column;
    margin:0 auto;
	height: 500px; 
	border: 1px solid black;
	background-color:#242c3d;
	padding-top:150px;
    border-radius:100px;


    div {
	background-color:#242c3d;
    
}
    p {

    background-color:#242c3d;    
	font-size:15px!important;
    border-radius:100px
}   
    a {
	font-size:15px!important;
    border-radius:100px
}
    .text-login {
    padding-top:20px;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    padding-left:100px;
    padding-right:100px;
}
input[type=text]{
    margin-right:7px;
}
.div-submit{
    padding:30px 15px;
    /* margin:40px; */
}
`