import { ContatosEndereco, Divisoria, Email, Endereco, EnderecoTexto, ImgRodape, ItemLista2, LinkRodape, Lista2, MenuRapido, Nome, NomeRodape, Rodape, Sobre, Telefone, TituloRodape } from "./styled"
import ImgEndereco from "../imagens/location-pin.png"
import ImgWhats from "../imagens/whatsapp-icon.png"
import ImgEmail from "../imagens/mail.png"

export const NavRodape = () => {
    return (

        <Rodape>
            <Sobre>
            <NomeRodape>Melhor Amigo</NomeRodape>
                <p>No Petshop "Melhor Amigo", nós entendemos que seu animal de estimação é mais do que apenas um pet, é um membro especial da sua família. </p>
                <Divisoria />
                <p>Razão Social: PetShop Melhor Amigo</p>
                <p>CNPJ: 123.456.0001/01</p>
            </Sobre>
            <MenuRapido>
                <TituloRodape>Menu Rápido</TituloRodape>
                <Divisoria />
                <Lista2>
                    <li>
                        <ItemLista2 to="/">Home</ItemLista2>
                    </li>

                    <li>
                        <ItemLista2 to="/Produtos">Produtos</ItemLista2>
                    </li>

                    <li>
                        <ItemLista2 to="/Fotos">Fotos</ItemLista2>
                    </li>
                    <li>
                        <ItemLista2 to="/contatos">Contatos</ItemLista2>
                    </li>

                </Lista2>
            </MenuRapido>
            <ContatosEndereco>
                <TituloRodape>Contatos e endereço</TituloRodape>
                <Divisoria />
                <Endereco>
                    <ImgRodape src={ImgEndereco} />
                    <EnderecoTexto>Rua Lorem Ipsum, 1234</EnderecoTexto>
                </Endereco>
                <EnderecoTexto>Fortaleza/CE</EnderecoTexto>
                <EnderecoTexto>Cep: 60123-456</EnderecoTexto>
                <LinkRodape to="https://maps.app.goo.gl/xLcgvBs6z8nvh8y78">Ver no mapa</LinkRodape>
                <Telefone>
                    <ImgRodape src={ImgWhats} />
                    <EnderecoTexto>(85) 9999-9999</EnderecoTexto>
                </Telefone>
                <LinkRodape to="https://wa.me/5585999999999">abrir whatsapp</LinkRodape>
                <Email>
                    <ImgRodape src={ImgEmail} />
                    <EnderecoTexto>melhoramigo@email.com.br</EnderecoTexto>
                </Email>
            </ContatosEndereco>
        </Rodape>
    )
}