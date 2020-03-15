import styled from "styled-components";
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  background: transparent;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--mainPink)"};
  color: ${props => (props.cart ? "var(--mainYellow)" : "var(--mainDark)")};
  margin: 0.2rem 0rem 0.2rem 0;
  padding: 0.2rem 0.5rem;

  border: 2px solid #fde1dd !important;

  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: #fde1dd;
  }
  &:focus {
    outline: none;
  }
`;
