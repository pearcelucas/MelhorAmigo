import {styled} from "styled-components"
import { createGlobalStyle } from "styled-components"
import {Link} from "react-router-dom"
import BackgroundIMG from "../imagens/360_F_298201821_e90YxH0f6FBwOvcKhynlwF8sNYxlCMsg.jpg"
import BackgroundIMG2 from "../imagens/../imagens/backlossos.webp"
export const GlobalStyles = createGlobalStyle`
    html, body {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	
}


`

export const HeaderDiv = styled.div`
    
    display: flex;
    flex-direction: column;
    width: 100%;
    background-image: url(${BackgroundIMG}); 
    

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
    background-image: url(${BackgroundIMG});
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


    @media screen and (min-width: 768px){
        font-size: 5vw;

        
    }


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

export const MenuRapido = styled.div`

width: 30%;
padding-left: 2.5%;
padding-right: 2.5%;
padding-top: 2.5%;


`

export const TituloRodape = styled.h2`
    color: white;
    font-size: 2vw;
    margin-top: 10%;
    margin-bottom: 10%;
    font-weight: bolder;
    margin-top: 0;
    margin-bottom: 0;

    @media screen and (max-width: 768px){
        font-size: 3vw;
        
    }
`
export const Lista2 = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    color: white;
    height: 50%;
    justify-content: space-between;
    padding: 0;
    margin-top: 0;

    
`

export const ItemLista2 = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.5vw;
    &:hover{
        color: #004bae;
    }
    
    @media screen and (max-width: 768px){
        font-size: 2.5vw;
        
    }
`


export const ContatosEndereco = styled.div`

width: 30%;
padding-left: 2.5%;
padding-right: 5%;
padding-top: 2.5%;
`

export const Endereco = styled.div`
display: flex;
margin-top: 0;
margin-bottom: 0;
padding: 0;
font-size: 1.5vw;


@media screen and (max-width: 768px){
        font-size: 2vw;
        
    }
    
`

export const EnderecoTexto = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.5vw;
  

    @media screen and (max-width: 768px){
        font-size: 2vw;
        
    }
`

export const LinkRodape = styled(Link)`
    font-size: 1.2vw;


     @media screen and (max-width: 768px){
        font-size: 2vw;
        
        
    }
`

export const Telefone = styled.div`
margin-top: 10%;
display: flex;
align-items: center;
font-size: 1.5vw;
@media screen and (max-width: 768px){
        font-size: 2vw;
        
    }
    
`

export const Email = styled.div`
display: flex;
padding-top: 10%;
@media screen and (max-width: 768px){
        font-size: 2vw;
        
    }
`
export const SectionHome = styled.div`
    
    
    margin-top: 0;
    background-color: #90eee0;
   
      
`

export const ImgRodape = styled.img`
    width: 10%;
    padding-right: 5%;
    
`

export const SubTitulo = styled.h2`
    padding: 2%;
    margin: 0;
    color: white;
    text-shadow: 5px 5px 5px black;
    
`

export const ImagemSliderHome = styled.img`
    width: 100%;
  
    
`
export const Textos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const TextoHome = styled.p`
    /* background-color: white; */
    width: 80%;
    color: black;
    
    
`