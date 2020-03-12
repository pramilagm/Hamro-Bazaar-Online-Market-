import styled from "styled-components";
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  background: transparent;
  border-radius: 3px;
  font-size: 1.4rem;
  margin: 0 2rem;
  padding: 2rem 1rem;
  border: 2px solid #fde1dd !important;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: #fde1dd;
  }
  &:focus {
    outline: none;
  }
`;
