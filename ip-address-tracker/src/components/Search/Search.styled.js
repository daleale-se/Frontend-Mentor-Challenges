import styled, { keyframes, css } from 'styled-components'
import { mainFontFamily } from "../../variables.styled.js"

const shakingAnimation = keyframes`
  0% { transform: translateX(0px); }
  25% { transform: translateX(-3px); }
  50% { transform: translateX(3px); }
  75% { transform: translateX(-3px); }
  100% { transform: translateX(0px); }
`

const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    height: 3.25rem;
    max-width: 30rem; 
    width: 86%;
    ${props => props.$shaking && css`
        animation: ${shakingAnimation} .3s 1;
    `}
`

const SearchInput = styled.input`
    height: 100%;
    border: none;
    width: 100%; 

    font-family: ${mainFontFamily};
    font-size: 13px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding-left: 1.25rem;
    padding-right: .25rem;
    flex-grow: 1;

    &:hover {
        cursor: pointer;
    }
`

const SearchButton = styled.button`
    height: 100%;
    border: none;
    background-color: #232323;
    width: 4rem;

    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
`

export {
    SearchDiv,
    SearchInput,
    SearchButton
}