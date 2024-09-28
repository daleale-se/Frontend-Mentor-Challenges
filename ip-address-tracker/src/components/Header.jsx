import styled from "styled-components"
import Search from "./Search"
import UbicationData from "./UbicationData"
import mobileBg from "../assets/images/pattern-bg-mobile.png"

const HeaderContainer = styled.header`
    background: url(${mobileBg});
    background-size: cover;
    background-repeat: no-repeat;
    height: 18rem;
    padding: .5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .75rem;
`

const AppTitle = styled.h1`
    font-family: "Rubik";
    color: #fff;
    font-size: 1.5rem;
`

const Header = () => {
  return (
    <HeaderContainer>
        <AppTitle>IP Address Tracker</AppTitle>
        <Search />
        <UbicationData />
    </HeaderContainer>
  )
}

export default Header