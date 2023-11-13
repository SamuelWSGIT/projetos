import ItemNavegacao from "./ItemNavegacao";
import { ListaNavegacao, NavegacaoBotaoContainer, BotaoFixo } from "./styled";
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { faClipboard } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { useState } from "react";

const variants = {
    open: {
        opacity: 1, y: 0,
    },
    closed: {
        opacity: 0, y: "20%",
    },
}

export default function NavegacaoBotao() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <NavegacaoBotaoContainer>
                <BotaoFixo onClick={() => setIsOpen(isOpen => !isOpen)}>
                    <FontAwesomeIcon className="fa-2x" icon={faBars} />
                </BotaoFixo>
                <motion.nav
                    animate={isOpen ? "open" : "closed"}
                    variants={variants}
                >
                    {isOpen && (
                        <ListaNavegacao >
                            <ItemNavegacao link={"/"} icon={faHouse}>
                                <p>Home</p>
                            </ItemNavegacao>
                            <ItemNavegacao link={"sobre"} icon={faClipboard}>
                                <p>Sobre</p>
                            </ItemNavegacao>
                            <ItemNavegacao link={"contato"} icon={faUser}>
                                <p>Contato</p>
                            </ItemNavegacao>
                            <ItemNavegacao icon={faFileArrowDown}>
                                <p>Curriculo</p>
                            </ItemNavegacao>
                        </ListaNavegacao>
                    )}
                </motion.nav>
            </NavegacaoBotaoContainer>
        </>
    )
}

function Mostrar() {

}