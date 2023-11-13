import { IconContainer, IconePersonalizado, ItensDaLista } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'
import TextoAnimado from "../../TextoAnimado";
import { motion } from "framer-motion"
import { useState } from "react";

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "+15%" }
}

export default function ItemNavegacao({ children, icon, link }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Link to={`${link}`}>
                <ItensDaLista >
                    <IconePersonalizado
                        onMouseEnter={() => setIsOpen(isOpen => !isOpen)}
                        onMouseLeave={() => setIsOpen(!isOpen)}
                    >
                        <motion.div
                            animate={isOpen ? "open" : "closed"}
                            variants={variants}
                        >
                            {isOpen && (
                                <TextoAnimado children={children} />
                            )}
                        </motion.div>
                        <IconContainer>
                            <FontAwesomeIcon className="fa-xl" icon={icon} />
                        </IconContainer>
                    </IconePersonalizado>
                </ItensDaLista>
            </Link >
        </>
    )
}