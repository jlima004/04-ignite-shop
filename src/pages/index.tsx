import { useState } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Stripe from 'stripe'
import { CaretLeft, CaretRight, Handbag } from '@phosphor-icons/react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { HomeContainer, Product } from '@/styles/pages/home'
import { stripe } from '@/lib/stripe'
import Link from 'next/link'

interface HomeProps {
  products: {
    id: string
    imageUrl: string
    name: string
    price: string
    priceNumber: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            prefetch={false}
          >
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                <span>
                  <Handbag weight="bold" />
                </span>
              </footer>
            </Product>
          </Link>
        ))}
        {instanceRef.current && currentSlide !== 0 && (
          <CaretLeft
            onClick={() => instanceRef.current?.prev()}
            className="arrow arrow--left"
          />
        )}
        {instanceRef.current === null && (
          <CaretRight
            onClick={() => instanceRef.current?.next()}
            className="arrow arrow--right"
          />
        )}
        {instanceRef.current !== null &&
          (currentSlide ===
            instanceRef.current.track.details.slides.length / 2 - 1 ||
            currentSlide === 0) && (
            <CaretRight
              onClick={() => instanceRef.current?.next()}
              className="arrow arrow--right"
            />
          )}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount || 0) / 100),
      priceNumber: price.unit_amount,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
