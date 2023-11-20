import { Card, Cards, DescricaoCard, ImgCard, ImgCardFoto, SaibaMais, SectionFotos, SubTitulo } from "../components/styled"
import Foto1 from "../imagens/Fotos/cachorro-fofo-com-donos-na-pet-shop.jpg"
import Foto2 from "../imagens/Fotos/cachorro-marrom-fofo-na-loja-de-animais.jpg"
import Foto3 from "../imagens/Fotos/cachorro-sendo-examinado-pelo-veterinario-na-loja-de-animais.jpg"
import Foto4 from "../imagens/Fotos/cao-adoravel-com-dono-na-pet-shop.jpg"
import Foto5 from "../imagens/Fotos/feche-a-mulher-embacada-segurando-o-cachorro.jpg"
import Foto6 from "../imagens/Fotos/foto-de-filhotes-de-cachorro-berner-sennenhund-na-parede-amarela.jpg"
import Foto7 from "../imagens/Fotos/mulher-de-tiro-medio-comprando-comida-de-cachorro.jpg"
import Foto8 from "../imagens/Fotos/mulher-segurando-um-cachorrinho-fofo-na-loja-de-animais.jpg"
import Foto9 from "../imagens/Fotos/mulher-tosquia-um-cachorro-cachorro-sentado-no-sofa-raca-yorkshire-terrier.jpg"
import Foto10 from "../imagens/Fotos/o-conceito-de-medicina-cuidados-com-animais-de-estimacao-e-pessoas-medico-veterinario-e-cao-na-clinica-veterinaria.jpg"


export const Fotos = () =>{
    return (
        <SectionFotos>
        <SubTitulo>Galeria de Fotos</SubTitulo>
        <Cards>
            <Card>
                <ImgCardFoto src={Foto1}/>
                <SubTitulo>Legenda</SubTitulo>
                <DescricaoCard>Informações adicionais</DescricaoCard>
                   </Card>
            <Card>
                <ImgCardFoto src={Foto2}/>
                <SubTitulo>Tratamentos Simples</SubTitulo>
                <DescricaoCard>É composto por dois tratamentos especiais e completos, para remoção de odores e nutrição da pelagem.</DescricaoCard>
                   </Card>
            <Card>
                <ImgCardFoto src={Foto3}/>
                <SubTitulo>Legenda</SubTitulo>
                <DescricaoCard>Informações adicionais</DescricaoCard></Card>
            <Card>
                <ImgCardFoto src={Foto3}/>
                <SubTitulo>Legenda</SubTitulo>
                <DescricaoCard>Informações adicionais</DescricaoCard></Card>
            <Card>
                <ImgCardFoto src={Foto4}/>
                <SubTitulo>Legenda</SubTitulo>
                <DescricaoCard>Informações adicionais</DescricaoCard></Card>
            <Card>
                <ImgCardFoto src={Foto5}/>
                <SubTitulo>Legenda</SubTitulo>
                <DescricaoCard>Informações adicionais</DescricaoCard> </Card>
            <Card>
                <ImgCardFoto src={Foto6}/>
                <SubTitulo>Legenda</SubTitulo>
                <DescricaoCard>Informações adicionais</DescricaoCard></Card>
            <Card>
                <ImgCardFoto src={Foto7}/>
                <SubTitulo>Legenda</SubTitulo>
                <DescricaoCard>Informações adicionais</DescricaoCard>  </Card>
            <Card>
                <ImgCardFoto src={Foto8}/>
                <SubTitulo>Legenda</SubTitulo>
                <DescricaoCard>Informações adicionais</DescricaoCard> </Card>
            <Card>
                <ImgCardFoto src={Foto9}/>
                <SubTitulo>Legenda</SubTitulo>
                <DescricaoCard>Informações adicionais</DescricaoCard>   
            </Card>
            <Card>
                <ImgCardFoto src={Foto10}/>
                <SubTitulo>Legenda</SubTitulo>
                <DescricaoCard>Informações adicionais</DescricaoCard></Card>
            
        </Cards>
        </SectionFotos>
    )
} 