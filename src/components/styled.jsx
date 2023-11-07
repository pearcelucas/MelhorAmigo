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

export const Rodape = styled.footer`
    width: 100%;
    background-color: green;
    display: flex;
    color: white;
    padding-bottom: 1%;
    margin-bottom: 0;
    
`

export const NomeRodape = styled.h1`
    margin-top: 1%;
    color: white;
    font-family: lobster;
    width: 100%;
    text-align: center;
    font-size: 7vw;
    margin-bottom: 1%;
`

export const Sobre = styled.div`
    padding-left: 5%;
    padding-right: 2.5%;
    width: 40%;
    text-align: justify;

    @media screen and (max-width: 768px){
        font-size: 2vw;

        
    }
`

export const Divisoria = styled.hr`
    width: 100%;
    margin-top: 3%;
    margin-bottom: 3%;
`
export const ImgRodape = styled.img`
     @media screen and (max-width: 768px){
        width: 2vw;
        
    }
`

export const MenuRapido = styled.div`

width: 30%;
padding-left: 2.5%;
padding-right: 2.5%;
padding-top: 2.5%;



`

export const TituloRodape = styled.h2`
    color: white;
    font-size: 1.5vw;
    margin-top: 10%;
    margin-bottom: 10%;
    font-weight: bolder;
    margin-top: 0;
    margin-bottom: 0;

    @media screen and (max-width: 768px){
        font-size: 3vw;
        
    }
`

export const ItemLista2 = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1vw;
    &:hover{
        color: #004bae;
    }
    
    @media screen and (max-width: 768px){
        font-size: 2vw;
        
    }
`

export const Lista2 = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1%;
    list-style: none;
    color: white;
    height: 70%;
    justify-content: space-evenly;

    
`

export const ContatosEndereco = styled.div`

width: 30%;
padding-left: 2.5%;
padding-right: 5%;
padding-top: 2.5%;
`

export const Endereco = styled.div`
display: flex;
margin-top: 10%;


@media screen and (max-width: 768px){
        font-size: 2vw;
        
    }
    
`

export const EnderecoTexto = styled.p`
    @media screen and (max-width: 768px){
        font-size: 2vw;
        
    }
`

export const LinkRodape = styled(Link)`
     @media screen and (max-width: 768px){
        font-size: 2vw;
        
    }
`

export const Telefone = styled.div`
display: flex;
margin-top: 10%;
align-items: center;
@media screen and (max-width: 768px){
        font-size: 2vw;
        
    }
    
`

export const Email = styled.div`
display: flex;
margin-top: 10%;
@media screen and (max-width: 768px){
        font-size: 2vw;
        
    }
`