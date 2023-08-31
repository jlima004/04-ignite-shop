import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Stripe from 'stripe'
import Image from 'next/image'

import { stripe } from '@/lib/stripe'

import { SuccessContainer, ImageContainer } from '@/styles/pages/success'

interface SuccessProps {
  custumerName: string
  products: {
    name: string
    imageUrl: string
    qtd: number
  }[]
}

export default function Success({ custumerName, products }: SuccessProps) {
  useEffect(() => {
    localStorage.setItem('@ignite-shop:buy-state-1.0.0', 'BOUGHT')
  }, [])

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        {products.length === 1 && (
          <ImageContainer>
            <Image
              src={products[0].imageUrl}
              width={130.18}
              height={142.69}
              alt=""
            />
          </ImageContainer>
        )}
        <div className="imagesContainer">
          {products.length > 1 &&
            products.map((product) => (
              <ImageContainer className="teste" key={product.name}>
                <Image
                  src={product.imageUrl}
                  width={130.18}
                  height={142.69}
                  alt=""
                />
              </ImageContainer>
            ))}
        </div>

        <h1>Compra efetuada!</h1>

        {products.length === 1 &&
          (products[0].qtd > 1 ? (
            <p>
              Uhuul <strong>{custumerName}</strong>, sua{' '}
              <strong>{products[0].name}</strong> já está a caminho da sua casa.
            </p>
          ) : (
            <p>
              Uhuul <strong>{custumerName}</strong>, sua compra de{' '}
              {products[0].qtd} x <strong>{products[0].name}</strong> já está a
              caminho da sua casa.
            </p>
          ))}

        {products.length > 1 && (
          <p>
            Uhuul <strong>{custumerName}</strong>, sua compra de:{' '}
            {products.map((product) => (
              <span key={product.name}>
                {product.qtd} x <strong>{product.name}</strong>,{' '}
              </span>
            ))}{' '}
            já está a caminho da sua casa.
          </p>
        )}

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  let session: Stripe.Response<Stripe.Checkout.Session> | null = null

  try {
    session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'line_items.data.price.product'],
    })
  } catch (error) {
    console.log('ERRO ===>', error)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const custumerName = session?.customer_details?.name
  const lineItems = session?.line_items?.data as Stripe.LineItem[]

  const products = lineItems.map((item) => {
    const product = item.price?.product as Stripe.Product
    return {
      name: product.name,
      imageUrl: product.images[0],
      qtd: item.quantity,
    }
  })

  return {
    props: {
      custumerName,
      products,
    },
  }
}
