import { BackIcon } from "@/assets/icons/back-icon";
import { Button } from "./styles";
import { useRouter } from "next/navigation";

interface ButtonProps {
    navigate: string;
}

export function BackButton({ navigate }: ButtonProps) {
    const router = useRouter();

    function handleNavigate() {
        router.push(navigate)
    }

    return (
        <Button onClick={handleNavigate}>
            <BackIcon />
            Voltar
        </Button>
    )
}