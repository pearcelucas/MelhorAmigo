import {styled} from "styled-components"
import { createGlobalStyle } from "styled-components"
import {Link} from "react-router-dom"

export const GlobalStyles = createGlobalStyle`
    html, body {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	
}


`

export const HeaderDiv = styled.div`
    background-color: green;
    display: flex;
    flex-direction: column;
    width: 100%;
    

`

export const Nome = styled.h1`
    margin-top: 1%;
    color: white;
    font-family: lobster;
    width: 100%;
    text-align: center;
    font-size: 10vw;
    margin-bottom: 1%;

`
export const Navbar = styled.ul`
    display: flex;
 
    list-style: none;
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 4vw;
    
`

export const NavLi = styled.li`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    align-self: center;
    text-align: center;
    
   
    
   
`


export const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    width: 100%;
   
    

    &:hover {
        width: 100%;
        color: green;
        background-color: white;
    }
`