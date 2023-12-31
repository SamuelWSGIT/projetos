import styled from "styled-components";

export const ItensDaLista = styled.li`
  
`;

export const IconePersonalizado = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: .2rem;
`;

export const IconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 .1rem;
  border-radius: 50px 50px 50px 0px;
  border: .1rem;
  background-color: var(--color-border);
  &:hover{
    background-color: var(--color-bg);
  }
`