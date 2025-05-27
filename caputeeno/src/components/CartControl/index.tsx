import { CartIcon } from "@/assets/icons/cart-icon"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { CartCount, Container } from "./styles"

export function CartControl(){
    const { value } = useLocalStorage('cart-items', [])

    return (
        <Container>
            <CartIcon/>
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}