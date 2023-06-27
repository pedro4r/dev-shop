import { stripe } from "@/lib/stripe";
import { SuccessContainer, ImageContainer, ProductsImages } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SuccessProps {
    customerName: string;
    products: {
        id: string;
        name: string;
        imageUrl: string
    }[]
}

export default function Success({ customerName, products }: SuccessProps) {

    return (
        <>
            <Head>
                <title>Purchase Completed | IgShop</title>
                <meta name="robots" content="noindex" />
            </Head>

            <SuccessContainer>
                <h1>Purchase Completed</h1>

                <ProductsImages>
                    {
                        products.map(item => (
                            <ImageContainer key={item.id}>
                                <Image src={item.imageUrl} width={130} height={132} alt="" />
                            </ImageContainer>
                        ))
                    }
                </ProductsImages>

                <p>Hey <strong>{customerName}</strong><br />Your order will be delivered soon!</p>

                <Link href="/">Back to the catalog</Link>
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
            }
        }
    }

    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const products = session.line_items.data.map(item => {
        const newItem = item.price.product as Stripe.Product;
        return {
            id: newItem.id,
            name: newItem.name,
            imageUrl: newItem.images[0],
        }
    })

    const customerName = session.customer_details.name;

    return {
        props: {
            customerName,
            products,
        }
    }
}

