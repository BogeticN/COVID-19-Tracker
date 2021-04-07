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

    .username-input input,.password-input input{
        height:80%!important;
    }
    div {
	background-color:#242c3d;
}
    p {

    background-color:#242c3d;    
	font-size:15px!important;
    border-radius:100px;
}   
    a {
	font-size:15px!important;
    border-radius:100px
}
    .text-login {
        padding:0;
        width:95%;
        margin:0 auto;
        overflow:hidden;
}
    input[type=text]{
    margin-right:7px;
}
    .div-submit{
    padding:30px 15px;
}
@media (max-width:750px){
    width:80%;
    input[type=text] {
        margin-right:5px;
        width:50%;
        height:20%;
        font-size:17px!important;
    }
    input[type=password]{
        width:50%;
        height:20%;
        font-size:17px!important;
    }
    p,a {
        font-size:14px!important;
        margin-bottom:4px;
    }
    .username-input,.password-input{
        font-size:17px!important;

    }
    .div-submit input {
        width:30%;
        display:flex;
        margin:0 auto;
        justify-content:center;
        align-items:center;
    }
}
`