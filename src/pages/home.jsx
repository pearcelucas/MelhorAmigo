import { Whats } from "../components/BotaoWhatsapp"
import { Slide } from "../components/slider"
import { SectionHome, SubTitulo, TextoHome, Textos } from "../components/styled"
import imagemPrincipal from "../imagens/child-mother-pet-shop-with-their-dog.jpg"

export const Home = () => {
  return (

    <SectionHome>
      <SubTitulo>Bem-vindo ao Melhor Amigo!!!</SubTitulo>
      <Slide />
      <Textos>
        <TextoHome>No Petshop "Melhor Amigo", nós entendemos que seu animal de estimação é
          mais do que apenas um bichinho, é um membro especial da sua família. Com
          isso em mente, estamos comprometidos em fornecer cuidados excepcionais e
          serviços de alta qualidade para garantir que seu melhor amigo tenha uma vida
          feliz e saudável.</TextoHome>
        <TextoHome>Com uma equipe dedicada e apaixonada por animais, nossos profissionais
          treinados estão prontos para oferecer os melhores cuidados para o seu pet.
          Desde serviços de tosa profissional, onde deixaremos seu animalzinho com um
          visual impecável, até a limpeza e higienização completa, proporcionamos um
          ambiente seguro e tranquilo para que seu amigo se sinta confortável durante
          todo o processo.</TextoHome>
        <TextoHome>Sabemos que a alimentação é fundamental para a saúde do seu pet, por isso
          oferecemos uma ampla variedade de rações de alta qualidade e alimentos
          balanceados, adaptados às necessidades individuais de cada animal. Nossos
          especialistas estão disponíveis para fornecer orientação personalizada e ajudálo a escolher a melhor opção para o seu amiguinho.
          No Petshop "Melhor Amigo", também acreditamos na importância da
          socialização e diversão para o bem-estar dos animais. Por isso, oferecemos
          momentos especiais de brincadeiras e interação em nosso espaço dedicado,
          garantindo que seu pet se divirta e faça novos amigos. Além disso, temos uma
          ampla variedade de brinquedos e acessórios para enriquecer a vida do seu
          animalzinho.</TextoHome>
        <TextoHome>Nossa galeria de fotos é o reflexo do nosso amor e cuidado pelos animais. Lá,
          você poderá ver alguns dos adoráveis clientes que já passaram pelo nosso
          petshop. É um verdadeiro prazer atender a cada um deles e contribuir para o
          seu bem-estar e felicidade.</TextoHome>
        <TextoHome>Estamos ansiosos para conhecê-lo e ao seu melhor amigo! Visite-nos no
          Petshop "Melhor Amigo" e descubra a diferença que fazemos na vida dos
          animais de estimação. Entre em contato conosco por telefone, e-mail ou através
          do nosso formulário de contato no nosso site. Seu pet merece o melhor, e nós
          estamos aqui para fornecer exatamente isso. Confie no Petshop "Melhor
          Amigo" para cuidar do seu melhor amigo como se fosse nosso próprio.</TextoHome>
      </Textos>
      <Whats/>
    </SectionHome>
    
  )
} 