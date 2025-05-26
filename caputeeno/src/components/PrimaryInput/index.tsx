import { InputContainer, PrimaryInput } from "./styles"
import { SearchIcon } from "@/assets/icons/search-icon"

interface InputProps {
    value: string,
    handleChange: (value: string) => void
}

export function Input(props: InputProps) {
    return (
        <InputContainer>
            <PrimaryInput onChange={(event) => props.handleChange(event.target.value)} placeholder="Procurando por algo específico?" />
            <SearchIcon />
        </InputContainer>
    )
}