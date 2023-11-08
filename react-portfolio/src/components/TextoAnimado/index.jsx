import { TextoAnimadoContainer } from "./styled";

export default function TextoAnimado({ children }) {
    return (
        <TextoAnimadoContainer>
            {children}
        </TextoAnimadoContainer>
    )
}