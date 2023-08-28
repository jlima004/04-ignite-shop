import { useContext } from 'react'
// import { useState } from 'react'
// import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'
import { HandbagContext } from '@/contexts/HandbagContext'

import {
  ImageContainer,
  ProductContainer,
  ProjectDetails,
} from '@/styles/pages/product'

interface ProductProps {
  product: {
    id: string
    imageUrl: string
    name: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { addProduct, lineItens } = useContext(HandbagContext)
  const { isFallback } = useRouter()
  // const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  /* async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar com alguma ferramenta de observabilidade (Datadog / Sentry)

      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  } */

  function handleAddInHandbag() {
    addProduct(product)
  }

  console.log(lineItens)

  if (isFallback) {
    return <h1 style={{ color: 'yellow', fontSize: '3rem' }}>Loading...</h1>
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProjectDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            onClick={handleAddInHandbag}
            // disabled={isCreatingCheckoutSession}
          >
            Colocar na sacola
          </button>
        </ProjectDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Buscar os produtos mais vendidos / mais acessados

  return {
    paths: [{ params: { id: 'prod_OWS6euEl7XBfuL' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.id as string

  const product = await stripe.products.retrieve(productId as string, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format((price.unit_amount || 0) / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
