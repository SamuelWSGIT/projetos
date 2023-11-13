import { Link } from "react-router-dom";
import { ItemNavDeskTopContainer } from "./styled";

export default function ItemNavDeskTop({ children, link }) {
    return (
        <Link to={`${link}`}>
            <ItemNavDeskTopContainer>{children}</ItemNavDeskTopContainer>
        </Link>
    )
}