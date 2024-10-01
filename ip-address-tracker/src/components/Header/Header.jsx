import Search from "../Search/Search"
import UbicationData from "../UserInfo/UserInfo"
import { HeaderContainer, AppTitle } from "./Header.styled"

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