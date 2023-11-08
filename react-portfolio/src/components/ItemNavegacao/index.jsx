import { useState } from "react";
import Button from "../Button";
import { IconePersonalizado, ItensDaLista } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'

export default function ItemNavegacao({ children, icon }) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Link to={`${children}`}>
                <ItensDaLista>
                    <IconePersonalizado>
                        <FontAwesomeIcon icon={icon} onMouseEnter={() => setOpen(!open)}>
                            <Button>
                                {children}
                            </Button>
                        </FontAwesomeIcon>
                        {open && children}
                    </IconePersonalizado>
                </ItensDaLista>
            </Link>
        </>
    )
}