import ItemNavDeskTop from "./ItemNavDeskTop";
import { ListaNavDeskTop, NavDeskTopContainer } from "./style";

export default function NavDeskTop() {
    return (
        <NavDeskTopContainer>
            <ListaNavDeskTop>
                <ItemNavDeskTop link={"/"}>
                    <p>Home</p>
                </ItemNavDeskTop>
                <ItemNavDeskTop link={"sobre"}>
                    <p>Sobre</p>
                </ItemNavDeskTop>
                <ItemNavDeskTop link={"contato"}>
                    <p>Contato</p>
                </ItemNavDeskTop>
                <ItemNavDeskTop link={"Curriculo"}>
                    <p>Curriculo</p>
                </ItemNavDeskTop>
            </ListaNavDeskTop>
        </NavDeskTopContainer>
    )
}