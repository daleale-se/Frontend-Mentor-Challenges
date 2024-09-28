import arrowIcon from "../assets/images/icon-arrow.svg"
import styled from 'styled-components'

const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    height: 3.5rem;
`

const SearchInput = styled.input`
    height: 100%;
    border: none;

    font-family: "Rubik";
    font-size: 14px;
    width: 50%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding-left: 1.25rem;
`

const SearchButton = styled.button`
    height: 100%;
    border: none;
    background-color: #232323;

    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    width: 50%;
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