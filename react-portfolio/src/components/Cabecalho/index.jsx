import NavDeskTop from "../NavDeskTop";
import NavegacaoBotao from "../NavegacaoBotao";
import { BannerCabecalho, CabecalhoContainer, NavegacaoContainer, NavegacaoText } from "./styled";

export default function Cabecalho() {
    return (
        <>
            <CabecalhoContainer>
                <NavegacaoText>
                    <span>&lt;/&gt;</span>
                    <h1>Developer</h1>
                </NavegacaoText>
                <NavegacaoContainer>
                    <NavDeskTop />
                    <NavegacaoBotao />
                </NavegacaoContainer>
            </CabecalhoContainer>
            <BannerCabecalho>
                texto
                imagem
            </BannerCabecalho>
        </>
    )
}