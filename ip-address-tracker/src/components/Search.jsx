import arrowIcon from "../assets/images/icon-arrow.svg"
import styled from 'styled-components'

const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    height: 3.25rem;
    max-width: 30rem; /* Constrain the parent div's width */
    width: 86%; /* Allow it to fill the container's width */
`

const SearchInput = styled.input`
    height: 100%;
    border: none;
    width: 100%; /* This will ensure the input grows to fill the available space */

    font-family: "Rubik";
    font-size: 14px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding-left: 1.25rem;
    flex-grow: 1;
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

`

const Search = () => {

  return (
    <SearchDiv>
        <SearchInput type="search" name="search" placeholder="Search for any IP address or domain"/>
        <SearchButton><img src={arrowIcon} alt="Logo" /></SearchButton>
    </SearchDiv>
  )

}

export default Search