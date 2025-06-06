import { formatPrice } from "@/utils/format-price";
import { Card } from "./styles"
import { useRouter } from "next/navigation";
import { Divider } from "../Divider/styles";

interface ProductCardProps {
    image: string,
    title: string,
    price: number,
    id: string
}

export function ProductCard(props: ProductCardProps) {
    const router = useRouter();
    const price = formatPrice(props.price);

    function handleNavigate() {
        router.push("/product?id=" + props.id)
    }

    return (
        <Card onClick={handleNavigate}>
            <img src={props.image}></img>
            <div>
                <h3>{props.title}</h3>
                <Divider />
                <p>{price}</p>
            </div>
        </Card>
    )
}