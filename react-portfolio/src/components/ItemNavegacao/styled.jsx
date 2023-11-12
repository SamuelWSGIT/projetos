import styled from "styled-components";

export const ItensDaLista = styled.li`

`;

export const IconePersonalizado = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: .2rem;
  margin-bottom: .2rem;
`;

export const IconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: .1rem;
  background-color: var(--color-border);
  &:hover{
    background-color: var(--color-bg);
  }
`