import { Card, Cards, DescricaoCard, ImgCard, PrecoCard, SaibaMais, SectionProdutos, SubTitulo } from "../components/styled"
import ImgProduto1 from "../imagens/Produtos/(20)_Ração_Seca_Nutrilus_Pro__Frango___Carne_para_Cães_Adultos_2.jpg"
import ImgProduto2 from "../imagens/Produtos/131-98d8fbf6ac9fc0366516948075128419-1024-1024.webp"
import ImgProduto3 from "../imagens/Produtos/2617011_FRENTE.webp"
import ImgProduto4 from "../imagens/Produtos/31027528640_Ração_Seca_Liva_para_Cães_Adultos_de_Raças_Pequenas_-_10_1_Kg.jpg"
import ImgProduto5 from "../imagens/Produtos/Ração_Premier_Pet_Ambientes_Internos_Cães_Filhotes_Frango_e_Salmão_-_12_Kg_3108262-3_1.webp"
import ImgProduto6 from "../imagens/Produtos/Ração_Premier_Pet_Formula_Cães_Adultos_Raças_Pequenas_-_20_Kg_3108224-3_1.webp"
import ImgProduto7 from "../imagens/Produtos/Ração_Seca_Magnus_Todo_Dia_Carne_para_Cães_Adultos_311810.jpg"
import ImgProduto8 from "../imagens/Produtos/Ração_Seca_Nutrilus_Pro_Carne_para_Cães_Adultos_31027518112_(15).webp"
import ImgProduto9 from "../imagens/Produtos/Ração_Seca_True_para_Cães_Adultos_Raças_Médias_e_Grandes_10_1KG_2638254.webp"
import ImgProduto10 from "../imagens/Produtos/ossinhos-natural-4-unidades-canva-858316a30ed907b9a316975027480136-1024-1024.webp"
import ImgProduto11 from "../imagens/Produtos/dog-beer-frango-frente-cv-890c50c942910f983d169664413545511-de70af8acbc284fc4516966442070436-1024-1024.webp"
import ImgProduto12 from "../imagens/Produtos/granulado-10kg-canva-afeb63adcadd56f33c169748382504321-01fac70f36fbdda78316974843188115-1024-1024.webp"
import ImgBanho from "../imagens/banho.jpg"
import ImgTratamento from "../imagens/lavar-cachorro-de-estimacao-em-casa.jpg"
import ImgHidratacao from "../imagens/processo-de-dryin-cachorro-pequeno-se-senta-na-mesa-secagem-de-caes-por-profissional.jpg"
import ImgTosaHigienica from "../imagens/processo-de-corte-de-cabelo-cachorro-pequeno-se-senta-na-mesa-cachorro-com-um-profissional.jpg"
import ImgTosa from "../imagens/lindo-retrato-de-cachorro.jpg"
import ImgTrimming from "../imagens/yorkshire-terrier-recebendo-procedimento-no-salao-de-cabeleireiro-foto-recortada-de-um-cachorrinho-yorkshire-terrier-cortando-o-cabelo.jpg"

import { Link } from "react-router-dom"


export const Produtos = () =>{
    return (
        <SectionProdutos>
        <SubTitulo>Limpeza</SubTitulo>
        <Cards>
            <Card>
                <h2>Banhos Funcionais</h2>
                <ImgCard src={ImgBanho}/>
                <DescricaoCard>Primeiro, uma boa higienização com Shampoo de Limpeza Profunda, em seguida limpeza da face com Shampoo Suave, e condicionamento. Para finalizar, utilizamos a linha de fragrâncias, que deixam os pets com a pelagem suavemente perfumada, sem agredir seu delicado olfato.</DescricaoCard>
                <SaibaMais to="https://wa.me/5585999999999">Entre em contato</SaibaMais>
            </Card>
            <Card>
                <h2>Tratamentos Simples</h2>
                <ImgCard src={ImgTratamento}/>
                <DescricaoCard>É composto por dois tratamentos especiais e completos, para remoção de odores e nutrição da pelagem.</DescricaoCard>
                <SaibaMais to="https://wa.me/5585999999999">Entre em contato</SaibaMais>
            </Card>
            <Card>]
                <h2>Hidratação</h2>
                <ImgCard src={ImgHidratacao}/>
                <DescricaoCard>A hidratação mantém a pelagem saudável, pois não apenas repõe aminoácidos e queratina, mas também sela a cutícula do pelo, evitando que embarace e quebre.</DescricaoCard>
                <SaibaMais to="https://wa.me/5585999999999">Entre em contato</SaibaMais>
            </Card>
        </Cards>
        <SubTitulo>Tosa</SubTitulo>
        <Cards>
            <Card>
                <h2>TOSA HIGIÊNICA</h2>
                <ImgCard src={ImgTosaHigienica}/>
                <DescricaoCard>Corte dos pelos do bumbum, coxas, barriga, limpeza do pelo entre os coxins (almofadinhas das patas), limpeza dos pelos da face.</DescricaoCard>
                <SaibaMais to="https://wa.me/5585999999999">Entre em contato</SaibaMais>
            </Card>
            <Card>
            <h2>TOSA</h2>
                <ImgCard src={ImgTosa}/>
                <DescricaoCard>Tosas especializadas, que realçam as formas de cães e gatos, que vão desde tirar as pontas até abaixar bem o pelo, de acordo com a necessidade.</DescricaoCard>
                <SaibaMais to="https://wa.me/5585999999999">Entre em contato</SaibaMais>
            </Card>
            <Card>
            <h2>TRIMMING</h2>
                <ImgCard src={ImgTrimming}/>
                <DescricaoCard>Tosa especializada, que realça as formas e remove o subpelo.</DescricaoCard>
                <SaibaMais to="https://wa.me/5585999999999">Entre em contato</SaibaMais>
            </Card>
           
            
        </Cards>
        <SubTitulo>Rações</SubTitulo>
        <Cards>
            <Card>
                <ImgCard src={ImgProduto1}/>
                <DescricaoCard>Ração Seca Nutrilus Pro+ frango e carne para cães adultos - 20kg</DescricaoCard>
                <SaibaMais>R$ 163,00</SaibaMais>
            </Card>
            <Card>
                <ImgCard src={ImgProduto2}/>
                <DescricaoCard>Tapete Higienico Good Pad - 60x60cm - 30 Unidades</DescricaoCard>
                <SaibaMais>R$ 39,00</SaibaMais>
            </Card>
            <Card>
                <ImgCard src={ImgProduto3}/>
                <DescricaoCard>Ração Seca Nutrilus Pro+ frango e carne para cães senior - 15kg</DescricaoCard>
                <SaibaMais>R$ 129,00</SaibaMais>
            </Card>
            <Card>
                <ImgCard src={ImgProduto4}/>
                <DescricaoCard>Ração SEca Liva Super Premiu para Cães Adultos de RAças Pequenas - 10,1kg</DescricaoCard>
                <SaibaMais>R$ 146,00</SaibaMais>
            </Card>
            <Card>
                <ImgCard src={ImgProduto5}/>
                <DescricaoCard>Ração Premier Pet Ambientes Internos Cães Filhotes Frango e Salmão - 12kg</DescricaoCard>
                <SaibaMais>R$ 224,00</SaibaMais>
            </Card>
            <Card>
                <ImgCard src={ImgProduto6}/>
                <DescricaoCard>Ração Premier Pet Formula Cães Adultos RAças Pequenas - 20kg</DescricaoCard>
                <SaibaMais>R$ 296,00</SaibaMais>
            </Card>
            <Card>
                <ImgCard src={ImgProduto7}/>
                <DescricaoCard>RAção Seca Magnus Todo Dia Carne para Cães Adultos - 20kg</DescricaoCard>
                <SaibaMais>R$ 124,00</SaibaMais>
            </Card>
            <Card>
                <ImgCard src={ImgProduto8}/>
                <DescricaoCard>Ração Seca Nutrilus Pro CArne para Cães Adultos - 15kg</DescricaoCard>
                <SaibaMais>R$ 110,00</SaibaMais>
            </Card>
            <Card>
                <ImgCard src={ImgProduto9}/>
                <DescricaoCard>Ração Seca True para Cães Adultos RAças Médias e GRandes - 10,1kg</DescricaoCard>
                <SaibaMais>R$ 256,00</SaibaMais>
            </Card>
            <Card>
                <ImgCard src={ImgProduto10}/>
                <DescricaoCard>Ossinhos IpetPocket Natural com 4 Unidades - Sabor e Cuidados em uam Mordida!</DescricaoCard>
                <SaibaMais>R$ 3,99</SaibaMais>
            </Card>
            <Card>
                <ImgCard src={ImgProduto11}/>
                <DescricaoCard>Dog Beer Ipet Frango: A Primeira CErveja para Cães!</DescricaoCard>
                <SaibaMais>R$ 13,99</SaibaMais>
            </Card>
            <Card>
                <ImgCard src={ImgProduto12}/>
                <DescricaoCard>Granulado Ipet Woods 1okg para Roedores</DescricaoCard>
                <SaibaMais>R$ 48,99</SaibaMais>
            </Card>
        </Cards>
        </SectionProdutos>
    )
} 