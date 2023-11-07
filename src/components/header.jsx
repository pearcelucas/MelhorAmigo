
import { HeaderDiv, NavLi, NavLink, Navbar, Nome } from "./styled"


export const Header = () =>{
    return (
        <HeaderDiv>
        <Nome>Melhor Amigo</Nome>
        <Navbar>
            <NavLi>
                <NavLink to="/">Home</NavLink>
            </NavLi>
            <NavLi>
                <NavLink to="produtos">Produtos</NavLink>
            </NavLi>
            <NavLi>
                <NavLink to="fotos">Fotos</NavLink>
            </NavLi>
            <NavLi>
                <NavLink to="contatos">Contatos</NavLink>
            </NavLi>
            
        </Navbar>


        </HeaderDiv>



    )
} 