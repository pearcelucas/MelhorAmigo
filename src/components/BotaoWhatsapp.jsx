import { BotaoWhatsapp, Whatsapp } from "../components/styled"
import whatsapp from "../imagens/whatsapp.png"



export const Whats = () => {
    return(
        <BotaoWhatsapp to="https://wa.me/5585999999999">
                <Whatsapp src={whatsapp} />
        </BotaoWhatsapp>
    )
}