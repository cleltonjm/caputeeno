import { InputContainer, PrimaryInput } from "./styles"
import { SearchIcon } from "@/assets/icons/search-icon"

export function Input() {
    return (
        <InputContainer>
            <PrimaryInput placeholder="Procurando por algo específico?" />
            <SearchIcon />
        </InputContainer>
    )
}