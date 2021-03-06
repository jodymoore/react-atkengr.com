

import styled from 'styled-components'

export const ButtonContainer = styled.button `
  text-transform:capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 2px solid black;
  border-color: ${prop => (prop.cart ? "var--(mainYellow)" : " var(--lightBlue)")};
  color: ${prop => (prop.cart ? "var--(mainYellow)" : " var(--lightBlue)")};
  border-radius: 5px;
  padding: 0.2rem 0.5rem 0.2rem 0;
  cursor: pointer;
  margin 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover{
  	 background: ${prop => (prop.cart ? "var--(mainYellow)" : " var(--lightBlue)")};
  	 color: white;
  }
`;
