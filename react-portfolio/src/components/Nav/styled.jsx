import styled from "styled-components";

export const NavContainer = styled.nav`
 display: flex;
 flex-direction: column;
 right: 0;
 position: absolute;
 padding: .5rem;
 align-items: end;
`;

export const ListaNavegacao = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: fit-content;
`;

export const BotaoFixo = styled.button`
  border: none;
  background: none;
  margin: 0;
  width: fit-content;
  cursor: pointer;
`;