import { useState } from "react"
import arrowIcon from "../../assets/images/icon-arrow.svg"
import { SearchDiv, SearchInput, SearchButton } from "./Search.styled"
import { getData, identifyType } from "./searchLogic"
import { useLocation } from "../../context/LocationContext"
import { useUserInfo } from "../../context/UserInfoContext"

const Search = () => {

  const { setCoordinates } = useLocation()
  const { setIpData } = useUserInfo()
  
  const [ search, setSearch ] = useState("")
  const [ shaking, setShaking ] = useState(false)

  const shakeEffect = () => {
      setShaking(true)
      setTimeout(() => {
        setShaking(false)
      }, 500)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    const inputType = identifyType(search)
    if (inputType === "Invalid") {
      shakeEffect(inputType)
    } else {
      const { ip, location, isp } = await getData(inputType, search)
      const newCoordinates = [location.lat, location.lng]
      const newIpData = {
        ip,
        location: `${location.country}, ${location.region}, ${location.city}`,
        isp: isp || "Unknow Provider"
      }
      setCoordinates(newCoordinates);
      setIpData(newIpData);
    }
  }

  return (
    <SearchDiv $shaking={shaking}>
        <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} type="search" name="search" placeholder="Search for any IP address or domain"/>
        <SearchButton onClick={handleSearch}><img src={arrowIcon} alt="Logo" /></SearchButton>
    </SearchDiv>
  )

}

export default Search