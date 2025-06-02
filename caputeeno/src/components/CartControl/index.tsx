import { CartIcon } from "@/assets/icons/cart-icon"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { CartCount, Container } from "./styles"
import { useRouter } from "next/navigation"

export function CartControl(){
    const router = useRouter();
    const { value } = useLocalStorage('cart-items', [])

    function handleNavigateToCart() {
        router.push("/cart")
    }

    return (
        <Container onClick={handleNavigateToCart}>
            <CartIcon />
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}