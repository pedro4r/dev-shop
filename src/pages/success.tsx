import { SuccessContainer, ImageContainer } from "@/styles/pages/success";
import Link from "next/link";

export default function Success() {
    return (
        <SuccessContainer>
            <h1>Purchase Completed</h1>
            <ImageContainer>
            </ImageContainer>

            <p>Hey <strong>Bryan!</strong><br />Your <strong>Shirt</strong> will be delivered soon!</p>

            <Link href="/">Back to the catalog</Link>
        </SuccessContainer>
    )
}