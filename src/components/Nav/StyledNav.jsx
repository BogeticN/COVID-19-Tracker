import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledNav = styled.nav`
   overflow: hidden;
   text-align: right;
   background-color:  #242c3d;
   border-bottom:2px solid #39455f ;
   width:100%;
   span{
     margin-left:30px;
     margin-right:30px;
     background-color:#242c3d;
   }
`

export const StyledLink = styled(Link)`
  padding:10px;
  background-color:#242c3d;
`