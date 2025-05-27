"use client";

import { Container, ProductInfo } from "./styles";
import { ShopBagIcon } from '../../assets/icons/shopping-bag-icon';

import { DefaultPageLayout } from "@/components/DefaultPageLayout";
import { BackButton } from "@/components/BackButton";
import { useProduct } from "@/hooks/useProduct";
import { formatPrice } from "@/utils/format-price";

export default function Product({ searchParams }: { searchParams: { id: string }}) {
    const { data } = useProduct(searchParams.id)

    const handleAddToCart = () => {
        let cartItems = localStorage.getItem('cart-items');
        if(cartItems) {
            let cartItemsArray = JSON.parse(cartItems);

            let existingProductIndex = cartItemsArray.findIndex((item: { id: string; }) => item.id === searchParams.id);

            if(existingProductIndex != -1){
                cartItemsArray[existingProductIndex].quantity += 1;
            } else {
                cartItemsArray.push({ ...data, quantity: 1, id: searchParams.id })
            }

            localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
        } else {
            const newCart = [{ ...data, quantity: 1, id: searchParams.id }]
            localStorage.setItem('cart-items', JSON.stringify(newCart));
        }
    }

    return(
        <DefaultPageLayout>
            <Container>
                <BackButton navigate="/"/>
                <section>
                    <img src={data?.image_url}/>
                    <div>
                        <ProductInfo>
                            <span>{data?.category}</span>
                            <h2>{data?.name}</h2>
                            <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
                            <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
                            <div>
                                <h3>Descrição</h3>
                                <p>{data?.description}</p>
                            </div>
                        </ProductInfo>
                        <button onClick={handleAddToCart}>
                            <ShopBagIcon/>
                            Adicionar ao carrinho
                        </button>
                    </div>
                </section>
            </Container>
        </DefaultPageLayout>
    )
}