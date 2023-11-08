import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imagem1 from "../imagens/cachorro-fofo-com-dono-na-pet-shop.jpg";
import imagem2 from "../imagens/cachorro-fofo-na-loja-de-animais-com-o-dono.jpg";
import imagem3 from "../imagens/cao-adoravel-com-dono-na-pet-shop.jpg";
import imagem4 from "../imagens/child-mother-pet-shop-with-their-dog.jpg";
import imagem5 from "../imagens/lindo-retrato-de-cachorro.jpg";


import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { ImagemSliderHome } from "./styled";




export const Slide = () => {
  return (
    
    <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={0}
    breakpoints={{
      300: {slidesPerView: 1},
      768: {slidesPerView: 3}
    }}
    autoplay={{ delay: 1500 }}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >
      <SwiperSlide>
        <ImagemSliderHome src={imagem1} alt="Imagem 1" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSliderHome src={imagem2} alt="Imagem 2" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSliderHome src={imagem3} alt="Imagem 3" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSliderHome src={imagem4} alt="Imagem 4" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSliderHome src={imagem5} alt="Imagem 5" />
      </SwiperSlide>
   
      
    </Swiper>
  )
}


