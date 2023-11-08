import ItemNavegacao from "../ItemNavegacao";
import { ListaNavegacao, NavContainer, BotaoFixo } from "./styled";
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { faClipboard } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Navegacao() {
    return (
        <>
            <NavContainer>
                <BotaoFixo>
                    <FontAwesomeIcon className="fa-2x" icon={faBars} />
                </BotaoFixo>
                <ListaNavegacao>
                    <ItemNavegacao icon={faHouse}>
                        <p>Home</p>
                    </ItemNavegacao>
                    <ItemNavegacao icon={faClipboard}>
                        <p>Test2</p>
                    </ItemNavegacao>
                    <ItemNavegacao icon={faUser}>
                        <p>Test3</p>
                    </ItemNavegacao>
                    <ItemNavegacao icon={faFileArrowDown}>
                        <p>Test4</p>
                    </ItemNavegacao>
                </ListaNavegacao>
            </NavContainer>
        </>
    )
}

function Mostrar() {

}