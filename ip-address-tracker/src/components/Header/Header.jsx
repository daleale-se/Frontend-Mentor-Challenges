import Search from "../Search/Search"
import UbicationData from "../UserInfo/UserInfo"
import { HeaderContainer, AppTitle } from "./Header.styled"

const Header = () => {
  return (
    <HeaderContainer>
        <AppTitle>IP Address Tracker</AppTitle>
        <Search />
        <UbicationData
          ipAddress="192.212.174.101"
          location="Brooklyn, NY 10001"
          timezone="UTC-05:00"
          isp="SpaceX Starlink"
        />
    </HeaderContainer>
  )
}

export default Header