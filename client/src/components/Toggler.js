import React from 'react'
import {FaMoon, FaSun} from 'react-icons/fa'
import { func, string } from 'prop-types';
import styled from "styled-components"
const Button = styled.button`
  background: #fff0;
  border: none;
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0;
  margin: 0;
  }
`;
const Toggle = ({theme,  toggleTheme }) => {
  console.log(theme);

    return (
        <Button onClick={toggleTheme} >
          {theme === 'light' ? <FaMoon /> : <FaSun />
          }         

        </Button>
        
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;