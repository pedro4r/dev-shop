import { HomeContainer, Product, ShirtDetails } from "@/styles/pages/home"
import Head from 'next/head'
import Image from "next/image"
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { stripe } from "@/lib/stripe"
import { GetStaticProps } from "next"
import Stripe from "stripe"
import Link from "next/link"
import { Handbag } from "phosphor-react"
import { useContext } from "react"
import { ShopContext } from "@/context/ShopContext"

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    defaultPriceId: string;
  }[]
}

export default function Home({ products }: HomeProps) {

  const { addToCart } = useContext(ShopContext);

  function handleAddToCart(id: string) {
    const productChose = products.filter(product => product.id === id);
    addToCart(productChose[0]);
  }

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | IgShop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />
              <footer>
                <Link href={`/product/${product.id}`} prefetch={false}>
                  <ShirtDetails>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </ShirtDetails>
                </Link>
                <button onClick={() => handleAddToCart(product.id)}>
                  <Handbag size={32} weight="bold" />
                </button>
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price.unit_amount / 100),
      defaultPriceId: price.id
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}