import Image from 'next/image'
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"

import { HomeContainer, Product } from '@/styles/pages/home'

import camiseta1 from '../assets/shirts/1.png'
import camiseta2 from '../assets/shirts/2.png'
import camiseta3 from '../assets/shirts/3.png'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      <Product className='keen-slider__slide'>
        <Image src={camiseta1} width={520} height={480} alt='' />

        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={camiseta2} width={520} height={480} alt='' />

        <footer>
          <strong>Camiseta Y</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={camiseta3} width={520} height={480} alt='' />

        <footer>
          <strong>Camiseta Z</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={camiseta3} width={520} height={480} alt='' />

        <footer>
          <strong>Camiseta ZZ</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
